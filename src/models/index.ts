export interface IHeaderData {
  playerName: string;
  difficulty: string;
  revenue: number;
}

export interface IGameData extends IHeaderData{
  category: number
}