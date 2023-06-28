interface IPlayer {
  id: number;
  name: string;
  isReady: boolean;
  score: number;
}

interface ISeason {
  A?: number;
  B?: number;
  C?: number;
  D?: number;
  coins?: number;
  enemy?: number;
}

export type { IPlayer, ISeason };
