import React from "react";

import Ball from "../assets/icons/ball.svg";
import Change from "../assets/icons/change.svg";
import CardY from "../assets/icons/yellow_card.svg";
import CardR from "../assets/icons/red_card.svg";
import VAR from "../assets/icons/var.svg";
import { fixtureDetails } from "../types/fixture";

interface EventListProps {
  events: fixtureDetails["events"];
  idTeamHome: number;
}

function generateTitleEvent(type: "goal" | "card" | "subst" | "var") {
  const typeTitleRelation = {
    goal: "Goooooool!",
    card: "Pintou cartão!",
    subst: "Substituição!",
    var: "Chama o Var!",
  };

  return typeTitleRelation[type] ?? null;
}

function generateDescriptionElementEvent(
  type: "goal" | "card" | "subst" | "var",
  detail: string,
  player: string,
  assist: string | null,
  team: string
) {
  let message = (
    <React.Fragment>
      Após árbitro de vídeo chamar, juiz vai ao VAR
    </React.Fragment>
  );

  if (type === "goal") {
    message = (
      <React.Fragment>
        {" "}
        <strong>{player}</strong> amplia o placar para <strong>{team}</strong>
      </React.Fragment>
    );
  }

  if (type === "card") {
    const cardType = detail.toLowerCase().includes("yellow")
      ? "amarelo"
      : "vermelho";
    message = (
      <React.Fragment>
        {" "}
        <strong>{player}</strong> recebe <strong>cartão {cardType}</strong> após
        entrada forte
      </React.Fragment>
    );
  }

  if (type === "subst") {
    message = (
      <React.Fragment>
        {" "}
        Sai <strong>{player}</strong> e entra <strong>{assist}</strong>{" "}
      </React.Fragment>
    );
  }

  if (type === "var") {
    const messagesVar = {
      "goal disallowed": `Gol anulado para ${team}`,
      "goal confirmado": `Gol confirmado para ${team}`,
      "card upgrade": `Cartão vermelho para ${player}`,
      "card cancelled": `Cartão vermelho de ${player} anulado`,
      "penalty confirmed": `Pênalti marcado para ${team}`,
      "penalty cancelled": `Pênalti anulado para ${team}`,
    };

    const messageVar = Object.keys(messagesVar).reduce(
      (acc, message) =>
        detail.toLowerCase().includes(message)
          ? messagesVar[message as keyof typeof messagesVar]
          : acc,
      ""
    );

    message = (
      <React.Fragment>
        Após árbitro de vídeo chamar, juiz vai ao VAR.{" "}
        <strong>{messageVar}</strong>
      </React.Fragment>
    );
  }

  return message;
}

function generateTimeEvent(time: number, extra: number | null) {
  let localeTime = String(time);
  let stage = "1T";

  if (extra) {
    localeTime = time + "+" + extra;
    stage = "AC";
  }

  if (time > 45 && !extra) {
    localeTime = String(Number(time) - 45);
    stage = "2T";
  }

  return { time: String(localeTime).padStart(2, "0"), stage };
}

function generateIconEvent(
  type: "goal" | "card" | "subst" | "var",
  detail: string
) {
  const typeCard =
    type === "card" && detail.toLowerCase().includes("yellow")
      ? "cardY"
      : "cardR";
  const newTypes = type !== "card" ? type : typeCard;

  const typeTitleRelation = {
    goal: Ball,
    cardY: CardY,
    cardR: CardR,
    subst: Change,
    var: VAR,
  };

  return typeTitleRelation[newTypes] ?? null;
}

export default function EventList({ events, idTeamHome }: EventListProps) {
  return (
    <React.Fragment>
      {events.map((event, index: number) => {
        const time = generateTimeEvent(event.time.elapsed, event.time.extra);

        const isHomeTeam = event.team.id === idTeamHome;
        const rowOrderClass = isHomeTeam ? "flex-row" : "flex-row-reverse";
        const textAlignClass = isHomeTeam ? "text-left" : "text-right";

        const eventType = event.type.toLowerCase() as
          | "goal"
          | "card"
          | "subst"
          | "var";

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
                  alt="ball icon"
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
