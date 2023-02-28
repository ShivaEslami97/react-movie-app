/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { navList } from "../../data/navData";
import NavList from "./NavList";

const SidebarNav = () => {
  return (
    <nav className="nav">
      <ul className="nav__list">
        {navList.map((item, index) => {
          return (
            <NavList
              key={index}
              to={index === 0 ? "/" : `/${item.title.replace(/\s/g, "")}`}
              navLinkClassName={({ isActive }) =>
                isActive ? "nav__link nav__link-active" : "nav__link"
              }
            >
              {item.icon}
              {item.title}
            </NavList>
          );
        })}
      </ul>
    </nav>
  );
};

export default SidebarNav;
