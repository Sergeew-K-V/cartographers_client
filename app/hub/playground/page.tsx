import { AlertList, Button } from '@/shared/ui';

function PlaygroundPage(): JSX.Element {
  return (
    <main className="min-h-[calc(100vh-64px)] p-6 bg-secondary-50">
      <h1 className="mb-4 text-xl font-semibold text-secondary-700">
        Welcome to Hub
      </h1>
      <div className="container">
        <div className="relative w-fit overflow-x-auto shadow-md sm:rounded-lg my-3"></div>

        <div className="flex gap-x-3">
          <div className="w-40">
            <Button>Create lobby</Button>
          </div>
        </div>
      </div>
      <AlertList />
    </main>
  );
}

export default PlaygroundPage;
