import { Player } from "@/components/Details/Lineup/Player";

import { IPlayerFormation } from "./types";
import { FormationLine } from "../FormationLine";

export default function PlayersFormation({
  playersPosition,
  formationLines,
}: IPlayerFormation) {
  const goalKeeper = playersPosition[0];

  return (
    <div
      className="absolute top-0 left-0 flex flex-col items-center w-full h-full"
      data-testid="playersFormation"
    >
      <div className="flex">
        <Player
          number={goalKeeper.player.number}
          name={goalKeeper.player.name}
        />
      </div>
      {formationLines.map((playersQtd, indexFormationRows) => {
        const rowsQtd = Math.ceil(Number(playersQtd) / 2);
        const playersInRow = playersPosition.filter(
          (playersPosition) =>
            Number(playersPosition.player.grid.charAt(0)) ===
            indexFormationRows + 2
        );

        return (
          <FormationLine
            rowsQtd={rowsQtd}
            indexFormationRows={indexFormationRows}
            playersInRow={playersInRow}
            key={indexFormationRows}
          />
        );
      })}
    </div>
  );
}
