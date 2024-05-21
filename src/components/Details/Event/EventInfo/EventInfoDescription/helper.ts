import { cardDescriptionStrategy } from "./descriptionStrategies/cardDescriptionStrategy";
import { descriptionStrategy } from "./descriptionStrategies/descriptionStrategy.interface";
import { goalDescriptionStrategy } from "./descriptionStrategies/goalDescriptionStrategy";
import { susbstitutionDescriptionStrategy } from "./descriptionStrategies/susbstitutionDescriptionStrategy";
import { varDescriptionStrategy } from "./descriptionStrategies/varDescriptionStrategy";

import { eventStatus } from "../../types";

export function generateDescriptionElementEvent(
  type: eventStatus,
  detail: string,
  player: string,
  assist: string | null,
  team: string
) {
  let descriptionGenerator: descriptionStrategy;

  switch (type) {
    case "goal": {
      descriptionGenerator = new goalDescriptionStrategy(player, team);
      break;
    }
    case "card": {
      descriptionGenerator = new cardDescriptionStrategy(player, detail);
      break;
    }
    case "subst": {
      descriptionGenerator = new susbstitutionDescriptionStrategy(
        player,
        assist!
      );
      break;
    }
    case "var": {
      descriptionGenerator = new varDescriptionStrategy(player, detail, team);
      break;
    }
  }

  return descriptionGenerator.generateDescription();
}
