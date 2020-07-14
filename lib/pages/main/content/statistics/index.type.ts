export type PieceOfChart = {
  name: string;
  value?: number;
  children?: Array<PieceOfChart>;
};
