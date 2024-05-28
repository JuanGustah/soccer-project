import { render } from "@testing-library/react";
import EventTime from "./EventTime";

describe("EventTime", () => {
  test("should render correctly", () => {
    const time = {
      elapsed: 35,
      extra: null,
    };

    /* @ts-expect-error: testing null extra time by purpose*/
    const component = render(<EventTime time={time} />);

    expect(component.getByText("35'")).toBeInTheDocument();
  });

  /* 
    should render correctly the localizated event time
  */
  test("should render first half without extra corretcly", () => {
    const time = {
      elapsed: 25,
      extra: null,
    };

    /* @ts-expect-error: testing null extra time by purpose*/
    const component = render(<EventTime time={time} />);

    expect(component.getByText("25'")).toBeInTheDocument();
    expect(component.getByText("1T")).toBeInTheDocument();
  });

  test("should render first half with extra corretcly", () => {
    const time = {
      elapsed: 45,
      extra: 5,
    };

    const component = render(<EventTime time={time} />);

    expect(component.getByText("45+5'")).toBeInTheDocument();
    expect(component.getByText("AC")).toBeInTheDocument();
  });

  test("should render second half without extra corretcly", () => {
    const time = {
      elapsed: 56,
      extra: null,
    };

    /* @ts-expect-error: testing null extra time by purpose*/
    const component = render(<EventTime time={time} />);

    expect(component.getByText("11'")).toBeInTheDocument();
    expect(component.getByText("2T")).toBeInTheDocument();
  });

  test("should render second half with extra corretcly", () => {
    const time = {
      elapsed: 90,
      extra: 5,
    };

    const component = render(<EventTime time={time} />);

    expect(component.getByText("45+5'")).toBeInTheDocument();
    expect(component.getByText("AC")).toBeInTheDocument();
  });
});
