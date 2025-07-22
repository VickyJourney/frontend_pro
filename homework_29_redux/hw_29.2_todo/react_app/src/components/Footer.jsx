import React from "react";
import { useSelector } from "react-redux";

const Footer = () => {
  const items = useSelector((state) => state.todos.items);
  return (
    <footer>
      <p>Total number of tasks: {items.length}</p>
    </footer>
  );
};

export default Footer;
