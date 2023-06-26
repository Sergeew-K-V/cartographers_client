import React from 'react';
import { IPlayer } from '../api';
import PlayerStats from './PlayerStats';

interface PlayerTableProps {
  playerList: IPlayer[];
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
          {playerList.map((player) => (
            <PlayerStats
              isReady={player.isReady}
              name={player.name}
              score={player.score}
              key={player.id}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PlayerTable;
