import { EventIcon } from "./EventIcon";
import { EventInfo } from "./EventInfo";
import { EventTime } from "./EventTime";

import { IEventProps, eventStatus } from "./types";

export default function Event({ isEventFromHomeTeam, event }: IEventProps) {
  const rowOrderClass = isEventFromHomeTeam ? "flex-row" : "flex-row-reverse";
  const textAlignClass = isEventFromHomeTeam ? "text-left" : "text-right";

  const eventType = event.type.toLowerCase() as eventStatus;

  return (
    <div
      className={`px-6 py-5 bg-white flex justify-between items-center rounded-xl w-3/4 ${rowOrderClass}`}
    >
      <div
        className={`flex items-center gap-7 ${rowOrderClass} ${textAlignClass}`}
      >
        <EventIcon eventDetail={event.detail} eventType={eventType} />
        <EventInfo
          eventType={eventType}
          eventPlayer={event.player.name}
          eventAssist={event.assist.name}
          eventDetail={event.detail}
          eventTeam={event.team.name}
        />
      </div>
      <EventTime time={event.time} />
    </div>
  );
}
