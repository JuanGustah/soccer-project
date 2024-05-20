import React from "react";
import { descriptionStrategy } from "./descriptionStrategy.interface";

export class cardDescriptionStrategy implements descriptionStrategy {
  constructor(private player: string, private detail: string) {}

  private get cardType() {
    return this.detail.toLowerCase().includes("yellow")
      ? "amarelo"
      : "vermelho";
  }

  generateDescription() {
    const cardType = this.cardType;

    return (
      <React.Fragment>
        <strong>{this.player}</strong> recebe <strong>cartão {cardType}</strong>
      </React.Fragment>
    );
  }
}
