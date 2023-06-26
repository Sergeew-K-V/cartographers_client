interface IPlayer {
  id: number;
  name: string;
  isReady: boolean;
  score: number;
}

interface ISeason {
  season: 'A' | 'B' | 'C' | 'D';
  score: number;
}

export type { IPlayer, ISeason };
