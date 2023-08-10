import React from 'react';
import { Button, ImageCustom } from '@/shared/ui';

interface HostControlsProps {
  rerollPointCardsHandler: () => void;
}

function HostControls({ rerollPointCardsHandler }: HostControlsProps) {
  return (
    <>
      <div className="w-32">
        <Button className="primary-button">Start game</Button>
      </div>
      <div className="w-32">
        <Button
          className="primary-button flex items-center justify-evenly"
          onClick={rerollPointCardsHandler}
        >
          <ImageCustom
            src="/images/icons/refresh-icon.png"
            alt="refresh-icon"
            className="cursor-pointer w-5 hover:rotate-180 transition-all "
          />
          Reroll
        </Button>
      </div>
    </>
  );
}

export default HostControls;
