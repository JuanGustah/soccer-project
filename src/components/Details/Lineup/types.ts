import { lineup } from "@/types/fixture";

export interface ILineupProps {
  teamName: string;
  formation: string;
  playersPosition: lineup["startXI"];
}
