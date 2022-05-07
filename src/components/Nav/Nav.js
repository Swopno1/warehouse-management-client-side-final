import React from "react";
import { Link } from "../design/Link/Link";

const navItems = [
  { _id: 1, name: "Home", url: "/home" },
  { _id: 2, name: "Inventory", url: "/inventory" },
  { _id: 3, name: "Add", url: "/add" },
];

const Nav = () => {
  return (
    <nav className="nav flex">
      {navItems.map((el) => (
        <Link className="mr-16" key={el._id} to={el.url} text={el.name} />
      ))}
    </nav>
  );
};

export default Nav;
