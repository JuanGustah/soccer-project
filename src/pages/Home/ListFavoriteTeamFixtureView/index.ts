import ListFavoriteTeamFixtureView from "./ListFavoriteTeamFixtureView";

import { filteredFavoriteTeamFixtures } from "@/types/selectedFixtures";
import { fixtureResponse } from "@/types/fixtureResponse";

export function populateFixturesFavoriteTeams(
  favoriteTeamsResponse: fixtureResponse[]
) {
  const filteredFavoriteTeamsFixtures: filteredFavoriteTeamFixtures = {};

  favoriteTeamsResponse.map((fixtureResponse) => {
    const fixtures = fixtureResponse.response;
    const teamId = fixtureResponse.parameters.team!;

    filteredFavoriteTeamsFixtures[teamId] = {};

    fixtures.forEach((fixture) => {
      if (!filteredFavoriteTeamsFixtures[teamId][fixture.league.id]) {
        filteredFavoriteTeamsFixtures[teamId][fixture.league.id] = [];
      }
      filteredFavoriteTeamsFixtures[teamId][fixture.league.id].push(fixture);
    });
  });

  return filteredFavoriteTeamsFixtures;
}

export default ListFavoriteTeamFixtureView;
