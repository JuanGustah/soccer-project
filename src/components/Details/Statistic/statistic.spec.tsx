import { render } from "@testing-library/react";
import Statistic from "./Statistic";

describe("Statistic", () => {
  test("should render correctly", () => {
    const component = render(
      <Statistic
        statName="Posse de Bola"
        homeStatValue={"60%"}
        awayStatValue={"40%"}
      />
    );

    expect(component.getByText("Posse de Bola")).toBeInTheDocument();
    expect(component.getByText("60%")).toBeInTheDocument();
    expect(component.getByText("40%")).toBeInTheDocument();
  });

  test("should calc statistic bar width correctly", () => {
    const component = render(
      <Statistic
        statName="Posse de Bola"
        homeStatValue={"60%"}
        awayStatValue={"40%"}
      />
    );

    expect(component.getByTestId("homeStatisticBar")).toHaveStyle(
      "width: 17.25rem"
    );
    expect(component.getByTestId("awayStatisticBar")).toHaveStyle(
      "width: 11.5rem"
    );
  });
});
