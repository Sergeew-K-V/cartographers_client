import { ISeason } from '../api';

interface SeasonsCounterProps {
  rules: ISeason[];
}

function SeasonsCounter({ rules }: SeasonsCounterProps) {
  const [First, Second] = [...rules];
  console.log(
    '🚀 ~ file: SeasonsCounter.tsx:7 ~ SeasonsCounter ~ First, Second:',
    First,
    Second
  );
  return (
    <div className="grid grid-cols-2 gap-2">
      <div className="grid grid-cols-2 gap-x-2">
        <span className="text-xl">First.season</span>
        <span className="text-xl">Second.season</span>
        <span>First.score</span>
        <span>Second.score</span>
      </div>
      <div className="flex items-center">{First.score + Second.score}</div>
    </div>
  );
}

export default SeasonsCounter;
