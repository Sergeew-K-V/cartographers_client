import React from 'react';
import { ImageCustom } from '@/shared/ui';

function GameSessionStages() {
  return (
    <div className="flex gap-2 h-fit mb-2">
      <div>
        <ImageCustom src="/images/other/stage_a.png" alt="stage-a" />
      </div>
      <div>
        <ImageCustom src="/images/other/stage_b.png" alt="stage-b" />
      </div>
      <div>
        <ImageCustom src="/images/other/stage_c.png" alt="stage-c" />
      </div>
      <div>
        <ImageCustom src="/images/other/stage_d.png" alt="stage-d" />
      </div>
    </div>
  );
}

export default GameSessionStages;
