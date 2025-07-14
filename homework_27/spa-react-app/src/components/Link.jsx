import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ThemeContext } from "../themeContext";

const Link = (props) => {
  const [theme] = useContext(ThemeContext);
  const { children, href } = props;

  return (
    <NavLink
      to={href}
      style={{ color: theme.color }}
      className={({ isActive }) => {
        if (isActive) {
          return "active";
        }
      }}
    >
      {" "}
      {children}
    </NavLink>
  );
};

export default Link;
