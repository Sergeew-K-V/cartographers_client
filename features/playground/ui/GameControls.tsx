import React from 'react';
import { Button } from '@/shared/ui';

function GameControls() {
  return (
    <div className="flex gap-2">
      <div className="w-32">
        <Button className="primary-button">Submit step</Button>
      </div>
      <div className="w-32">
        <Button className="primary-button">Reset step</Button>
      </div>
    </div>
  );
}

export default GameControls;
