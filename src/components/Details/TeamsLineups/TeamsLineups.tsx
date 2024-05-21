import React from "react";

import { Lineup } from "@/components/Details/Lineup";

import { ITeamsLineupsProps } from "./types";

export default function TeamsLineups({
  lineups: [lineupHome, lineupAway],
}: ITeamsLineupsProps) {
  return (
    <React.Fragment>
      <Lineup
        teamName={lineupHome.team.name}
        formation={lineupHome.formation}
        playersPosition={lineupHome.startXI}
      />
      <Lineup
        teamName={lineupAway.team.name}
        formation={lineupAway.formation}
        playersPosition={lineupAway.startXI}
      />
    </React.Fragment>
  );
}
