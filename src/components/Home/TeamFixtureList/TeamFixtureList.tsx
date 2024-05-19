import FixtureList from "@/components/FixtureList";

import { ITeamFixtureList } from "./types";

export function TeamFixtureList({ team, teamFixtures }: ITeamFixtureList) {
  const { id, name, logo } = team;
  const altText = `${name} team logo`;

  return (
    <div className="flex flex-col gap-6" key={"section-" + id}>
      <div className="flex items-center w-fit gap-3 px-5 py-3 border-2 border-white rounded-full">
        <h3 className="text-white text-xs font-semi-bold">{name}</h3>
        <img src={logo} alt={altText} className="h-6" />
      </div>
      {Object.keys(teamFixtures).map((competition) => {
        const fixtures = teamFixtures[Number(competition)];

        return (
          <FixtureList
            key={competition}
            fixtures={fixtures}
            isFavoriteTeamFixtureList={true}
          />
        );
      })}
    </div>
  );
}
