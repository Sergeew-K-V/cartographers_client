import React from 'react';
import { IUserGameData } from '@/shared/api';
import { countScore } from '@/shared/lib';
import PlayerStats from './PlayerStats';

interface PlayerTableProps {
  playerList: IUserGameData[];
}

const PlayerTable = ({ playerList }: PlayerTableProps) => {
  return (
    <div>
      <div className="mb-2">Game stats</div>
      <table className="text-sm text-left text-secondary-500 shadow-xl bg-secondary-50 h-fit w-full">
        <thead className="text-xs text-secondary-700 uppercase bg-secondary-200 text-center">
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
          {playerList.map((player) => {
            return (
              <PlayerStats
                isReady={player.isReady}
                name={player.nickname}
                score={countScore(player)}
                key={player._id}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default PlayerTable;
