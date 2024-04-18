import Logo from "../assets/images/logo.png";

export default function Header() {
  return (
    <div className="h-16 my-5 mx-14">
      <img src={Logo} alt="Soccer Project logo" />
    </div>
  );
}
