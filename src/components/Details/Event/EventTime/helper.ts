export function generateTimeEvent(time: number, extra: number | null) {
  let localeTime = String(time);
  let stage = "1T";

  if (time > 45) {
    time = Number(time) - 45;
    localeTime = String(time);
    stage = "2T";
  }

  if (extra) {
    localeTime = time + "+" + extra;
    stage = "AC";
  }

  return { time: String(localeTime).padStart(2, "0"), stage };
}
