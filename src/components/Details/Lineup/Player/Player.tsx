import { IPlayerProps } from "./types";

import TShirt from "@/assets/icons/tshirt.png";

export default function Player({ number, name }: IPlayerProps) {
  return (
    <div className="flex flex-col items-center" data-testid="player">
      <div className="relative flex flex-col justify-center items-center">
        <img src={TShirt} alt="Shirt icon" className="w-9 h-9" />
        <span className="absolute text-black text-4xs font-righteous font-regular">
          {number}
        </span>
      </div>
      <span
        className="text-white text-2xs font-extra-bold shadow-text text-center w-[7rem]"
        style={{ lineHeight: "1.3rem" }}
      >
        {name}
      </span>
    </div>
  );
}
