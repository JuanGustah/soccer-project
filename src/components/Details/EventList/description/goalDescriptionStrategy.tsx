import React from "react";
import { descriptionStrategy } from "./descriptionStrategy.interface";

export class goalDescriptionStrategy implements descriptionStrategy {
  constructor(private player: string, private team: string) {}

  generateDescription() {
    return (
      <React.Fragment>
        <strong>{this.player}</strong> amplia o placar para{" "}
        <strong>{this.team}</strong>
      </React.Fragment>
    );
  }
}
