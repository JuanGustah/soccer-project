import { eventStatus } from "../../types";

export function generateTitleEvent(type: eventStatus) {
  const typeTitleRelation = {
    goal: "Goooooool!",
    card: "Pintou cartão!",
    subst: "Substituição!",
    var: "Chama o Var!",
  };

  return typeTitleRelation[type] ?? null;
}
