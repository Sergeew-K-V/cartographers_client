import React from 'react';
import { Button } from '@/shared/ui';

type GameControlsProps = {
  onSubmitStep: () => void;
  isSubmitted: boolean;
};

const GameControls = ({ onSubmitStep, isSubmitted }: GameControlsProps) => {
  return (
    <>
      <div className="w-32">
        <Button className="primary-button" onClick={onSubmitStep}>
          {isSubmitted ? 'Reset step' : 'Submit step'}
        </Button>
      </div>
    </>
  );
};

export default GameControls;
