import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";

import { Container } from "@/components/UI/Container";
import { Score } from "@/components/Details/Score";
import { ButtonGroup } from "@/components/Details/ButtonGroup";

import { EventList } from "@/components/Details/EventList";
import { StatisticList } from "@/components/Details/StatisticList";
import Lineup from "@/components/Lineup";

import { fixtureDetails, fixtureEvent } from "@/types/fixture";
import { buttonDefinition } from "@/components/Details/ButtonGroup/types";

import { buttonGroup, statusFixtureNotStarted } from "./constants";

import Background from "@/assets/images/background_details.png";
import Tactics from "@/assets/icons/tactics.svg";

function orderEventsFunction(event: fixtureEvent, nextEvent: fixtureEvent) {
  const eventTime = event.time.elapsed;
  const nextEventTime = nextEvent.time.elapsed;

  return eventTime - nextEventTime;
}

export type buttonGroupKeys = (typeof buttonGroup)[number]["key"];

export default function Details() {
  const { fixture } = useLoaderData() as { fixture: fixtureDetails };

  const events = fixture.events.sort(orderEventsFunction);

  const [activeButton, setActiveButton] = useState<buttonGroupKeys>(
    buttonGroup[0].key
  );

  return (
    <React.Fragment>
      <img
        src={Background}
        alt="background image"
        className="absolute inset-0 w-full z-negative"
      />
      <Container className="mt-14" htmlTag="main">
        <span className="flex items-center gap-2">
          <h2 className="font-extra-bold text-xl text-white">
            Detalhes da Partida
          </h2>
          <img src={Tactics} alt="soccer player" width={30} height={30} />
        </span>
        <h3 className="font-medium text-md text-metal">
          {fixture.league.round}
        </h3>

        <Score fixture={fixture} />

        {!statusFixtureNotStarted.includes(fixture.fixture.status.short) ? (
          <section className="flex flex-col gap-12">
            <ButtonGroup
              buttons={buttonGroup as unknown as buttonDefinition[]}
              activeButtonKey={activeButton}
              stateDispatch={setActiveButton}
            />
            <div
              className={`${
                activeButton !== "resume" ? "hidden" : ""
              } flex flex-col items-center gap-6`}
            >
              <EventList events={events} idTeamHome={fixture.teams.home.id} />
            </div>

            <div
              className={`${
                activeButton !== "stats" ? "hidden" : ""
              } flex flex-col items-center gap-11`}
            >
              <StatisticList statistics={fixture.statistics} />
            </div>

            <div className={`${activeButton !== "lineup" ? "hidden" : ""}`}>
              <Lineup lineups={fixture.lineups} />
            </div>
          </section>
        ) : null}
      </Container>
    </React.Fragment>
  );
}
