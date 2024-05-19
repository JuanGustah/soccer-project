import { fixtureResponse } from "@/types/fixtureResponse";
import { selectedFixtures } from "@/types/selectedFixtures";

import ListDayFixtureView from "./ListDayFixtureView";

export function populateFixturesToday(
  fixturesResponse: fixtureResponse,
  selectedLeaguesId: number[]
) {
  const fixtures = fixturesResponse.response;

  const selectedFixturesToday: selectedFixtures = {};

  fixtures.forEach((fixture) => {
    if (selectedLeaguesId.includes(fixture.league.id)) {
      if (!selectedFixturesToday[fixture.league.id]) {
        selectedFixturesToday[fixture.league.id] = [];
      }
      selectedFixturesToday[fixture.league.id].push(fixture);
    }
  });

  return selectedFixturesToday;
}

export default ListDayFixtureView;
