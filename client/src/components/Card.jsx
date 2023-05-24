import React from "react";
import { useCart } from "../context/cart";

const Card = ({ data }) => {
  const [cart, setCart] = useCart();
  const { name, price, _id } = data;
  const image = `https://backend-assgin.onrender.com/api/product-photo/${_id}`;
  // console.log(image);
  return (
    <a href="1" className="duration-200 hover:scale-105">
      <img src={image} alt="product-1" className="w-full" />
      <div className="p-4 text-black/[.9]">
        <h2 className="text-lg font-medium">{name}</h2>
        <div className="flex items-center text-black/[.5]">
          <p className="mr-2 text-lg font-semibold">${price}</p>
          <p className="text-base font-medium line-through">$25.00</p>
          <p className="ml-auto text-base font-medium text-green-500">
            20% off
          </p>
        </div>
        <div
          onClick={(e) => {
            e.preventDefault();
            data = { ...data, image, quantity: 1 };
            if (cart.includes[data]) {
              window.alert("Item already exists in cart.");
            } else {
              setCart([...cart, data]);
              window.alert("Product added to cart.");
            }
          }}
          className="border bg-black/[.9] text-white rounded-lg py-2 px-3 hover:bg-white/[.9] hover:text-black hover:border-spacing-1 border-black duration-200 capitalize my-2 "
        >
          Add to cart
        </div>
      </div>
    </a>
  );
};

export default Card;
