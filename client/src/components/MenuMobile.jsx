import React from "react";

const MenuMobile = () => {
  return (
    <ul className="flex flex-col md:hidden font-bold absolute top-[50px] left-0 w-full h-[calc(100vh-50px)] bg-white border-t text-black">
      <li className="py-4 px-5 border-b">
        <a href="/">Home</a>
      </li>
      <li className="py-4 px-5 border-b">
        <a href="/">About</a>
      </li>
      <li className="py-4 px-5 border-b">
        <a href="/">Categories</a>
      </li>
      <li className="py-4 px-5 border-b">
        <a href="/">Contact</a>
      </li>
      <li className="py-4 px-5 border-b">
        <a href="/add-product">Add Product</a>
      </li>
    </ul>
  );
};

export default MenuMobile;
