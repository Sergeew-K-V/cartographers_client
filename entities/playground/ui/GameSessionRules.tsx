import React from 'react';
import { IGameSessionClient } from '@/shared/api';
import { ImageCustom } from '@/shared/ui';

interface GameSessionRulesProps {
  gameSession: IGameSessionClient;
}

const GameSessionRules = ({ gameSession }: GameSessionRulesProps) => {
  return (
    <div className="flex gap-2 h-fit mb-2">
      {gameSession.rules.map((rule) => {
        return (
          <div key={rule} className="relative">
            <ImageCustom
              src={`/images/points_card/${rule}`}
              alt={rule}
              scalable
              className="cursor-zoom-in"
            />
          </div>
        );
      })}
    </div>
  );
};

export default GameSessionRules;
