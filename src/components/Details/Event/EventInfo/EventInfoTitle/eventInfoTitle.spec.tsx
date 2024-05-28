import { render } from "@testing-library/react";
import EventInfoTitle from "./EventInfoTitle";

describe("EventInfoTitle", () => {
  test("should render correctly", () => {
    const component = render(<EventInfoTitle eventType="goal" />);

    expect(component.getByRole("heading", { level: 5 })).toBeInTheDocument();
  });

  test("should render title correspondent to goal status", () => {
    const component = render(<EventInfoTitle eventType="goal" />);

    expect(component.getByText("Goooooool!")).toBeInTheDocument();
  });

  test("should render info correspondent to card status", () => {
    const component = render(<EventInfoTitle eventType="card" />);

    expect(component.getByText("Pintou cartão!")).toBeInTheDocument();
  });

  test("should render info correspondent to substitution status", () => {
    const component = render(<EventInfoTitle eventType="subst" />);

    expect(component.getByText("Substituição!")).toBeInTheDocument();
  });

  test("should render info correspondent to var status correctly", () => {
    const component = render(<EventInfoTitle eventType="var" />);

    expect(component.getByText("Chama o Var!")).toBeInTheDocument();
  });
});
