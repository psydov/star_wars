import React from "react";
import NavItem from "./NavItem";
import { navItems } from "../../utils/constants";

const Navigation = () => {
  return (
    // p-3 w-25 navbar-dark bg-dark
    <nav className="fixed-top mt-2 ms-4">
      <ul className="nav">
        {navItems.map((item, index) => (
          <NavItem key={index} item={item} />
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
