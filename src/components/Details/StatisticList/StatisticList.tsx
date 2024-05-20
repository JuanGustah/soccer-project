import React from "react";

import Statistic from "../Statistic/Statistic";

import { STATS_RELATION } from "./constants";

import { IStatisticsProps } from "./types";

export type buttonGroupKeys = keyof typeof STATS_RELATION;

export default function StatisticList({ statistics }: IStatisticsProps) {
  const homeStatistics = statistics[0].statistics;
  const awayStatistics = statistics[1].statistics;

  return (
    <React.Fragment>
      {Object.keys(STATS_RELATION).map((statistic, index) => {
        const statName = STATS_RELATION[statistic as buttonGroupKeys];
        const teamHomeStat = homeStatistics[index].value ?? 0;
        const teamAwayStat = awayStatistics[index].value ?? 0;

        return (
          <Statistic
            statName={statName}
            homeStatValue={teamHomeStat}
            awayStatValue={teamAwayStat}
          />
        );
      })}
    </React.Fragment>
  );
}
