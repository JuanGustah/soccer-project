import React from "react";

import { Event } from "@/components/Details/Event";

import { IEventListProps } from "./types";

export default function EventList({ events, idTeamHome }: IEventListProps) {
  return (
    <React.Fragment>
      {events.map((event, index: number) => {
        const isHomeTeam = event.team.id === idTeamHome;

        return (
          <Event
            isEventFromHomeTeam={isHomeTeam}
            event={event}
            key={`event-${index}`}
          />
        );
      })}
    </React.Fragment>
  );
}
