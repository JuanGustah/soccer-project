import React from "react";

import {
  generateDescriptionElementEvent,
  generateIconEvent,
  generateTimeEvent,
  generateTitleEvent,
} from "./helpers";

import { IEventListProps, eventStatus } from "./types";

export default function EventList({ events, idTeamHome }: IEventListProps) {
  return (
    <React.Fragment>
      {events.map((event, index: number) => {
        const time = generateTimeEvent(event.time.elapsed, event.time.extra);

        const isHomeTeam = event.team.id === idTeamHome;
        const rowOrderClass = isHomeTeam ? "flex-row" : "flex-row-reverse";
        const textAlignClass = isHomeTeam ? "text-left" : "text-right";

        const eventType = event.type.toLowerCase() as eventStatus;

        return (
          <div
            className={`px-6 py-5 bg-white flex justify-between items-center rounded-xl w-3/4 ${rowOrderClass}`}
            key={`event-${index}`}
          >
            <div
              className={`flex items-center gap-7 ${rowOrderClass} ${textAlignClass}`}
            >
              <div className="flex justify-center items-center w-16">
                <img
                  src={generateIconEvent(eventType, event.detail)}
                  alt={`${eventType} icon`}
                  className="h-16"
                />
              </div>
              <div>
                <h5 className="font-semi-bold text-md">
                  {generateTitleEvent(eventType)}
                </h5>
                <p className="font-regular text-xs">
                  {generateDescriptionElementEvent(
                    eventType,
                    event.detail,
                    event.player.name,
                    event.assist.name,
                    event.team.name
                  )}
                </p>
              </div>
            </div>
            <div className="flex items-start gap-2.5">
              <span className="font-bold text-2xl">{time.time}'</span>
              <span className="font-bold text-sm text-metal">{time.stage}</span>
            </div>
          </div>
        );
      })}
    </React.Fragment>
  );
}
