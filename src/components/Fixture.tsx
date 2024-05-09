import IconButton from "./IconButton";

import Notification from "../assets/icons/notification.svg?react";
import Plus from "../assets/icons/plus.svg?react";
import VersusIcon from "../assets/icons/x.png";
import date from "../services/date";

type Team = {
  name: string;
  logo: string;
};

interface FixtureProps {
  id: number;
  epochTimestamp: number;
  home: Team;
  away: Team;
  showDate: boolean;
}

export default function Fixture({
  id,
  epochTimestamp,
  home,
  away,
  showDate,
}: FixtureProps) {
  const convertedEpochTimestamp = epochTimestamp * 1000;
  const convertedDate = date(convertedEpochTimestamp);
  const time = convertedDate.format("HH:mm");

  const textDate = convertedDate.calendar();

  return (
    <div className="bg-snow text-dark h-20 px-14 grid grid-cols-5 items-center rounded-2xl">
      <div className="flex flex-col gap-2">
        {showDate ? (
          <p className="text-2xs text-iron font-semi-bold leading-3">
            {textDate}
          </p>
        ) : null}
        <p className="text-sm font-bold leading-3">{time}</p>
      </div>
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
        <IconButton icon={Plus} tag="link" to={`details/${id}`} />
      </div>
    </div>
  );
}
