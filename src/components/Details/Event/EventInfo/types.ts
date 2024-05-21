import { eventStatus } from "../types";

export interface EventInfoProps {
  eventType: eventStatus;
  eventDetail: string;
  eventPlayer: string;
  eventAssist: string;
  eventTeam: string;
}
