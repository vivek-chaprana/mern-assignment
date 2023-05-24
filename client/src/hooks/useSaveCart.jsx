import { useEffect } from "react";
import { useCart } from "../context/cart";

//Custom hook to save cart data to localstorage
export const useSaveCart = () => {
  const [cart, setCart] = useCart();
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cart));
  }, [cart, setCart]);
};

//Custom hook to fetch cart data from localstorage
export const useGetSaveCart = () => {
  // eslint-disable-next-line
  const [cart, setCart] = useCart();
  useEffect(() => {
    const savedCartItems = localStorage.getItem("cartItems");
    if (savedCartItems) {
      setCart(JSON.parse(savedCartItems));
    }
    // eslint-disable-next-line
  }, []);
};
