import { selectedFixtures } from "@/types/selectedFixtures";
import { favoriteTeam } from "@/types/favoriteTeam";

export interface ITeamFixtureList {
  team: favoriteTeam;
  teamFixtures: selectedFixtures;
}
