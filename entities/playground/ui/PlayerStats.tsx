interface PlayerStatsProps {
  name: string;
  isReady: boolean;
  score: number;
}

function PlayerStats({ isReady, name, score }: PlayerStatsProps) {
  return (
    <tr className="border-b text-center">
      <th
        scope="row"
        className={`px-6 py-4 whitespace-nowrap font-bold text-primary-700`}
      >
        {name}
      </th>
      <td className="px-6 py-4">{isReady ? 'Yes' : 'No'}</td>
      <td className="px-6 py-4">{score}</td>
    </tr>
  );
}

export default PlayerStats;
