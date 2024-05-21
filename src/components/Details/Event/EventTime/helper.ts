export function generateTimeEvent(time: number, extra: number | null) {
  let localeTime = String(time);
  let stage = "1T";

  if (extra) {
    localeTime = time + "+" + extra;
    stage = "AC";
  }

  if (time > 45 && !extra) {
    localeTime = String(Number(time) - 45);
    stage = "2T";
  }

  return { time: String(localeTime).padStart(2, "0"), stage };
}
