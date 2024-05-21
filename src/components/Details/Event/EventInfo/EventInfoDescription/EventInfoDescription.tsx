import { generateDescriptionElementEvent } from "./helper";

import { IEventInfoDescriptionProps } from "./types";

export default function EventInfoDescription({
  eventType,
  eventDetail,
  eventPlayer,
  eventAssist,
  eventTeam,
}: IEventInfoDescriptionProps) {
  return (
    <p className="font-regular text-xs">
      {generateDescriptionElementEvent(
        eventType,
        eventDetail,
        eventPlayer,
        eventAssist,
        eventTeam
      )}
    </p>
  );
}
