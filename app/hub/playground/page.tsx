import { AlertList, Button, ImageCustom } from '@/shared/ui';

function PlaygroundPage(): JSX.Element {
  return (
    <main className="min-h-[calc(100vh-64px)] p-6 bg-secondary-50">
      <div className="container min-w-full relative">
        <div className="grid grid-cols-3 w-full justify-items-center">
          <div className=" bg-green-500"></div>
          <div className=" bg-red-500">
            <ImageCustom
              src={'/images/Cartographers_game_field.png'}
              alt={'Game field'}
            />
          </div>
          <div className=" bg-yellow-500"></div>
        </div>

        {/* <div className="flex gap-x-3">
          <div className="w-40">
            <Button>Create lobby</Button>
          </div>
        </div> */}
      </div>
      <AlertList />
    </main>
  );
}

export default PlaygroundPage;
