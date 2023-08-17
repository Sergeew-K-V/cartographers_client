import React from 'react';
import { Button, ImageCustom } from '@/shared/ui';

interface HostControlsProps {
  rerollPointCardsHandler: () => void;
  sessionStarted: boolean;
  isSessionHost: boolean;
  handleChangeGameStatus: () => void;
}

const HostControls = ({
  rerollPointCardsHandler,
  sessionStarted,
  isSessionHost,
  handleChangeGameStatus,
}: HostControlsProps) => {
  return (
    <>
      <div className="w-32">
        {sessionStarted ? (
          <Button
            className="primary-button"
            disabled={!isSessionHost}
            onClick={handleChangeGameStatus}
          >
            End game
          </Button>
        ) : (
          <Button
            className="primary-button"
            disabled={!isSessionHost}
            onClick={handleChangeGameStatus}
          >
            Start game
          </Button>
        )}
      </div>
      <div className="w-32">
        <Button
          className="primary-button flex items-center justify-evenly"
          onClick={rerollPointCardsHandler}
          disabled={!isSessionHost || sessionStarted}
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
};

export default HostControls;
