import React from "react";
import { useCart } from "../context/cart";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { useSaveCart } from "../hooks/useSaveCart";

const Cart = () => {
  //Decrese product qty by 1

  const handleDecrement = (id) => {
    const updatedCart = cart
      .map((curElem) => {
        if (curElem._id === id) {
          return { ...curElem, quantity: curElem.quantity - 1 };
        }
        return curElem;
      })
      .filter((curElem) => curElem.quantity !== 0);
    setCart(updatedCart);
  };

  //Save Cart to Localstorage | CustomHook
  useSaveCart();

  //Increase product qty by 1
  const handleIncrement = (id) => {
    const updatedCart = cart.map((item) => {
      if (item._id === id) {
        if (item.quantity < 5) {
          let newAmt = item.quantity + 1;
          return { ...item, quantity: newAmt };
        } else {
          return item;
        }
      } else {
        return item;
      }
    });
    setCart(updatedCart);
  };

  const [cart, setCart] = useCart();

  //Discounts on the basisi on quantity
  const discounts = {
    1: { discount: 0 },
    2: { discount: 10 },
    3: { discount: 20 },
    4: { discount: 30 },
    5: { discount: 40 },
  };
  // Gives discounted price for a product
  const getDiscountedPrice = (price, qty) => {
    if (qty > 1) {
      const total = price * qty;
      const discount = discounts[qty].discount / 100;
      const discoutedPrice = total - discount * total;
      return discoutedPrice;
    }
    return price;
  };

  //Gives final total of all products
  const getFinalPrice = () => {
    let finalPrice = 0;
    cart.forEach((item) => {
      finalPrice += getDiscountedPrice(item.price, item.quantity);
    });
    return finalPrice;
  };

  return (
    <main className="w-full max-w-[1280px] px-5 md:px-10 mx-auto">
      <h1 className="text-4xl font-bold my-3">Cart</h1>
      <h2 className="text-xl my-3">
        You have {cart.length} items in you cart.
      </h2>
      {cart.length > 0 ? (
        <section>
          {cart.map((item) => {
            return (
              <div
                key={item._id}
                className="w-full border my-3 flex flex-col md:flex-row justify-between "
              >
                <div className="w-[300px] md:w-[40%]">
                  <img src={item.image} alt={item.name} />
                </div>
                <div className="w-[60%] flex flex-col justify-evenly py-3 px-5">
                  <h2 className="font-bold text-3xl text-black.[.9]">
                    {item.name}
                  </h2>
                  <p className="text-xl">{item.description}</p>
                  <h3
                    className={
                      item.quantity === 1
                        ? "text-green-500 text-2xl font-semibold"
                        : "text-black text-2xl font-semibold"
                    }
                  >
                    $ {item.price}
                  </h3>
                  {item.quantity > 1 && (
                    <h3 className="text-2xl text-black font-semibold md:block">
                      ${item.price} * {item.quantity}
                      <p className="text-green-500 text-4xl">
                        ${getDiscountedPrice(item.price, item.quantity)}
                      </p>
                      <div className="flex items-center">
                        <p className="line-through mr-3">
                          ${item.price * item.quantity}
                        </p>
                        <p className="text-lg text-green-500">
                          {discounts[item.quantity].discount} % off
                        </p>
                      </div>
                    </h3>
                  )}
                  <p>
                    There is additional discount if you order more items
                    together.
                  </p>
                  <div className="flex">
                    <button
                      onClick={() => handleDecrement(item._id)}
                      className="w-[32px] h-[32px] text-[24px] bg-neutral-300 flex justify-center items-center rounded-xl mx-3"
                    >
                      <AiOutlineMinus />
                    </button>
                    <p className="text-[24px]">{item.quantity}</p>
                    <button
                      onClick={() => handleIncrement(item._id)}
                      className="w-[32px] h-[32px] text-[24px] bg-neutral-300 flex justify-center items-center rounded-xl mx-3"
                    >
                      <AiOutlinePlus />
                    </button>
                  </div>
                  <button
                    onClick={() => {
                      setCart(cart.filter((obj) => obj !== item));
                    }}
                    className="border bg-black/[.9] text-white rounded-lg py-2 px-3 hover:bg-white/[.9] hover:text-black hover:border-spacing-1 border-black duration-200 capitalize my-2 "
                  >
                    Remove from Cart
                  </button>
                </div>
              </div>
            );
          })}
          <div className="flex flex-col justify-start my-5">
            <p className="text-3xl font-semibold my-3">
              Grand Total : $ {getFinalPrice()}
            </p>
            <button className="border bg-black/[.9] text-white rounded-lg py-2 px-3 hover:bg-white/[.9] hover:text-black hover:border-spacing-1 border-black duration-200 capitalize my-2 ">
              Proceed to Checkout
            </button>
          </div>
        </section>
      ) : (
        <div className="text-center my-20">
          <h3 className="text-3xl text-normal">
            Add some items to your cart and they will magically appear here.
          </h3>
        </div>
      )}
    </main>
  );
};

export default Cart;
