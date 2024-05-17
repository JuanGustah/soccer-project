import { fixture } from "./fixture";

export type fixtureResponse = {
  get: string;
  errors: string[];
  results: number;
  paging: {
    current: number;
    total: number;
  };
  response: fixture[];
};
