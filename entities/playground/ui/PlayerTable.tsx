import React from 'react';
import { ILobbySession } from '@/shared/api';
import PlayerStats from './PlayerStats';

interface PlayerTableProps {
  playerList: ILobbySession;
}

function PlayerTable({ playerList }: PlayerTableProps) {
  return (
    <div className="row-start-3">
      <div className="mb-2">Game stats</div>
      <table className="text-sm text-left text-secondary-500 shadow-xl">
        <thead className="text-xs text-secondary-700 uppercase bg-secondary-200">
          <tr>
            <th scope="col" className="px-6 py-3">
              Player
            </th>
            <th scope="col" className="px-6 py-3">
              Ready for next card
            </th>
            <th scope="col" className="px-6 py-3">
              Current Score
            </th>
          </tr>
        </thead>
        <tbody>
          {Object.values(playerList).map((player, index) => {
            return (
              <PlayerStats
                isReady={player.isReady}
                name={player.nickname}
                score={player.score}
                key={index}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default PlayerTable;
