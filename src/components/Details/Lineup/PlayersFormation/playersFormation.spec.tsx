import { render } from "@testing-library/react";
import PlayersFormation from "./PlayersFormation";
import { playerPositionInGrid } from "@/types/fixture";

let playersFormation: playerPositionInGrid[];
describe("PlayersFormation", () => {
  beforeEach(() => {
    playersFormation = [
      {
        player: {
          id: 30763,
          name: "Jandrei",
          number: 93,
          pos: "G",
          grid: "1:1",
        },
      },
      {
        player: {
          id: 9949,
          name: "Igor Vinicius",
          number: 2,
          pos: "D",
          grid: "2:4",
        },
      },
      {
        player: {
          id: 2571,
          name: "R. Arboleda",
          number: 5,
          pos: "D",
          grid: "2:3",
        },
      },
      {
        player: {
          id: 6083,
          name: "A. Franco",
          number: 28,
          pos: "D",
          grid: "2:2",
        },
      },
      {
        player: {
          id: 180919,
          name: "Welington",
          number: 6,
          pos: "D",
          grid: "2:1",
        },
      },
      {
        player: {
          id: 10133,
          name: "Nikão",
          number: 43,
          pos: "M",
          grid: "3:4",
        },
      },
      {
        player: {
          id: 195107,
          name: "D. Bobadilla",
          number: 21,
          pos: "M",
          grid: "3:3",
        },
      },
      {
        player: {
          id: 1909,
          name: "Luiz Gustavo",
          number: 16,
          pos: "M",
          grid: "3:2",
        },
      },
      {
        player: {
          id: 6379,
          name: "G. Galoppo",
          number: 14,
          pos: "M",
          grid: "3:1",
        },
      },
      {
        player: {
          id: 10323,
          name: "Luciano",
          number: 10,
          pos: "F",
          grid: "4:2",
        },
      },
      {
        player: {
          id: 47368,
          name: "J. Calleri",
          number: 9,
          pos: "F",
          grid: "4:1",
        },
      },
    ];
  });

  test("should render correctly", () => {
    const formationLines = ["4", "4", "2"];

    const component = render(
      <PlayersFormation
        playersPosition={playersFormation}
        formationLines={formationLines}
      />
    );

    expect(component.getByTestId("playersFormation")).not.toBeEmptyDOMElement();
    expect(component.getByText("Jandrei")).toBeInTheDocument();
    expect(component.getByText("Igor Vinicius")).toBeInTheDocument();
    expect(component.getByText("R. Arboleda")).toBeInTheDocument();
    expect(component.getByText("A. Franco")).toBeInTheDocument();
    expect(component.getByText("Welington")).toBeInTheDocument();
    expect(component.getByText("Nikão")).toBeInTheDocument();
    expect(component.getByText("D. Bobadilla")).toBeInTheDocument();
    expect(component.getByText("Luiz Gustavo")).toBeInTheDocument();
    expect(component.getByText("G. Galoppo")).toBeInTheDocument();
    expect(component.getByText("Luciano")).toBeInTheDocument();
    expect(component.getByText("J. Calleri")).toBeInTheDocument();
  });

  test("should render the quantity of formation lines correctly", () => {
    const formationLines = ["4", "4", "2"];

    const component = render(
      <PlayersFormation
        playersPosition={playersFormation}
        formationLines={formationLines}
      />
    );

    expect(component.getByTestId("playersFormation").childElementCount).toBe(4);
  });

  test("should render the quantity of players by formation lines correctly", () => {
    const formationLines = ["4", "4", "2"];
    const indexGoalkeeperFormationLine = 0;
    const component = render(
      <PlayersFormation
        playersPosition={playersFormation}
        formationLines={formationLines}
      />
    );

    const playerFormationLines =
      component.getByTestId("playersFormation").children;
    Array.from(playerFormationLines).forEach((playerFormationLine, index) => {
      if (index === indexGoalkeeperFormationLine) return;

      const formationLineIndexWithoutGoalkeepLine = index - 1;
      const numberOfPlayersExpected = Number(
        formationLines[formationLineIndexWithoutGoalkeepLine]
      );
      const numberOfPlayers = playerFormationLine.querySelectorAll(
        '[data-testid="player"]'
      ).length;
      expect(numberOfPlayers).toBe(numberOfPlayersExpected);
    });
  });
});
