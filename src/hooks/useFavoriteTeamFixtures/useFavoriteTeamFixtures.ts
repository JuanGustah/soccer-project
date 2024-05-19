import { dateHelper } from "@/helpers/date.helper";

import { favoriteTeam } from "@/types/favoriteTeam";

import { useBatchFetch } from "../useBatchFetch";

export default function useFavoriteTeamFixtures<T>(
  favoriteTeams: favoriteTeam[]
) {
  const today = dateHelper();
  const dayNextWeek = today.add(7, "days");

  const staleTime = 60 * 60 * 24 * 1000;
  const queriesParams = favoriteTeams.map((team) => [
    {
      key: "team",
      value: String(team.id),
    },
    {
      key: "season",
      value: "2024",
    },
    {
      key: "from",
      value: today.format("YYYY-MM-DD"),
    },
    {
      key: "to",
      value: dayNextWeek.format("YYYY-MM-DD"),
    },
    {
      key: "timezone",
      value: "America/Sao_Paulo",
    },
  ]);

  const favoriteTeamsFetch = useBatchFetch<T>(queriesParams, staleTime);

  return favoriteTeamsFetch;
}
