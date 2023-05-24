import { useEffect } from "react";
import { useCart } from "../context/cart";

export const useSaveCart = () => {
  const [cart, setCart] = useCart();
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cart));
  }, [cart, setCart]);
};

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
