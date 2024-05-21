import { eventStatus } from "../types";

import BallIcon from "@/assets/icons/ball.svg";
import ChangeIcon from "@/assets/icons/change.svg";
import YellowCardIcon from "@/assets/icons/yellow_card.svg";
import RedCardIcon from "@/assets/icons/red_card.svg";
import VARIcon from "@/assets/icons/var.svg";

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
