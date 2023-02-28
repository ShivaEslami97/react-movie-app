import React from "react";
import { NavLink } from "react-router-dom";

const NavList = (props) => {
  return (
    <li className="nav__item">
      <NavLink to={props.to} className={props.navLinkClassName}>
        {props.children}
      </NavLink>
    </li>
  );
};

export default NavList;
