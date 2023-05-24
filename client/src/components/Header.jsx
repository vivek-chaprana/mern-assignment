import React, { useState } from "react";
import { useGetSaveCart } from "../hooks/useSaveCart";
import { IoMdHeartEmpty } from "react-icons/io";
import { BsCart } from "react-icons/bs";
import { BiMenuAltRight } from "react-icons/bi";
import { VscChromeClose } from "react-icons/vsc";
import Menu from "./Menu";
import MenuMobile from "./MenuMobile";
import { NavLink } from "react-router-dom";
import { useCart } from "../context/cart";

const Header = () => {
  const [cart] = useCart();
  const [mobileMenu, setMobileMenu] = useState(false);

  useGetSaveCart();

  return (
    <header
      className={`w-full h-[50px] md:h-[80px] bg-white flex items-center justify-between z-20 sticky top-0 transition-transform duration-300 `}
    >
      <section className="h-[60px] flex justify-between items-center w-full max-w-[1280px] px-5 md:px-10 mx-auto">
        <a href="/">
          <img
            src="/logo.svg"
            alt="nike-logo"
            className="w-[40px] md:w-[60px]"
          />
        </a>

        <Menu />

        {mobileMenu && <MenuMobile />}

        {/* Icons Section */}
        <section className="flex items-center gap-2 text-black">
          {/* Icon */}
          <NavLink
            to="/list"
            className="w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center items-center hover:bg-black/[0.05] cursor-pointer relative "
          >
            <IoMdHeartEmpty className="text-[19px] md:text-[24px]" />
            <div className="h-[14px] md:h-[18px] min-w-[14px] md:min-w-[18px] rounded-full bg-red-600 absolute top-1 left-5 md:left-7 text-white text-[10px] md:text-[12px] flex justify-center items-center px-[2px] md:px-[5px]">
              51
            </div>
          </NavLink>

          {/* Icon */}
          <NavLink
            to="/cart"
            className="w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center items-center hover:bg-black/[0.05] cursor-pointer relative "
          >
            <BsCart className="text-[15px] md:text-[20px]" />
            {cart?.length > 0 && (
              <div className="h-[14px] md:h-[18px] min-w-[14px] md:min-w-[18px] rounded-full bg-red-600 absolute top-1 left-5 md:left-7 text-white text-[10px] md:text-[12px] flex justify-center items-center px-[2px] md:px-[5px]">
                {cart.length}
              </div>
            )}
          </NavLink>

          {/* Mobile Menu */}
          <div className="w-8 md:w-12 md:hidden h-8 md:h-12 rounded-full flex justify-center items-center hover:bg-black/[0.05] cursor-pointer relative -mr-2">
            {mobileMenu ? (
              <VscChromeClose
                className="text-16px "
                onClick={() => setMobileMenu(false)}
              />
            ) : (
              <BiMenuAltRight
                className="text-20px "
                onClick={() => setMobileMenu(true)}
              />
            )}
          </div>
        </section>
      </section>
    </header>
  );
};

export default Header;
