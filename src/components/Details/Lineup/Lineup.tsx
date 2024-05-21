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
        {/* <div className="absolute top-0 left-0 flex flex-col items-center w-full h-full">
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
              <div
                className="flex flex-col items-center mb-4"
                key={indexFormationRows}
              >
                {Array(rowsQtd)
                  .fill(undefined)
                  .map((_, indexDividedRows) => {
                    const playerStartRow = playersInRow.pop()!;
                    const playerEndRow =
                      playersInRow.length > 0 ? playersInRow.shift() : null;
                    const gap = 6 - 6 * indexDividedRows;

                    return (
                      <div
                        className="flex"
                        style={{ gap: `${gap}rem` }}
                        key={`${indexFormationRows}-${indexDividedRows}`}
                      >
                        <Player
                          number={playerStartRow.player.number}
                          name={playerStartRow.player.name}
                        />
                        {playerEndRow ? (
                          <Player
                            number={playerEndRow.player.number}
                            name={playerEndRow.player.name}
                          />
                        ) : null}
                      </div>
                    );
                  })}
              </div>
            );
          })}
        </div> */}
        <PlayersFormation
          playersPosition={playersPosition}
          formationLines={formationLines}
        />
      </div>
      <h5 className="text-white text-sm font-bold">{formation}</h5>
    </div>
  );
}
