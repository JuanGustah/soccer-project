import { fixture } from "./fixture";

export type fixtureResponse = {
  get: string;
  parameters: {
    date?: string;
    team?: number;
  };
  errors: string[];
  results: number;
  paging: {
    current: number;
    total: number;
  };
  response: fixture[];
};
