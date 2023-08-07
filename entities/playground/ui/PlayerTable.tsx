import React from 'react';
import { ILobbyPlayerMap } from '@/shared/api';
import PlayerStats from './PlayerStats';

interface PlayerTableProps {
  playerList: ILobbyPlayerMap;
}

function PlayerTable({ playerList }: PlayerTableProps) {
  return (
    <div>
      <div className="mb-2">Game stats</div>
      <table className="text-sm text-left text-secondary-500 shadow-xl bg-secondary-50 h-fit">
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
