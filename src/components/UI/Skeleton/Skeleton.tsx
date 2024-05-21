import { ISkeletonProps } from "./types";

export default function Skeleton({
  className,
  height,
  width,
  rounded,
}: ISkeletonProps) {
  const heightStyle = `${height}rem`;
  const widthStyle = width ? `${width}rem` : "initial";

  const style = `${className} ${rounded} bg-skeleton`;

  return (
    <div
      className={style}
      style={{ width: widthStyle, height: heightStyle }}
    ></div>
  );
}
