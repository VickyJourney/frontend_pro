import ChangeThemeSwitch from "./ChangeThemeSwitch";
import Link from "./Link";
import { ThemeContext } from "../themeContext";
import { useContext } from "react";

const Header = () => {
  const [theme] = useContext(ThemeContext);
  return (
    <header
      className="header"
      style={{ borderBottom: `1px solid ${theme.color}` }}
    >
      <h1>VickyJourney</h1>
      <ul className="header__list">
        <li>
          <Link href="/">Main</Link>
        </li>
        <li>
          <Link href="/contacts">Contacts</Link>
        </li>
        <li>
          <Link href="/about">About me</Link>
        </li>
      </ul>
      <ChangeThemeSwitch />
    </header>
  );
};

export default Header;
