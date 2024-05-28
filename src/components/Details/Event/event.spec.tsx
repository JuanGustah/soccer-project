import { render } from "@testing-library/react";
import Event from "./Event";
import { fixtureEvent } from "@/types/fixture";

let event: fixtureEvent;

describe("EventTime", () => {
  beforeAll(() => {
    event = {
      time: {
        elapsed: 75,
        /* @ts-expect-error: testing null extra time by purpose*/
        extra: null,
      },
      team: {
        id: 126,
        name: "Sao Paulo",
        logo: "https://media.api-sports.io/football/teams/126.png",
      },
      player: {
        id: 47368,
        name: "J. Calleri",
      },
      assist: {
        id: 106510,
        name: "Ferreira",
      },
      type: "subst",
      detail: "Substitution 5",
    };
  });

  test("should render correctly", () => {
    const component = render(
      <Event isEventFromHomeTeam={true} event={event} />
    );

    expect(component.getByRole("img")).toBeInTheDocument();
    expect(component.getByRole("heading", { level: 5 })).toBeInTheDocument();
    expect(component.getByRole("paragraph")).toBeInTheDocument();
    expect(component.getByText("30'")).toBeInTheDocument();
  });

  test("should invert orientation when is not a event from home team", () => {
    const component = render(
      <Event isEventFromHomeTeam={false} event={event} />
    );

    expect(component.getByTestId("eventRow")).toHaveClass("flex-row-reverse");
    expect(component.getByTestId("eventInfoRow")).toHaveClass(
      "text-right",
      "flex-row-reverse"
    );
  });
});
