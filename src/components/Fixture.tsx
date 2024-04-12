import IconButton from "./IconButton";

import Notification from "../assets/notification.svg?react";
import Plus from "../assets/plus.svg?react";
import VersusIcon from "../assets/x.png";

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

export default function Fixture({
  id,
  epochTimestamp,
  home,
  away,
}: FixtureProps) {
  const convertedDate = new Date(epochTimestamp * 1000);
  const localTime = new Intl.DateTimeFormat("pt-BR", {
    timeStyle: "short",
  }).format(convertedDate);

  return (
    <div className="bg-snow text-dark h-20 px-14 py-5 flex justify-between items-center rounded-2xl">
      <p className="text-sm font-bold">{localTime}</p>
      <div className="flex items-center gap-10">
        <div className="flex items-center gap-5">
          <p className="font-semi-bold text-sm">{home.name}</p>
          <img src={home.logo} alt="Home Team" className="h-12 w-12" />
        </div>
        <img src={VersusIcon} alt="Versus Icon" />
        <div className="flex items-center gap-5">
          <img src={away.logo} alt="Away Team" className="h-12 w-12" />
          <p className="font-semi-bold text-sm">{away.name}</p>
        </div>
      </div>
      <div className="flex gap-8">
        <IconButton icon={Notification} />
        <IconButton icon={Plus} />
      </div>
    </div>
  );
}
