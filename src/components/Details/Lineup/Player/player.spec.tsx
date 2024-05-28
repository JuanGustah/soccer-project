import { render } from "@testing-library/react";
import Player from "./Player";

describe("FixtureList", () => {
  test("should render correctly", () => {
    const component = render(<Player name="Luciano" number={10} />);

    expect(component.getByRole("img")).toBeInTheDocument();
    expect(component.getByText("10")).toBeInTheDocument();
    expect(component.getByText("Luciano")).toBeInTheDocument();
  });
});
