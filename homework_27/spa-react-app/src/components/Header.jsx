import Link from "./Link";

const Header = () => (
  <header className="header">
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
  </header>
);

export default Header;
