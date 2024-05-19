import { fixture } from "@/types/fixture";

export type fixtureStatus =
  | "TBD"
  | "NS"
  | "1H"
  | "HT"
  | "2H"
  | "BT"
  | "P"
  | "SUSP"
  | "INT"
  | "FT"
  | "AET"
  | "PEN"
  | "PST"
  | "CANC"
  | "ABD"
  | "AWD"
  | "WO"
  | "LIVE";

export interface IScore {
  fixture: fixture;
}
