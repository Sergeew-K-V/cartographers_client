import React from 'react';
import { IGameSession } from '@/shared/api';
import { ImageCustom } from '@/shared/ui';

interface GameSessionRulesProps {
  gameSession: IGameSession;
}

function GameSessionRules({ gameSession }: GameSessionRulesProps) {
  return (
    <div className="flex gap-2 h-fit mb-2">
      {gameSession.rules.map((rule) => {
        return (
          <div key={rule} className="relative">
            <ImageCustom
              src={rule}
              alt={rule}
              scalable
              className="cursor-zoom-in"
            />
          </div>
        );
      })}
    </div>
  );
}

export default GameSessionRules;
