import { NavLink } from "react-router-dom";

const Link = (props) => {
  const { children, href } = props;

  return (
    <NavLink
      to={href}
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
