import React from 'react';
import { Button } from '@/shared/ui';

const GameControls = () => {
  return (
    <>
      <div className="w-32">
        <Button className="primary-button">Submit step</Button>
      </div>
      <div className="w-32">
        <Button className="primary-button">Reset step</Button>
      </div>
    </>
  );
};

export default GameControls;
