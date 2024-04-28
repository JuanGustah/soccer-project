import React from "react";
import { AxiosResponse } from "axios";

import Header from "./templates/Header";
import Container from "./components/Container";
import useFetch from "./hooks/useFetch";

import { fixture } from "./types/fixture";

import Background from "./assets/images/background_list.png";
import Player from "./assets/icons/soccer_player.png";
import FixtureList from "./components/FixtureList";

type selectedFixtures = {
  [key: number]: fixture[];
};

function App() {
  const selectedFixturesToday: selectedFixtures = {};
  const selectedLeaguesId = [
    4, 21, 71, 72, 75, 76, 39, 78, 140, 1, 2, 45, 48, 15, 480, 253, 37, 9, 556,
    531, 73, 5, 624, 612, 475, 622, 632, 34, 13, 11, 3, 529, 143,
  ];

  function populateFixturesToday(data: AxiosResponse) {
    const fixtures: fixture[] = data.data.response;

    fixtures.forEach((fixture) => {
      if (selectedLeaguesId.includes(fixture.league.id)) {
        if (!selectedFixturesToday[fixture.league.id]) {
          selectedFixturesToday[fixture.league.id] = [];
        }
        selectedFixturesToday[fixture.league.id].push(fixture);
      }
    });

    console.log(selectedLeaguesId);
    console.log(selectedFixturesToday);
    console.log(data);
  }

  const { isSuccess, data } = useFetch({
    key: "date",
    value: "2024-04-17",
  });

  if (isSuccess) {
    populateFixturesToday(data);
  }

  return (
    <React.Fragment>
      <img
        src={Background}
        alt="background image"
        className="absolute inset-0 w-full z-negative"
      />
      <Header />
      <Container className="mt-14">
        <span className="flex items-center gap-2">
          <h2 className="font-extra-bold text-xl text-white">
            Partidas de Hoje
          </h2>
          <img src={Player} alt="soccer player" width={30} height={30} />
        </span>
        {isSuccess ? (
          <>
            {Object.keys(selectedFixturesToday).map((fixtureId) => {
              return (
                <FixtureList
                  fixtures={selectedFixturesToday[Number(fixtureId)]}
                />
              );
            })}
          </>
        ) : (
          <></>
        )}
      </Container>
    </React.Fragment>
  );
}

export default App;
