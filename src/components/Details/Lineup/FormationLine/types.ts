import { playerPositionInGrid } from "@/types/fixture";

export interface IFormationLine {
  rowsQtd: number;
  indexFormationRows: number;
  playersInRow: playerPositionInGrid[];
}
