import { fixture } from "../../../types/fixture";

export type selectedFixtures = {
  [key: number]: fixture[];
};

export interface IListDayFixtureView {
  selectedLeaguesId: number[];
}
