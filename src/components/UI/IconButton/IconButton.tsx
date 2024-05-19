import { Link } from "react-router-dom";
import { IIconButtonProps } from "./types";

export default function IconButton({ icon: Icon, ...rest }: IIconButtonProps) {
  return (
    <Link
      className="h-9 w-9 border-dark text-dark border-4 rounded-full flex justify-center items-center transition hover:bg-dark hover:text-white"
      {...rest}
    >
      <Icon height={18} width={18} />
    </Link>
  );
}
