import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import axios from "axios";
import { useSaveCart } from "../hooks/useSaveCart";

const Home = () => {
  const [products, setProducts] = useState([]);
  const fetchData = async () => {
    try {
      const { data } = await axios.get(
        "https://backend-assgin.onrender.com/api/get-products"
      );
      setProducts(data.products);
    } catch (err) {
      console.log(err);
    }
  };

  useSaveCart();

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <main className="w-full max-w-[1280px] px-5 md:px-10 mx-auto">
      <div className="text-center max-w-[800px] mx-auto my-[50px] md:my-[80px]">
        <div className="text-[28px] md:text-[34px] mb-5 font-bold leading-tight">
          CHASE THE DAY
        </div>
        <div className="text-md md:text-l">
          Move. Explore. Bring your boldest. <br /> Get after summer&apos;s
          endless possibilities with ready-for-anything fits.
        </div>
      </div>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-14 px-5 md:px-0">
        {products?.map((item) => {
          return <Card key={item._id} data={item} />;
        })}
      </section>
    </main>
  );
};

export default Home;
