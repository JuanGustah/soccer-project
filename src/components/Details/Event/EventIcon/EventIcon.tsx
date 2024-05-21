import { generateIconEvent } from "./helper";

import { IEventIcon } from "./types";

export default function EventIcon({ eventType, eventDetail }: IEventIcon) {
  return (
    <div className="flex justify-center items-center w-16">
      <img
        src={generateIconEvent(eventType, eventDetail)}
        alt={`${eventType} icon`}
        className="h-16"
      />
    </div>
  );
}
