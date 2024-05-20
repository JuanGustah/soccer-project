import React from "react";
import { descriptionStrategy } from "./descriptionStrategy.interface";

export class susbstitutionDescriptionStrategy implements descriptionStrategy {
  constructor(private player: string, private assist: string) {}

  generateDescription() {
    return (
      <React.Fragment>
        Sai <strong>{this.player}</strong> e entra{" "}
        <strong>{this.assist}</strong>
      </React.Fragment>
    );
  }
}
