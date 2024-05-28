import { render } from "@testing-library/react";
import EventIcon from "./EventIcon";

describe("EventIcon", () => {
  test("should render correctly", () => {
    const component = render(
      <EventIcon eventDetail="Yellow Card" eventType="card" />
    );

    expect(component.getByRole("img")).toBeInTheDocument();
  });

  /* 
    should render correctly the event status
  */
  test("should render the icon corresponding to the goal status correctly", () => {
    const component = render(
      <EventIcon eventDetail="Normal Goal" eventType="goal" />
    );

    expect(component.getByRole("img")).toHaveAttribute(
      "src",
      "/src/assets/icons/ball.svg"
    );
  });

  test("should render the icon corresponding to the substitution status correctly", () => {
    const component = render(
      <EventIcon eventDetail="Substitution 1" eventType="subst" />
    );

    expect(component.getByRole("img")).toHaveAttribute(
      "src",
      "/src/assets/icons/change.svg"
    );
  });

  test("should render the icon corresponding to the yellow card status correctly", () => {
    const component = render(
      <EventIcon eventDetail="Yellow Card" eventType="card" />
    );

    expect(component.getByRole("img")).toHaveAttribute(
      "src",
      "/src/assets/icons/yellow_card.svg"
    );
  });

  test("should render the icon corresponding to the red card status correctly", () => {
    const component = render(
      <EventIcon eventDetail="Red Card" eventType="card" />
    );

    expect(component.getByRole("img")).toHaveAttribute(
      "src",
      "/src/assets/icons/red_card.svg"
    );
  });

  test("should render the icon corresponding to the var status correctly", () => {
    const component = render(
      <EventIcon eventDetail="Goal cancelled" eventType="var" />
    );

    expect(component.getByRole("img")).toHaveAttribute(
      "src",
      "/src/assets/icons/var.svg"
    );
  });
});
