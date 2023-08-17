interface PlayerStatsProps {
  name: string;
  isReady: boolean;
  score: number | '';
}

const PlayerStats = ({ isReady, name, score }: PlayerStatsProps) => {
  return (
    <tr className="border-b text-center">
      <th
        scope="row"
        className={`px-6 py-4 whitespace-nowrap font-bold text-primary-700`}
      >
        {name}
      </th>
      <td className="px-6 py-4">{isReady ? 'Yes' : 'No'}</td>
      <td className="px-6 py-4">{score ? score : 0}</td>
    </tr>
  );
};

export default PlayerStats;
