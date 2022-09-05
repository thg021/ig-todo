import s from "./Header.module.css";
import logo from "../assets/Logo.svg";

export function Header() {
  return (
    <header className={s.header}>
      <img src={logo} alt="Logo todo" />
    </header>
  );
}
