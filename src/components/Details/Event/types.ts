import { fixtureEvent } from "@/types/fixture";

export interface IEventProps {
  isEventFromHomeTeam: boolean;
  event: fixtureEvent;
}

export type eventStatus = "goal" | "card" | "subst" | "var";
