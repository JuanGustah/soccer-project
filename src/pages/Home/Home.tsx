import React from "react";
import { AxiosResponse } from "axios";

import Container from "../../components/Container";
import FixtureList from "../../components/FixtureList";

import useBatchFetch from "../../hooks/useBatchFetch";

import { fixture } from "../../types/fixture";

import Background from "../../assets/images/background_list.png";
// import Fans from "../assets/icons/fan.svg";
import ListDayFixtureView from "./ListDayFixtureView";

export type selectedFixtures = {
  [key: number]: fixture[];
};

type filteredFavoriteTeamFixtures = {
  [key: number]: selectedFixtures;
};

function isArrayOfAxiosResponse(obj: unknown): obj is AxiosResponse[] {
  return Array.isArray(obj) && obj.every(isAxiosResponse);
}
function isAxiosResponse(obj: unknown): obj is AxiosResponse {
  return obj != undefined && typeof (obj as AxiosResponse).status === "number";
}

export default function Home() {
  const selectedLeaguesId = [
    4, 21, 71, 72, 75, 76, 39, 78, 140, 1, 2, 45, 48, 15, 480, 253, 37, 9, 556,
    531, 73, 5, 624, 612, 475, 622, 632, 34, 13, 11, 3, 529, 143,
  ];
  // const favoriteTeams = [
  //   {
  //     id: 126,
  //     name: "São Paulo",
  //     logo: "https://media.api-sports.io/football/teams/126.png",
  //   },
  // ];

  // const today = date();
  // const dayNextWeek = today.add(7, "days");

  // const filteredFavoriteTeamsFixtures: filteredFavoriteTeamFixtures = {};

  // function populateFixturesFavoriteTeams(
  //   favoriteTeamsResponse: AxiosResponse[]
  // ) {
  //   favoriteTeamsResponse.map(({ data }) => {
  //     const fixtures: fixture[] = data.response;
  //     const teamId: number = data.parameters.team;

  //     filteredFavoriteTeamsFixtures[teamId] = {};

  //     fixtures.forEach((fixture) => {
  //       if (date(fixture.fixture.date).isSameOrAfter(today, "day")) {
  //         if (!filteredFavoriteTeamsFixtures[teamId][fixture.league.id]) {
  //           filteredFavoriteTeamsFixtures[teamId][fixture.league.id] = [];
  //         }
  //         filteredFavoriteTeamsFixtures[teamId][fixture.league.id].push(
  //           fixture
  //         );
  //       }
  //     });
  //   });
  // }

  // const { isSuccess: isSuccessFavoriteTeams, data: favoriteTeamsFixtures } =
  //   useBatchFetch(
  //     favoriteTeams.map((team) => [
  //       {
  //         key: "team",
  //         value: String(team.id),
  //       },
  //       {
  //         key: "season",
  //         value: "2024",
  //       },
  //       {
  //         key: "from",
  //         value: today.format("YYYY-MM-DD"),
  //       },
  //       {
  //         key: "to",
  //         value: dayNextWeek.format("YYYY-MM-DD"),
  //       },
  //     ])
  //   );

  // if (isSuccessFavoriteTeams && isArrayOfAxiosResponse(favoriteTeamsFixtures)) {
  //   populateFixturesFavoriteTeams(favoriteTeamsFixtures);
  // }

  return (
    <React.Fragment>
      <img
        src={Background}
        alt="background image"
        className="absolute inset-0 w-full z-negative"
      />
      <Container className="mt-14">
        <ListDayFixtureView selectedLeaguesId={selectedLeaguesId} />

        {/* {isSuccessFavoriteTeams ? (
          <React.Fragment>
            <span className="flex items-center gap-2 mt-28">
              <h2 className="font-extra-bold text-xl text-white">
                Seus times do coração
              </h2>
              <img src={Fans} alt="soccer fans" width={30} height={30} />
            </span>
            <div className="flex flex-col mt-8">
              {Object.keys(filteredFavoriteTeamsFixtures).map(
                (favoriteTeamId) => {
                  const favoriteTeam = favoriteTeams.find(
                    (team) => team.id == Number(favoriteTeamId)
                  )!;
                  const favoriteTeamFixtures =
                    filteredFavoriteTeamsFixtures[Number(favoriteTeamId)];

                  return (
                    <div
                      className="flex flex-col gap-6"
                      key={"section-" + favoriteTeamId}
                    >
                      <div className="flex items-center w-fit gap-3 px-5 py-3 border-2 border-white rounded-full">
                        <h3 className="text-white text-xs font-semi-bold">
                          {favoriteTeam.name}
                        </h3>
                        <img
                          src={favoriteTeam.logo}
                          alt={`${favoriteTeam.name} logo`}
                          className="h-6"
                        />
                      </div>
                      {Object.keys(favoriteTeamFixtures).map((competition) => {
                        return (
                          <FixtureList
                            key={competition}
                            fixtures={favoriteTeamFixtures[Number(competition)]}
                            isFavoriteTeamFixtureList={true}
                          />
                        );
                      })}
                    </div>
                  );
                }
              )}
            </div>
          </React.Fragment>
        ) : null} */}
      </Container>
    </React.Fragment>
  );
}
