import { render } from "@testing-library/react";
import FormationLine from "./FormationLine";
import { playerPositionInGrid } from "@/types/fixture";

let players: playerPositionInGrid[];
describe("EventList", () => {
  beforeAll(() => {
    players = [
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
    ];
  });

  test("should render correctly", () => {
    const component = render(
      <FormationLine
        playersInRow={players}
        indexFormationRows={1}
        rowsQtd={2}
      />
    );

    expect(component.getByTestId("formationLine")).not.toBeEmptyDOMElement();
    expect(component.getByText("D. Bobadilla")).toBeInTheDocument();
    expect(component.getByText("Luiz Gustavo")).toBeInTheDocument();
    expect(component.getByText("G. Galoppo")).toBeInTheDocument();
  });

  test("should render the quantity of lines correctly", () => {
    const component = render(
      <FormationLine
        playersInRow={players}
        indexFormationRows={1}
        rowsQtd={2}
      />
    );

    expect(component.getByTestId("formationLine").childElementCount).toBe(2);
  });
});
