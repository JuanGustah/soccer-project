import { FixtureList } from "@/components/Home/FixtureList";

import { useTodayFixtures } from "@/hooks/useTodayFixtures";

import { selectedFixtures } from "@/types/selectedFixtures";
import { fixtureResponse } from "@/types/fixtureResponse";
import { IListDayFixtureView } from "./types";

import { populateFixturesToday } from ".";

import Player from "@/assets/icons/soccer_player.png";

export default function ListDayFixtureView({
  selectedLeaguesId,
}: IListDayFixtureView) {
  let selectedFixturesToday: selectedFixtures = {};

  const { isSuccess, data } = useTodayFixtures<fixtureResponse>();

  if (isSuccess) {
    selectedFixturesToday = populateFixturesToday(data, selectedLeaguesId);

    return (
      <section>
        <span className="flex items-center gap-2">
          <h2 className="font-extra-bold text-xl text-white">
            Partidas de Hoje
          </h2>
          <img src={Player} alt="soccer player" width={30} height={30} />
        </span>
        {Object.keys(selectedFixturesToday).map((fixtureId) => {
          return (
            <FixtureList
              key={fixtureId}
              fixtures={selectedFixturesToday[Number(fixtureId)]}
              showDate={false}
            />
          );
        })}
      </section>
    );
  }

  return <div>Carregando...</div>;
}
