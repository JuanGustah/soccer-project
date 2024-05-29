import { ILineupProps } from "./types";

import Field from "@/assets/images/field.png";
import { PlayersFormation } from "./PlayersFormation";

export default function Lineup({
  teamName,
  formation,
  playersPosition,
}: ILineupProps) {
  const formationLines = formation.split("-");

  return (
    <div className="flex flex-col items-center gap-9">
      <h5 className="text-white text-sm font-bold">{teamName}</h5>
      <div className="relative">
        <img src={Field} alt="Field icon" />
        <PlayersFormation
          playersPosition={playersPosition}
          formationLines={formationLines}
        />
      </div>
      <h5 className="text-white text-sm font-bold">{formation}</h5>
    </div>
  );
}
