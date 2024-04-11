import { ButtonHTMLAttributes } from "react";

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  iconSrc: string;
  iconAlt: string;
}

export default function IconButton({ iconSrc, iconAlt }: IconButtonProps) {
  return (
    <button className="h-9 w-9 border-4 rounded-full flex justify-center items-center "></button>
  );
}
