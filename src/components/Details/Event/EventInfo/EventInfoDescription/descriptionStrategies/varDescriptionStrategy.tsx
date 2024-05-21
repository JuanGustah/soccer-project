import React from "react";
import { descriptionStrategy } from "./descriptionStrategy.interface";

export class varDescriptionStrategy implements descriptionStrategy {
  constructor(
    private player: string,
    private detail: string,
    private team: string
  ) {}

  private get translatedMessages() {
    return {
      "goal disallowed": `Gol anulado para ${this.team}`,
      "goal confirmed": `Gol confirmado para ${this.team}`,
      "card upgrade": `Cartão vermelho para ${this.player}`,
      "card cancelled": `Cartão vermelho de ${this.player} anulado`,
      "penalty confirmed": `Pênalti marcado para ${this.team}`,
      "penalty cancelled": `Pênalti anulado para ${this.team}`,
    };
  }

  private get messageVar() {
    const translatedMessagesVar = this.translatedMessages;

    return Object.keys(translatedMessagesVar).reduce(
      (acc, message) =>
        this.detail.toLowerCase().includes(message)
          ? translatedMessagesVar[message as keyof typeof translatedMessagesVar]
          : acc,
      ""
    );
  }

  generateDescription() {
    const messageVar = this.messageVar;

    return (
      <React.Fragment>
        Após árbitro de vídeo chamar, juiz vai ao VAR.{" "}
        <strong>{messageVar}</strong>
      </React.Fragment>
    );
  }
}
