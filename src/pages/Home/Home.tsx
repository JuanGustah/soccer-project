import React from "react";

import { Container } from "@/components/UI/Container";
import ListDayFixtureView from "./ListDayFixtureView";
import ListFavoriteTeamFixtureView from "./ListFavoriteTeamFixtureView";

import Background from "@/assets/images/background_list.png";
import { SuspenseBoundary } from "@/components/SuspenseBoundary";
import Fallback from "./Fallback";
import Error from "./Error";

export default function Home() {
  const selectedLeaguesId = [
    4, 21, 71, 72, 75, 76, 39, 78, 140, 1, 2, 45, 48, 15, 480, 253, 37, 9, 556,
    531, 73, 5, 624, 612, 475, 622, 632, 34, 13, 11, 3, 529, 143,
  ];
  const favoriteTeams = [
    {
      id: 126,
      name: "São Paulo",
      logo: "https://media.api-sports.io/football/teams/126.png",
    },
  ];

  return (
    <React.Fragment>
      <img
        src={Background}
        alt="background image"
        className="absolute inset-0 w-full z-negative"
      />
      <Container className="mt-14" htmlTag="main">
        <SuspenseBoundary
          FallbackComponent={<Fallback />}
          ErrorComponent={Error}
        >
          <ListDayFixtureView selectedLeaguesId={selectedLeaguesId} />
          <ListFavoriteTeamFixtureView favoriteTeams={favoriteTeams} />
        </SuspenseBoundary>
      </Container>
    </React.Fragment>
  );
}
