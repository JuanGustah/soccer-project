import { generateTimeEvent } from "./helper";

import { IEventTimeProps } from "./types";

export default function EventTime({ time }: IEventTimeProps) {
  const timeInfo = generateTimeEvent(time.elapsed, time.extra);

  return (
    <div className="flex items-start gap-2.5">
      <span className="font-bold text-2xl">{timeInfo.time}'</span>
      <span className="font-bold text-sm text-metal">{timeInfo.stage}</span>
    </div>
  );
}
