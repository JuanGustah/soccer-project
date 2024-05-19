import { Fixture } from "@/components/Home/Fixture";

import { IFixtureListProps } from "./types";

export default function FixtureList({ fixtures, showDate }: IFixtureListProps) {
  const fixtureLeague = fixtures[0].league;

  return (
    <div className="flex flex-col gap-y-6 mt-3">
      <h4 className="font-medium text-sm text-snow">{fixtureLeague.name}</h4>
      <div className="flex flex-col gap-y-8">
        {fixtures.map((fixtureInfo) => {
          const { id, timestamp } = fixtureInfo.fixture;
          const { away, home } = fixtureInfo.teams;

          return (
            <Fixture
              key={id}
              id={id}
              epochTimestamp={timestamp}
              away={away}
              home={home}
              showDate={showDate}
            />
          );
        })}
      </div>
    </div>
  );
}
