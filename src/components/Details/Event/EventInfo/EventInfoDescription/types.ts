import { eventStatus } from "../../types";

export interface IEventInfoDescriptionProps {
  eventType: eventStatus;
  eventDetail: string;
  eventPlayer: string;
  eventAssist: string;
  eventTeam: string;
}
