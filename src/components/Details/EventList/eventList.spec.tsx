import { render } from "@testing-library/react";
import EventList from "./EventList";

describe("EventList", () => {
  test("should render correctly", () => {
    const events = [
      {
        time: {
          elapsed: 10,
          extra: 0,
        },
        team: {
          id: 1214,
          name: "Portuguesa",
          logo: "https://media.api-sports.io/football/teams/1214.png",
        },
        player: {
          id: 197364,
          name: "Eduardo",
        },
        assist: {
          id: NaN,
          name: "",
        },
        type: "Card",
        detail: "Yellow Card",
        comments: "Foul",
      },
    ];
    const component = render(<EventList events={events} idTeamHome={1214} />);

    expect(component.container).not.toBeEmptyDOMElement();
    expect(component.getByText("cartão amarelo")).toBeInTheDocument();
    expect(component.getByText("10'")).toBeInTheDocument();
  });

  test("should not render if no id from team home was given", () => {
    const events = [
      {
        time: {
          elapsed: 10,
          extra: 0,
        },
        team: {
          id: 1214,
          name: "Portuguesa",
          logo: "https://media.api-sports.io/football/teams/1214.png",
        },
        player: {
          id: 197364,
          name: "Eduardo",
        },
        assist: {
          id: NaN,
          name: "",
        },
        type: "Card",
        detail: "Yellow Card",
        comments: "Foul",
      },
    ];

    /* @ts-expect-error: testing empty idTeamHome by purpose*/
    const component = render(<EventList events={events} />);

    expect(component.container).toBeEmptyDOMElement();
  });

  test("should not render if no event was given", () => {
    const component = render(<EventList events={[]} idTeamHome={1214} />);

    expect(component.container).toBeEmptyDOMElement();
  });
});
