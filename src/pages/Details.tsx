import React, { useState } from "react";
import { useLoaderData, LoaderFunctionArgs } from "react-router-dom";
import { QueryClient } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

import { Container } from "@/components/UI/Container";
import ButtonGroup from "../components/ButtonGroup";

import { fixtureDetails } from "../types/fixture";
import api from "../services/api";

import Background from "../assets/images/background_details.png";
import Tactics from "../assets/icons/tactics.svg";
import EventList from "../components/EventList";
import { buttonGroupDefinition } from "../types/buttonGroup";
import Statistics from "../components/Statistics";
import Lineup from "../components/Lineup";

const STATUS_RELATION = {
  TBD: "Sem data definida",
  NS: "Não iniciado",
  "1H": "1º Tempo",
  HT: "Intervalo",
  "2H": "2º Tempo",
  BT: "Prorrogação",
  P: "Pênaltis",
  SUSP: "Suspenso",
  INT: "Interrompido",
  FT: "Finalizado",
  AET: "Finalizado",
  PEN: "Finalizado",
  PST: "Adiado",
  CANC: "Cancelado",
  ABD: "Jogo Suspenso",
  AWD: "Finalizado",
  WO: "Finalizado",
  LIVE: "Ao vivo",
};

async function fetchHttp(id: string) {
  const response = await api.get(`fixtures?id=${id}`);
  return response;
}

export const loader = async (
  queryCLient: QueryClient,
  { params }: LoaderFunctionArgs
) => {
  const response: AxiosResponse = await queryCLient.ensureQueryData({
    queryKey: ["fixture", "details", params.fixtureId],
    queryFn: () => fetchHttp(params.fixtureId!),
  });
  const fixture: fixtureDetails = response.data.response[0];
  return { fixture };
};

function handleFixtureStatus(status: keyof typeof STATUS_RELATION) {
  return STATUS_RELATION[status] || null;
}

function orderEventsFunction(
  event: fixtureDetails["events"][0],
  nextEvent: fixtureDetails["events"][0]
) {
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
        <div className="flex justify-center items-start gap-20 mt-14">
          <div className="flex flex-col items-center gap-4">
            <img src={fixture.teams.home.logo} alt="Home Team" />
            <p className="text-white text-lg font-bold w-52 text-center">
              {fixture.teams.home.name}
            </p>
          </div>
          <div className="flex flex-col items-center mt-6">
            <p className="text-white text-xs font-regular">
              {handleFixtureStatus(
                fixture.fixture.status.short as keyof typeof STATUS_RELATION
              ) ?? fixture.fixture.status.long}
            </p>
            <div className="flex gap-7">
              <span className="text-white text-4xl font-regular font-righteous">
                {fixture.goals.home ?? " "}
              </span>
              <span className="text-white text-4xl font-bold font-montserrat">
                -
              </span>
              <span className="text-white text-4xl font-regular font-righteous">
                {fixture.goals.away ?? " "}
              </span>
            </div>
          </div>
          <div className="flex flex-col items-center gap-4">
            <img src={fixture.teams.away.logo} alt="Away Team" />
            <p className="text-white text-lg font-bold w-52 text-center">
              {fixture.teams.away.name}
            </p>
          </div>
        </div>

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
