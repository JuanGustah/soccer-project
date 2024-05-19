import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";

import { Container } from "@/components/UI/Container";
import ButtonGroup from "@/components/ButtonGroup";
import EventList from "@/components/EventList";
import Statistics from "@/components/Statistics";
import Lineup from "@/components/Lineup";

import { fixtureDetails, fixtureEvent } from "@/types/fixture";
import { buttonGroupDefinition } from "@/types/buttonGroup";

import Background from "@/assets/images/background_details.png";
import Tactics from "@/assets/icons/tactics.svg";
import { Score } from "@/components/Details/Score";

function orderEventsFunction(event: fixtureEvent, nextEvent: fixtureEvent) {
  const eventTime = event.time.elapsed;
  const nextEventTime = nextEvent.time.elapsed;

  return eventTime - nextEventTime;
}

export default function Details() {
  const { fixture } = useLoaderData() as { fixture: fixtureDetails };

  const events = fixture.events.sort(orderEventsFunction);
  const statusFixtureNotStarted = [
    "TBD",
    "NS",
    "SUSP",
    "INT",
    "PST",
    "CANC",
    "ABD",
  ];

  const buttonGroupDefinition: buttonGroupDefinition = {
    resume: {
      label: "Resumo",
      contentControl: (
        <EventList events={events} idTeamHome={fixture.teams.home.id} />
      ),
      contentClassname: "flex flex-col items-center gap-6",
    },
    statistics: {
      label: "Estatísticas",
      contentControl: <Statistics statistics={fixture.statistics} />,
      contentClassname: "flex flex-col items-center gap-11",
    },
    lineup: {
      label: "Escalação",
      contentControl: <Lineup lineups={fixture.lineups} />,
      contentClassname: "text-white",
    },
  };
  const buttonGroupTexts = Object.keys(buttonGroupDefinition);

  const [activeContent, setActiveContent] = useState<
    keyof buttonGroupDefinition
  >(buttonGroupTexts[0] as keyof buttonGroupDefinition);

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
          <React.Fragment>
            <ButtonGroup
              buttonGroupDefinition={buttonGroupDefinition}
              activeLabel={activeContent}
              stateDispatch={setActiveContent}
            />
            <div className="mt-12">
              {Object.keys(buttonGroupDefinition).map((buttonTag) => {
                return (
                  <div
                    className={`${activeContent != buttonTag ? "hidden" : ""} ${
                      buttonGroupDefinition[buttonTag].contentClassname
                    }`}
                    key={buttonTag}
                  >
                    {buttonGroupDefinition[buttonTag].contentControl}
                  </div>
                );
              })}
            </div>
          </React.Fragment>
        ) : null}
      </Container>
    </React.Fragment>
  );
}
