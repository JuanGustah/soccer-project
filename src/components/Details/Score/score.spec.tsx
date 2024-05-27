import { render } from "@testing-library/react";
import Score from "./Score";

const getFixture = (withGoals: boolean = true, status: string) => ({
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
      short: status ?? "FT",
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
    home: withGoals ? 0 : null,
    away: withGoals ? 0 : null,
  },
  score: {
    halftime: {
      home: withGoals ? 0 : null,
      away: withGoals ? 0 : null,
    },
    fulltime: {
      home: withGoals ? 0 : null,
      away: withGoals ? 0 : null,
    },
    extratime: {
      home: withGoals ? 0 : null,
      away: withGoals ? 0 : null,
    },
    penalty: {
      home: withGoals ? 2 : null,
      away: withGoals ? 4 : null,
    },
  },
});

describe("FixtureList", () => {
  test("should render correctly", () => {
    /* @ts-expect-error: maybe test null goals by purpose*/
    const component = render(<Score fixture={getFixture()} />);

    expect(component.getByText("Palmeiras")).toBeInTheDocument();
    expect(component.getByTestId("homeGoals")).toHaveTextContent("0");
    expect(component.getByText("Sao Paulo")).toBeInTheDocument();
    expect(component.getByTestId("awayGoals")).toHaveTextContent("0");
    expect(component.getByText("Finalizado")).toBeInTheDocument();
  });

  test("should not render goals if they are not given", () => {
    /* @ts-expect-error: maybe test null goals by purpose*/
    const component = render(<Score fixture={getFixture(false)} />);

    expect(component.getByTestId("homeGoals")).toHaveTextContent("");
    expect(component.getByTestId("awayGoals")).toHaveTextContent("");
  });

  /* 
    should render correctly the match status
  */
  test("should render correctly the match status to be defined", () => {
    /* @ts-expect-error: maybe test null goals by purpose*/
    const component = render(<Score fixture={getFixture(true, "TBD")} />);

    expect(component.getByText("Sem data definida")).toBeInTheDocument();
  });

  test("should render correctly the match status not started", () => {
    /* @ts-expect-error: maybe test null goals by purpose*/
    const component = render(<Score fixture={getFixture(true, "NS")} />);

    expect(component.getByText("Não iniciado")).toBeInTheDocument();
  });

  test("should render correctly the match status first half", () => {
    /* @ts-expect-error: maybe test null goals by purpose*/
    const component = render(<Score fixture={getFixture(true, "1H")} />);

    expect(component.getByText("1º Tempo")).toBeInTheDocument();
  });

  test("should render correctly the match status halftime", () => {
    /* @ts-expect-error: maybe test null goals by purpose*/
    const component = render(<Score fixture={getFixture(true, "HT")} />);

    expect(component.getByText("Intervalo")).toBeInTheDocument();
  });

  test("should render correctly the match status second half", () => {
    /* @ts-expect-error: maybe test null goals by purpose*/
    const component = render(<Score fixture={getFixture(true, "2H")} />);

    expect(component.getByText("2º Tempo")).toBeInTheDocument();
  });

  test("should render correctly the match status extra time", () => {
    /* @ts-expect-error: maybe test null goals by purpose*/
    const component = render(<Score fixture={getFixture(true, "BT")} />);

    expect(component.getByText("Prorrogação")).toBeInTheDocument();
  });

  test("should render correctly the match status penalty", () => {
    /* @ts-expect-error: maybe test null goals by purpose*/
    const component = render(<Score fixture={getFixture(true, "P")} />);

    expect(component.getByText("Pênaltis")).toBeInTheDocument();
  });

  test("should render correctly the match status suspended", () => {
    /* @ts-expect-error: maybe test null goals by purpose*/
    const component = render(<Score fixture={getFixture(true, "SUSP")} />);

    expect(component.getByText("Suspenso")).toBeInTheDocument();
  });

  test("should render correctly the match status interrupted", () => {
    /* @ts-expect-error: maybe test null goals by purpose*/
    const component = render(<Score fixture={getFixture(true, "INT")} />);

    expect(component.getByText("Interrompido")).toBeInTheDocument();
  });

  test("should render correctly the match status regular finish", () => {
    /* @ts-expect-error: maybe test null goals by purpose*/
    const component = render(<Score fixture={getFixture(true, "FT")} />);

    expect(component.getByText("Finalizado")).toBeInTheDocument();
  });

  test("should render correctly the match status finish after extra time", () => {
    /* @ts-expect-error: maybe test null goals by purpose*/
    const component = render(<Score fixture={getFixture(true, "AET")} />);

    expect(component.getByText("Finalizado")).toBeInTheDocument();
  });

  test("should render correctly the match status finish after penalty", () => {
    /* @ts-expect-error: maybe test null goals by purpose*/
    const component = render(<Score fixture={getFixture(true, "PEN")} />);

    expect(component.getByText("Finalizado")).toBeInTheDocument();
  });

  test("should render correctly the match status postponed", () => {
    /* @ts-expect-error: maybe test null goals by purpose*/
    const component = render(<Score fixture={getFixture(true, "PST")} />);

    expect(component.getByText("Adiado")).toBeInTheDocument();
  });

  test("should render correctly the match status canceled", () => {
    /* @ts-expect-error: maybe test null goals by purpose*/
    const component = render(<Score fixture={getFixture(true, "CANC")} />);

    expect(component.getByText("Cancelado")).toBeInTheDocument();
  });

  test("should render correctly the match status abandoned", () => {
    /* @ts-expect-error: maybe test null goals by purpose*/
    const component = render(<Score fixture={getFixture(true, "ABD")} />);

    expect(component.getByText("Jogo Suspenso")).toBeInTheDocument();
  });

  test("should render correctly the match status techinal loss", () => {
    /* @ts-expect-error: maybe test null goals by purpose*/
    const component = render(<Score fixture={getFixture(true, "AWD")} />);

    expect(component.getByText("Finalizado")).toBeInTheDocument();
  });

  test("should render correctly the match status WO", () => {
    /* @ts-expect-error: maybe test null goal's by purpose*/
    const component = render(<Score fixture={getFixture(true, "WO")} />);

    expect(component.getByText("Finalizado")).toBeInTheDocument();
  });

  test("should render correctly the match status in progress", () => {
    /* @ts-expect-error: maybe test null goals by purpose*/
    const component = render(<Score fixture={getFixture(true, "LIVE")} />);

    expect(component.getByText("Ao vivo")).toBeInTheDocument();
  });
});
