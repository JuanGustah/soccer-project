import { fixture } from "./fixture";

export type selectedFixtures = {
  [key: number]: fixture[];
};

export type filteredFavoriteTeamFixtures = {
  [key: number]: selectedFixtures;
};
