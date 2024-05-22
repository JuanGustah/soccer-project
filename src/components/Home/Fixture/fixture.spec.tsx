import { render } from "@testing-library/react";
import Fixture from "./Fixture";
import { BrowserRouter } from "react-router-dom";
import { dateHelper } from "@/helpers/date.helper";

const FixtureComponent = (timestamp: number, showDate: boolean) => {
  return render(
    <BrowserRouter>
      <Fixture
        id={1}
        epochTimestamp={timestamp}
        home={{
          id: 2331,
          name: "Cobresal",
          logo: "https://media.api-sports.io/football/teams/2331.png",
          winner: false,
        }}
        away={{
          id: 126,
          name: "Sao Paulo",
          logo: "https://media.api-sports.io/football/teams/126.png",
          winner: true,
        }}
        showDate={showDate}
      />
    </BrowserRouter>
  );
};

describe("Fixture", () => {
  test("should render correctly", () => {
    const render = FixtureComponent(1715214600, false);

    expect(render.getByText("Sao Paulo")).toBeInTheDocument();
    expect(render.getByText("Cobresal")).toBeInTheDocument();
    expect(render.getByText("21:30")).toBeInTheDocument();
  });

  test("should show date if the flag was passed by", () => {
    const render = FixtureComponent(1715214600, true);

    expect(render.getByTestId("date")).toBeInTheDocument();
  });

  test("should show today when date is today", () => {
    const timestamp = Math.floor(Date.now() / 1000);
    const render = FixtureComponent(timestamp, true);

    expect(render.getByTestId("date")).toHaveTextContent("Hoje");
  });

  test("should show today when date is tomorrow", () => {
    const today = new Date();
    const tomorrow = today.setDate(today.getDate() + 1);
    const timestamp = Math.floor(tomorrow / 1000);

    const render = FixtureComponent(timestamp, true);

    expect(render.getByTestId("date")).toHaveTextContent("Amanhã");
  });

  test("should show today when date is nextWeek", () => {
    const today = new Date();
    const tomorrow = today.setDate(today.getDate() + 4);
    const timestamp = Math.floor(tomorrow / 1000);

    const render = FixtureComponent(timestamp, true);

    const dateFormated = dateHelper().add(4, "days").format("dddd");
    expect(render.getByTestId("date")).toHaveTextContent(dateFormated);
  });

  test("should show today when date is outOfNextWeek", () => {
    const today = new Date();
    const tomorrow = today.setDate(today.getDate() + 7);
    const timestamp = Math.floor(tomorrow / 1000);

    const render = FixtureComponent(timestamp, true);

    const dateFormated = dateHelper().add(7, "days").format("DD/MM");
    expect(render.getByTestId("date")).toHaveTextContent(dateFormated);
  });

  test("should redirect to detail page", () => {
    const render = FixtureComponent(1715214600, false);

    const link = render.getByRole("link");

    expect(link).toHaveAttribute("href", "/details/1");
  });
});
