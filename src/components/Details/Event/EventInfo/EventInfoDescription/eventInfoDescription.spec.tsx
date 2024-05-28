import { render } from "@testing-library/react";
import EventInfoDescription from "./EventInfoDescription";

describe("EventInfoDescription", () => {
  test("should render correctly", () => {
    const component = render(
      <EventInfoDescription
        eventAssist=""
        eventDetail="Yellow Card"
        eventPlayer="Wellington Rato"
        eventTeam="Sao Paulo"
        eventType="card"
      />
    );

    expect(component.getByRole("paragraph")).toBeInTheDocument();
  });

  test("should render info correspondent to goal status", () => {
    const component = render(
      <EventInfoDescription
        eventAssist=""
        eventDetail="Normal Goal"
        eventPlayer="Wellington Rato"
        eventTeam="Sao Paulo"
        eventType="goal"
      />
    );

    expect(component.getByRole("paragraph").innerHTML).toBe(
      "<strong>Wellington Rato</strong> amplia o placar para <strong>Sao Paulo</strong>"
    );
  });

  test("should render info correspondent to card status", () => {
    const component = render(
      <EventInfoDescription
        eventAssist=""
        eventDetail="Yellow Card"
        eventPlayer="Wellington Rato"
        eventTeam="Sao Paulo"
        eventType="card"
      />
    );

    expect(component.getByRole("paragraph").innerHTML).toBe(
      "<strong>Wellington Rato</strong> recebe <strong>cartão amarelo</strong>"
    );
  });

  test("should render info correspondent to substitution status", () => {
    const component = render(
      <EventInfoDescription
        eventAssist="Gallopo"
        eventDetail="Substitution 1"
        eventPlayer="Wellington Rato"
        eventTeam="Sao Paulo"
        eventType="subst"
      />
    );

    expect(component.getByRole("paragraph").innerHTML).toBe(
      "Sai <strong>Wellington Rato</strong> e entra <strong>Gallopo</strong>"
    );
  });

  test("should render info correspondent to var status with not goal", () => {
    const component = render(
      <EventInfoDescription
        eventAssist=""
        eventDetail="Goal Disallowed - offside"
        eventPlayer="Wellington Rato"
        eventTeam="Sao Paulo"
        eventType="var"
      />
    );

    expect(component.getByRole("paragraph").innerHTML).toBe(
      "Após árbitro de vídeo chamar, juiz vai ao VAR. <strong>Gol anulado para Sao Paulo</strong>"
    );
  });

  test("should render info correspondent to var status with goal confirmed", () => {
    const component = render(
      <EventInfoDescription
        eventAssist=""
        eventDetail="Goal confirmed"
        eventPlayer="Wellington Rato"
        eventTeam="Sao Paulo"
        eventType="var"
      />
    );

    expect(component.getByRole("paragraph").innerHTML).toBe(
      "Após árbitro de vídeo chamar, juiz vai ao VAR. <strong>Gol confirmado para Sao Paulo</strong>"
    );
  });

  test("should render info correspondent to var status with red card confirmed", () => {
    const component = render(
      <EventInfoDescription
        eventAssist=""
        eventDetail="Card upgrade"
        eventPlayer="Wellington Rato"
        eventTeam="Sao Paulo"
        eventType="var"
      />
    );

    expect(component.getByRole("paragraph").innerHTML).toBe(
      "Após árbitro de vídeo chamar, juiz vai ao VAR. <strong>Cartão vermelho para Wellington Rato</strong>"
    );
  });

  test("should render info correspondent to var status with red card cancelled", () => {
    const component = render(
      <EventInfoDescription
        eventAssist=""
        eventDetail="Red card cancelled"
        eventPlayer="Wellington Rato"
        eventTeam="Sao Paulo"
        eventType="var"
      />
    );

    expect(component.getByRole("paragraph").innerHTML).toBe(
      "Após árbitro de vídeo chamar, juiz vai ao VAR. <strong>Cartão vermelho de Wellington Rato anulado</strong>"
    );
  });

  test("should render info correspondent to var status with penalty confirmed", () => {
    const component = render(
      <EventInfoDescription
        eventAssist=""
        eventDetail="Penalty confirmed"
        eventPlayer="Wellington Rato"
        eventTeam="Sao Paulo"
        eventType="var"
      />
    );

    expect(component.getByRole("paragraph").innerHTML).toBe(
      "Após árbitro de vídeo chamar, juiz vai ao VAR. <strong>Pênalti marcado para Sao Paulo</strong>"
    );
  });

  test("should render info correspondent to var status with penalty cancelled", () => {
    const component = render(
      <EventInfoDescription
        eventAssist=""
        eventDetail="Penalty cancelled"
        eventPlayer="Wellington Rato"
        eventTeam="Sao Paulo"
        eventType="var"
      />
    );

    expect(component.getByRole("paragraph").innerHTML).toBe(
      "Após árbitro de vídeo chamar, juiz vai ao VAR. <strong>Pênalti anulado para Sao Paulo</strong>"
    );
  });
});
