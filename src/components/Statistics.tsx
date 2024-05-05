import React from "react";
import { fixtureDetails } from "../types/fixture";

interface IStatisticsProps {
  statistics: fixtureDetails["statistics"];
}

const STATS_RELATION = {
  "Shots on Goal": "Chutes ao Gol",
  "Shots off Goal": "Chutes pra fora",
  "Total Shots": "Finalizações",
  "Blocked Shots": "Chutes bloqueados",
  "Shots insidebox": "Chutes dentro da área",
  "Shots outsidebox": "Chutes fora da área",
  Fouls: "Faltas",
  "Corner Kicks": "Escanteios",
  Offsides: "Impedimentos",
  "Ball Possession": "Posse de bola",
  "Yellow Cards": "Cartões amarelos",
  "Red Cards": "Cartões vermelhos",
  "Goalkeeper Saves": "Defesas",
  "Total passes": "Total de passes",
  "Passes accurate": "Precisão de passes",
  "Passes %": "Porcentagem de passes",
  expected_goals: "Média de gols",
};

export default function Statistics({ statistics }: IStatisticsProps) {
  const homeStatistics = statistics[0].statistics;
  const awayStatistics = statistics[1].statistics;

  return (
    <React.Fragment>
      {Object.keys(STATS_RELATION).map((statistic, index) => {
        const teamHomeStat = homeStatistics[index].value ?? 0;
        const valueOfTeamHomeStat =
          typeof teamHomeStat == "number"
            ? teamHomeStat
            : Number(teamHomeStat.replace("%", ""));
        const teamAwayStat = awayStatistics[index].value ?? 0;
        const valueOfTeamAwayStat =
          typeof teamAwayStat == "number"
            ? teamAwayStat
            : Number(teamAwayStat.replace("%", ""));

        const totalBarWidth = 28.75;

        const homeStatWidth =
          (totalBarWidth * valueOfTeamHomeStat) /
          (valueOfTeamAwayStat + valueOfTeamHomeStat);
        const awayStatWidth =
          (totalBarWidth * valueOfTeamAwayStat) /
          (valueOfTeamAwayStat + valueOfTeamHomeStat);

        return (
          <div className="flex flex-col items-center gap-6" key={statistic}>
            <h5 className="font-semi-bold text-white text-md">
              {STATS_RELATION[statistic as keyof typeof STATS_RELATION]}
            </h5>
            <div className="flex items-center gap-5">
              <div className="flex items-center gap-7">
                <span className="font-semi-bold text-white text-md ">
                  {teamHomeStat}
                </span>
                <div className="rounded-full bg-cobalt relative w-115 h-7">
                  <div
                    className={`rounded-full bg-lime absolute right-0 h-7`}
                    style={{ width: `${homeStatWidth}rem` }}
                  ></div>
                </div>
              </div>
              <div className="flex items-center gap-7">
                <div className="rounded-full bg-cobalt relative w-115 h-7">
                  <div
                    className={`rounded-full bg-lime absolute lef-0 h-7`}
                    style={{ width: `${awayStatWidth}rem` }}
                  ></div>
                </div>
                <span className="font-semi-bold text-white text-md ">
                  {teamAwayStat}
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </React.Fragment>
  );
}
