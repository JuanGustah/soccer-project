import { fixtureTeam } from "@/types/fixture";

export interface FixtureProps {
  id: number;
  epochTimestamp: number;
  home: fixtureTeam;
  away: fixtureTeam;
  showDate: boolean;
}
