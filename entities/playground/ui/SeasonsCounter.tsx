interface SeasonsCounterProps {
  seasonsList: number[];
}

function SeasonsCounter({ seasonsList }: SeasonsCounterProps) {
  const [seasonFirst, seasonSecond, coins, enemy] = seasonsList;
  return (
    <div className="grid grid-cols-2 gap-2">
      <div className="grid grid-cols-2 text-center gap-1">
        <span>{seasonFirst}</span>
        <span>{seasonSecond}</span>
        <span>{coins}</span>
        <span>{enemy}</span>
      </div>
      <div className="flex items-center ml-1">
        {seasonFirst + seasonSecond + coins - enemy}
      </div>
    </div>
  );
}

export default SeasonsCounter;
