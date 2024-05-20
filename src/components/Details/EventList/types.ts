import { fixtureEvent } from "@/types/fixture";

export interface IEventListProps {
  events: fixtureEvent[];
  idTeamHome: number;
}

export type eventStatus = "goal" | "card" | "subst" | "var";
