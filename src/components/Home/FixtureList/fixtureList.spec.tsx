import { render } from "@testing-library/react";
import FixtureList from "./FixtureList";
import { BrowserRouter } from "react-router-dom";

const getFixtures = () => [
  {
    fixture: {
      id: 1146262,
      referee: "Braulio da Silva Machado",
      timezone: "UTC",
      date: "2024-02-04T19:00:00+00:00",
      timestamp: 1707073200,
      periods: {
        first: 1707073200,
        second: 1707076800,
      },
      venue: {
        id: 234,
        name: "Estádio Governador Magalhães Pinto",
        city: "Belo Horizonte, Minas Gerais",
      },
      status: {
        long: "Match Finished",
        short: "PEN",
        elapsed: 120,
      },
    },
    league: {
      id: 632,
      name: "Supercopa do Brasil",
      country: "Brazil",
      logo: "https://media.api-sports.io/football/leagues/632.png",
      flag: "https://media.api-sports.io/flags/br.svg",
      season: 2024,
      round: "Final",
    },
    teams: {
      home: {
        id: 121,
        name: "Palmeiras",
        logo: "https://media.api-sports.io/football/teams/121.png",
        winner: false,
      },
      away: {
        id: 126,
        name: "Sao Paulo",
        logo: "https://media.api-sports.io/football/teams/126.png",
        winner: true,
      },
    },
    goals: {
      home: 0,
      away: 0,
    },
    score: {
      halftime: {
        home: 0,
        away: 0,
      },
      fulltime: {
        home: 0,
        away: 0,
      },
      extratime: {
        home: 0,
        away: 0,
      },
      penalty: {
        home: 2,
        away: 4,
      },
    },
  },
];

describe("FixtureList", () => {
  test("should render correctly", () => {
    const component = render(
      <BrowserRouter>
        <FixtureList fixtures={getFixtures()} showDate={false} />
      </BrowserRouter>
    );

    expect(component.getByRole("heading", { level: 4 })).toHaveTextContent(
      "Supercopa do Brasil"
    );
    expect(component.getByTestId("fixture-list")).not.toBeEmptyDOMElement();
    expect(component.getByText("Palmeiras")).toBeInTheDocument();
    expect(component.getByText("Sao Paulo")).toBeInTheDocument();
    expect(component.getByText("16:00")).toBeInTheDocument();
  });

  test("should show date if flag was passed by", () => {
    const component = render(
      <BrowserRouter>
        <FixtureList fixtures={getFixtures()} showDate={true} />
      </BrowserRouter>
    );

    expect(component.getByText("04/02")).toBeInTheDocument();
  });

  test("should not render nothing if no fixtures was passed by", () => {
    const component = render(
      <BrowserRouter>
        <FixtureList fixtures={[]} showDate={false} />
      </BrowserRouter>
    );

    expect(component.container).toBeEmptyDOMElement();
  });
});
