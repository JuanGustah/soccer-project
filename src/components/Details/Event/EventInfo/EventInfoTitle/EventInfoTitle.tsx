import { generateTitleEvent } from "./helper";

import { IEventInfoTitleProps } from "./types";

export default function EventInfoTitle({ eventType }: IEventInfoTitleProps) {
  return (
    <h5 className="font-semi-bold text-md">{generateTitleEvent(eventType)}</h5>
  );
}
