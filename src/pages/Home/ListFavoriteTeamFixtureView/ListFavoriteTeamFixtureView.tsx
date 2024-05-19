import { TeamFixtureList } from "@/components/Home/TeamFixtureList";

import { useFavoriteTeamFixtures } from "@/hooks/useFavoriteTeamFixtures";

import { filteredFavoriteTeamFixtures } from "@/types/selectedFixtures";
import { fixtureResponse } from "@/types/fixtureResponse";
import { IListFavoriteTeamFixtureView } from "./types";

import Fans from "@/assets/icons/fan.svg";

import { populateFixturesFavoriteTeams } from ".";

export default function ListFavoriteTeamFixtureView({
  favoriteTeams,
}: IListFavoriteTeamFixtureView) {
  let filteredFavoriteTeamsFixtures: filteredFavoriteTeamFixtures = {};

  const { isSuccess, data } =
    useFavoriteTeamFixtures<fixtureResponse>(favoriteTeams);

  if (isSuccess) {
    filteredFavoriteTeamsFixtures = populateFixturesFavoriteTeams(data);

    return (
      <section>
        <span className="flex items-center gap-2 mt-28">
          <h2 className="font-extra-bold text-xl text-white">
            Seus times do coração
          </h2>
          <img src={Fans} alt="soccer fans" width={30} height={30} />
        </span>
        <div className="flex flex-col mt-8">
          {Object.keys(filteredFavoriteTeamsFixtures).map((favoriteTeamId) => {
            const favoriteTeam = favoriteTeams.find(
              (team) => team.id == Number(favoriteTeamId)
            )!;
            const favoriteTeamFixtures =
              filteredFavoriteTeamsFixtures[Number(favoriteTeamId)];

            return (
              <TeamFixtureList
                team={favoriteTeam}
                teamFixtures={favoriteTeamFixtures}
              />
            );
          })}
        </div>
      </section>
    );
  }

  return <div>Carregando...</div>;
}
