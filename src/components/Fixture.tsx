import IconButton from "./IconButton";

import Notification from "../assets/icons/notification.svg?react";
import Plus from "../assets/icons/plus.svg?react";
import VersusIcon from "../assets/icons/x.png";

type Team = {
  name: string;
  logo: string;
};

interface FixtureProps {
  id: number;
  epochTimestamp: number;
  home: Team;
  away: Team;
}

export default function Fixture({ epochTimestamp, home, away }: FixtureProps) {
  const convertedDate = new Date(epochTimestamp * 1000);
  const localTime = new Intl.DateTimeFormat("pt-BR", {
    timeStyle: "short",
  }).format(convertedDate);

  return (
    <div className="bg-snow text-dark h-20 px-14 py-5 grid grid-cols-5 items-center rounded-2xl">
      <p className="text-sm font-bold">{localTime}</p>
      <div className="col-span-3 grid grid-cols-1-0.1-1 items-center gap-8">
        <div className="justify-self-end flex items-center gap-5">
          <p className="font-semi-bold text-sm">{home.name}</p>
          <img src={home.logo} alt="Home Team" className="h-11" />
        </div>
        <img
          src={VersusIcon}
          alt="Versus Icon"
          className="self-center justify-self-center"
        />
        <div className="justify-self-start flex items-center gap-5">
          <img src={away.logo} alt="Away Team" className="h-11" />
          <p className="font-semi-bold text-sm">{away.name}</p>
        </div>
      </div>
      <div className="flex gap-8 justify-self-end">
        <IconButton icon={Notification} />
        <IconButton icon={Plus} />
      </div>
    </div>
  );
}
