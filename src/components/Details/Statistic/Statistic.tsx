import { IStatistic } from "./types";

export default function Statistic({
  statName,
  homeStatValue,
  awayStatValue,
}: IStatistic) {
  const totalBarWidth = 28.75;

  const valueOfHomeStat =
    typeof homeStatValue == "number"
      ? homeStatValue
      : Number(homeStatValue.replace("%", ""));

  const valueOfAwayStat =
    typeof awayStatValue == "number"
      ? awayStatValue
      : Number(awayStatValue.replace("%", ""));

  const homeStatWidth =
    (totalBarWidth * valueOfHomeStat) / (valueOfAwayStat + valueOfHomeStat);
  const awayStatWidth =
    (totalBarWidth * valueOfAwayStat) / (valueOfAwayStat + valueOfHomeStat);

  return (
    <div className="flex flex-col items-center gap-6" key={statName}>
      <h5 className="font-semi-bold text-white text-md">{statName}</h5>
      <div className="flex items-center gap-5">
        <div className="flex items-center gap-7">
          <span className="font-semi-bold text-white text-md ">
            {homeStatValue}
          </span>
          <div className="rounded-full bg-cobalt relative w-115 h-7">
            <div
              className={`rounded-full bg-lime absolute right-0 h-7`}
              style={{ width: `${homeStatWidth}rem` }}
            ></div>
          </div>
        </div>
        <div className="flex items-center gap-7">
          <div className="rounded-full bg-cobalt relative w-115 h-7">
            <div
              className={`rounded-full bg-lime absolute lef-0 h-7`}
              style={{ width: `${awayStatWidth}rem` }}
            ></div>
          </div>
          <span className="font-semi-bold text-white text-md ">
            {awayStatValue}
          </span>
        </div>
      </div>
    </div>
  );
}
