import { descriptionStrategy } from "./description/descriptionStrategy.interface";
import { goalDescriptionStrategy } from "./description/goalDescriptionStrategy";
import { cardDescriptionStrategy } from "./description/cardDescriptionStrategy";
import { susbstitutionDescriptionStrategy } from "./description/susbstitutionDescriptionStrategy";
import { varDescriptionStrategy } from "./description/varDescriptionStrategy";

import { eventStatus } from "./types";

import BallIcon from "@/assets/icons/ball.svg";
import ChangeIcon from "@/assets/icons/change.svg";
import YellowCardIcon from "@/assets/icons/yellow_card.svg";
import RedCardIcon from "@/assets/icons/red_card.svg";
import VARIcon from "@/assets/icons/var.svg";

export function generateTitleEvent(type: eventStatus) {
  const typeTitleRelation = {
    goal: "Goooooool!",
    card: "Pintou cartão!",
    subst: "Substituição!",
    var: "Chama o Var!",
  };

  return typeTitleRelation[type] ?? null;
}

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

export function generateTimeEvent(time: number, extra: number | null) {
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

export function generateIconEvent(type: eventStatus, detail: string) {
  const typeCard =
    type === "card" && detail.toLowerCase().includes("yellow")
      ? "cardY"
      : "cardR";
  const newType = type !== "card" ? type : typeCard;

  const typeIconRelation = {
    goal: BallIcon,
    cardY: YellowCardIcon,
    cardR: RedCardIcon,
    subst: ChangeIcon,
    var: VARIcon,
  };

  return typeIconRelation[newType] ?? null;
}
