import React from 'react';
import { ImageCustom } from '@/shared/ui';

const GameSessionStages = () => {
  return (
    <div className="flex gap-2 h-fit mb-2">
      <div>
        <ImageCustom
          src="/images/other/stage_a.png"
          alt="stage-a"
          className="w-auto h-auto"
        />
      </div>
      <div>
        <ImageCustom
          src="/images/other/stage_b.png"
          alt="stage-b"
          className="w-auto h-auto"
        />
      </div>
      <div>
        <ImageCustom
          src="/images/other/stage_c.png"
          alt="stage-c"
          className="w-auto h-auto"
        />
      </div>
      <div>
        <ImageCustom
          src="/images/other/stage_d.png"
          alt="stage-d"
          className="w-auto h-auto"
        />
      </div>
    </div>
  );
};

export default GameSessionStages;
