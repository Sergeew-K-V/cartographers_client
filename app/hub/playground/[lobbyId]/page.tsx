'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import {
  CardControls,
  GameControls,
  HostControls,
  PlaygroundField,
} from '@/features/playground';
import {
  PlayerTable,
  CardView,
  GameSessionStages,
  GameSessionRules,
} from '@/entities/playground';
import {
  IGameCardData,
  IGameSessionClient,
  IUserGameData,
  IGameFieldMatrix,
  IGameCardType,
} from '@/shared/api';
import { useAuth, useSocket } from '@/shared/lib';
import { Button, Loader } from '@/shared/ui';
import { findPlayerById, isSessionHost } from './utils';

interface PlaygroundPageProps {
  params: { lobbyId: string };
}

const PlaygroundPage = ({ params }: PlaygroundPageProps): JSX.Element => {
  const lobbyId = params.lobbyId;
  const { getUserId } = useAuth();
  const { socket } = useSocket();
  const { push } = useRouter();
  const [gameSession, setGameSession] = useState<IGameSessionClient>();
  const [playerData, setPlayerData] = useState<IUserGameData>();
  const [isLoading, setIsLoading] = useState(false);
  const [cardData, setCardData] = useState<IGameCardData | null>(null);

  const matrixHandler = (row: number, column: number) => {
    const newMatrix: IGameFieldMatrix =
      playerData?.gameField as IGameFieldMatrix;
    if (cardData?.matrix) {
      for (let i = 0; i < cardData?.matrix.length; i++) {
        for (let j = 0; j < cardData?.matrix[i].length; j++) {
          const rowIndex = row + i;
          const cellIndex = column + j;
          if (
            rowIndex >= 0 &&
            rowIndex < newMatrix.length &&
            cellIndex >= 0 &&
            cellIndex < newMatrix[rowIndex].length
          ) {
            newMatrix[rowIndex][cellIndex] = cardData?.matrix[i][j]
              ? { type: cardData.type as IGameCardType, value: 1 }
              : newMatrix[rowIndex][cellIndex];
          }
        }
      }
      setPlayerData({
        ...playerData,
        gameField: newMatrix,
      } as IUserGameData);
    }
  };

  const leaveLobbyHandler = () => {
    setIsLoading(true);
    push('/hub');
    socket.emit('LEAVE_LOBBY', getUserId());
    socket.emit('REMOVE_GAME_SESSION', lobbyId, getUserId());
  };

  const rerollPointCardsHandler = () => {
    socket.emit('REROLL_POINT_CARDS', lobbyId, getUserId());
  };

  const handleChangeGameStatus = () => {
    if (gameSession) {
      if (gameSession.isStarted) {
        socket.emit('END_GAME', gameSession.id);
      } else {
        socket.emit('START_GAME', gameSession.id);
      }
    }
  };

  useEffect(() => {
    if (!socket.connected) {
      socket.connect();
    }

    if (!gameSession) {
      socket.emit('CREATE_GAME_SESSION', lobbyId, getUserId());
    }

    socket.on('GAME_SESSION_CREATED', (session) => {
      setGameSession(session);
      setPlayerData(findPlayerById(session, getUserId()));
    });

    socket.on('GAME_SESSION_UPDATED', (data) => {
      if (gameSession) {
        const updatedGameSession = { ...gameSession, ...data };

        setGameSession(updatedGameSession);
      }
    });

    return () => {
      socket.removeAllListeners('GAME_SESSION_CREATED');
      socket.removeAllListeners('GAME_SESSION_UPDATED');
    };
  }, [gameSession]);

  useEffect(() => {
    if (gameSession && gameSession.currentCard) {
      setCardData({
        ...cardData,
        card: gameSession.currentCard,
        type: gameSession.currentCard.type[0],
        matrix: gameSession.currentCard.matrix,
      });
    } else {
      setCardData(null);
    }
  }, [gameSession]);

  return (
    <div className="container min-w-full relative">
      {gameSession && playerData && (
        <div className="grid grid-cols-3 w-full justify-items-center">
          <div className="">
            <GameSessionStages />
            <GameSessionRules gameSession={gameSession} />
            <PlayerTable playerList={gameSession.players} />
            <div className="flex gap-2 mt-4">
              <HostControls
                sessionStarted={gameSession.isStarted}
                isSessionHost={isSessionHost(
                  gameSession.host,
                  playerData.nickname
                )}
                handleChangeGameStatus={handleChangeGameStatus}
                rerollPointCardsHandler={rerollPointCardsHandler}
              />
              <div className="w-32">
                <Button onClick={leaveLobbyHandler} className="primary-button">
                  Leave lobby
                </Button>
              </div>
            </div>
          </div>
          <div>
            <PlaygroundField
              playerData={playerData}
              matrixHandler={matrixHandler}
            />
          </div>
          <div className="relative">
            <CardView
              currentCard={gameSession.currentCard}
              poolOfCardsNumber={gameSession.poolOfCardsNumber}
              playedCards={gameSession.playedCards}
            />
            <CardControls cardData={cardData} setCardData={setCardData} />
            <div className="mt-4">
              <GameControls />
            </div>
          </div>
        </div>
      )}
      {isLoading && <Loader />}
    </div>
  );
};

export default PlaygroundPage;
