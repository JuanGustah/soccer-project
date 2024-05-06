import React from "react";
import { fixtureDetails } from "../types/fixture";
import LineupContent from "./LineupContent";

interface ILineupProps {
  lineups: fixtureDetails["lineups"];
}

export default function Lineup({ lineups }: ILineupProps) {
  const lineupHome = lineups[0];
  const lineupAway = lineups[1];

  return (
    <React.Fragment>
      <div className="flex justify-center gap-20">
        <LineupContent
          teamName={lineupHome.team.name}
          formation={lineupHome.formation}
          playersPosition={lineupHome.startXI}
        />
        <LineupContent
          teamName={lineupAway.team.name}
          formation={lineupAway.formation}
          playersPosition={lineupAway.startXI}
        />
      </div>
    </React.Fragment>
  );
}
