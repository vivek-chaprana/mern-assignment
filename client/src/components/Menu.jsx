import React from "react";
import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <ul className="hidden md:flex items-center gap-8 font-medium text-black">
      <li className="cursor-pointer">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="cursor-pointer">
        <NavLink to="#">About</NavLink>
      </li>
      <li className="cursor-pointer">
        <NavLink to="/">Categories</NavLink>
      </li>
      <li className="cursor-pointer">
        <NavLink to="/">Contact</NavLink>
      </li>
      <li className="cursor-pointer">
        <NavLink to="/add-product">Add Product</NavLink>
      </li>
    </ul>
  );
};

export default Menu;
