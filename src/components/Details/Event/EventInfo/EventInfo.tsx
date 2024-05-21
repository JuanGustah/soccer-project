import { EventInfoDescription } from "./EventInfoDescription";
import { EventInfoTitle } from "./EventInfoTitle";

import { EventInfoProps } from "./types";

export default function EventInfo({
  eventType,
  eventDetail,
  eventPlayer,
  eventAssist,
  eventTeam,
}: EventInfoProps) {
  return (
    <div>
      <EventInfoTitle eventType={eventType} />
      <EventInfoDescription
        eventType={eventType}
        eventDetail={eventDetail}
        eventPlayer={eventPlayer}
        eventAssist={eventAssist}
        eventTeam={eventTeam}
      />
    </div>
  );
}
