import { fixture } from "../types/fixture";
import Fixture from "./Fixture";

export default function FixtureList({ fixtures }: { fixtures: fixture[] }) {
  return (
    <div className="flex flex-col gap-y-6 mt-8">
      <h4 className="font-medium text-sm text-snow">
        {fixtures[0].league.name}
      </h4>
      <div className="flex flex-col gap-y-8">
        {fixtures.map((fixture) => {
          return (
            <Fixture
              key={fixture.fixture.id}
              id={fixture.fixture.id}
              epochTimestamp={fixture.fixture.timestamp}
              away={fixture.teams.away}
              home={fixture.teams.home}
            />
          );
        })}
      </div>
    </div>
  );
}
