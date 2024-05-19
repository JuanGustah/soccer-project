import { STATUS_RELATION } from "./consts";

import { IScore, fixtureStatus } from "./types";

function handleFixtureStatus(status: fixtureStatus) {
  return STATUS_RELATION[status] || null;
}

export default function Score({ fixture }: IScore) {
  const { home, away } = fixture.teams;
  const { home: homeGoals, away: awayGoals } = fixture.goals;
  const { status } = fixture.fixture;

  const homeGoalsText = homeGoals ?? " ";
  const awayGoalsText = awayGoals ?? " ";
  const statusText =
    handleFixtureStatus(status.short as fixtureStatus) ?? status.long;

  return (
    <div className="flex justify-center items-start gap-20 mt-14">
      <div className="flex flex-col items-center gap-4">
        <img src={home.logo} alt="Home Team" />
        <p className="text-white text-lg font-bold w-52 text-center">
          {home.name}
        </p>
      </div>
      <div className="flex flex-col items-center mt-6">
        <p className="text-white text-xs font-regular">{statusText}</p>
        <div className="flex gap-7">
          <span className="text-white text-4xl font-regular font-righteous">
            {homeGoalsText}
          </span>
          <span className="text-white text-4xl font-bold font-montserrat">
            -
          </span>
          <span className="text-white text-4xl font-regular font-righteous">
            {awayGoalsText}
          </span>
        </div>
      </div>
      <div className="flex flex-col items-center gap-4">
        <img src={away.logo} alt="Away Team" />
        <p className="text-white text-lg font-bold w-52 text-center">
          {away.name}
        </p>
      </div>
    </div>
  );
}
