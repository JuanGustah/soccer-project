import { render } from "@testing-library/react";
import StatisticList from "./StatisticList";
import { fixtureDetails } from "@/types/fixture";

let statistics: fixtureDetails["statistics"];

describe("StatisticList", () => {
  beforeEach(() => {
    statistics = [
      {
        team: {
          id: 126,
          name: "Sao Paulo",
          logo: "https://media.api-sports.io/football/teams/126.png",
        },
        statistics: [
          {
            type: "Shots on Goal",
            value: 1,
          },
          {
            type: "Shots off Goal",
            value: 5,
          },
          {
            type: "Total Shots",
            value: 12,
          },
          {
            type: "Blocked Shots",
            value: 6,
          },
          {
            type: "Shots insidebox",
            value: 6,
          },
          {
            type: "Shots outsidebox",
            value: 6,
          },
          {
            type: "Fouls",
            value: 24,
          },
          {
            type: "Corner Kicks",
            value: 7,
          },
          {
            type: "Offsides",
            value: 2,
          },
          {
            type: "Ball Possession",
            value: "61%",
          },
          {
            type: "Yellow Cards",
            value: 4,
          },
          {
            type: "Red Cards",
            value: 0,
          },
          {
            type: "Goalkeeper Saves",
            value: 1,
          },
          {
            type: "Total passes",
            value: 441,
          },
          {
            type: "Passes accurate",
            value: 383,
          },
          {
            type: "Passes %",
            value: "87%",
          },
          {
            type: "expected_goals",
            value: 1.9,
          },
        ],
      },
      {
        team: {
          id: 1214,
          name: "Portuguesa",
          logo: "https://media.api-sports.io/football/teams/1214.png",
        },
        statistics: [
          {
            type: "Shots on Goal",
            value: 1,
          },
          {
            type: "Shots off Goal",
            value: 2,
          },
          {
            type: "Total Shots",
            value: 8,
          },
          {
            type: "Blocked Shots",
            value: 5,
          },
          {
            type: "Shots insidebox",
            value: 2,
          },
          {
            type: "Shots outsidebox",
            value: 6,
          },
          {
            type: "Fouls",
            value: 15,
          },
          {
            type: "Corner Kicks",
            value: 5,
          },
          {
            type: "Offsides",
            value: 2,
          },
          {
            type: "Ball Possession",
            value: "39%",
          },
          {
            type: "Yellow Cards",
            value: 3,
          },
          {
            type: "Red Cards",
            value: 0,
          },
          {
            type: "Goalkeeper Saves",
            value: 0,
          },
          {
            type: "Total passes",
            value: 275,
          },
          {
            type: "Passes accurate",
            value: 221,
          },
          {
            type: "Passes %",
            value: "80%",
          },
          {
            type: "expected_goals",
            value: 0.7,
          },
        ],
      },
    ];
  });

  test("should render correctly", () => {
    const component = render(<StatisticList statistics={statistics} />);

    expect(component.getByText("Chutes ao Gol")).toBeInTheDocument();
    expect(component.getByText(4)).toBeInTheDocument();
    expect(component.getByText(7)).toBeInTheDocument();
  });

  test("should render all statistics translated", () => {
    const component = render(<StatisticList statistics={statistics} />);

    expect(component.getByText("Chutes ao Gol")).toBeInTheDocument();
    expect(component.getByText("Chutes pra fora")).toBeInTheDocument();
    expect(component.getByText("Finalizações")).toBeInTheDocument();
    expect(component.getByText("Chutes bloqueados")).toBeInTheDocument();
    expect(component.getByText("Chutes dentro da área")).toBeInTheDocument();
    expect(component.getByText("Chutes fora da área")).toBeInTheDocument();
    expect(component.getByText("Faltas")).toBeInTheDocument();
    expect(component.getByText("Escanteios")).toBeInTheDocument();
    expect(component.getByText("Impedimentos")).toBeInTheDocument();
    expect(component.getByText("Posse de bola")).toBeInTheDocument();
    expect(component.getByText("Cartões amarelos")).toBeInTheDocument();
    expect(component.getByText("Cartões vermelhos")).toBeInTheDocument();
    expect(component.getByText("Defesas")).toBeInTheDocument();
    expect(component.getByText("Total de passes")).toBeInTheDocument();
    expect(component.getByText("Precisão de passes")).toBeInTheDocument();
    expect(component.getByText("Porcentagem de passes")).toBeInTheDocument();
    expect(component.getByText("Média de gols")).toBeInTheDocument();
  });

  test("should not render nothing if no statistics from both teams was given", () => {
    statistics = [
      {
        team: {
          id: 126,
          name: "Sao Paulo",
          logo: "https://media.api-sports.io/football/teams/126.png",
        },
        statistics: [],
      },
      {
        team: {
          id: 1214,
          name: "Portuguesa",
          logo: "https://media.api-sports.io/football/teams/1214.png",
        },
        statistics: [],
      },
    ];

    const component = render(<StatisticList statistics={statistics} />);

    expect(component.container).toBeEmptyDOMElement();
  });
});
