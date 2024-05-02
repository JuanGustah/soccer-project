import React from "react";
import { useLoaderData, LoaderFunctionArgs } from "react-router-dom";

import Container from "../components/Container";

import Background from "../assets/images/background_details.png";
import Tactics from "../assets/icons/tactics.svg";
import { QueryClient } from "@tanstack/react-query";
import api from "../services/api";
import { AxiosResponse } from "axios";
import { fixture } from "../types/fixture";

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
  const fixture: fixture = response.data.response[0];
  return { fixture };
};

function handleFixtureStatus(status: keyof typeof STATUS_RELATION) {
  return STATUS_RELATION[status] || null;
}

export default function Details() {
  const { fixture } = useLoaderData() as { fixture: fixture };
  // console.log(fixture);

  return (
    <React.Fragment>
      <img
        src={Background}
        alt="background image"
        className="absolute inset-0 w-full z-negative"
      />
      <Container className="mt-14">
        <span className="flex items-center gap-2">
          <h2 className="font-extra-bold text-xl text-white">
            Detalhes da Partida
          </h2>
          <img src={Tactics} alt="soccer player" width={30} height={30} />
        </span>
        <h3 className="font-medium text-md text-metal">
          {fixture.league.round}
        </h3>
        <div className="flex justify-center items-center gap-20 mt-14">
          <div className="flex flex-col items-center gap-4">
            <img src={fixture.teams.home.logo} alt="Home Team" />
            <p className="text-white text-lg font-bold">
              {fixture.teams.home.name}
            </p>
          </div>
          <div className="flex flex-col items-center">
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
            <p className="text-white text-lg font-bold">
              {fixture.teams.away.name}
            </p>
          </div>
        </div>
      </Container>
    </React.Fragment>
  );
}
