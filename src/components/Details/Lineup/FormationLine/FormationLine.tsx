import { Player } from "@/components/Details/Lineup/Player";

import { IFormationLine } from "./types";

export default function FormationLine({
  rowsQtd,
  indexFormationRows,
  playersInRow,
}: IFormationLine) {
  return (
    <div
      className="flex flex-col items-center mb-4"
      data-testid="formationLine"
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
}
