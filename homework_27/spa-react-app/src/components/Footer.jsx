import Link from "./Link";

const Footer = () => (
  <footer className="footer">
    <h1>VickyJourney</h1>
    <ul>
      <li>
        Phone number: <Link href="tel:+48733733733">+48733733733</Link>
      </li>
      <li>
        Email: <Link href="mailto: someone@gmail.com">someone@gmail.com</Link>
      </li>
      <li>
        Git:{" "}
        <Link href="https://github.com">https://github.com/VickyJourney</Link>
      </li>
    </ul>
  </footer>
);

export default Footer;
