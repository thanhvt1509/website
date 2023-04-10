import React from "react";
import { useState, useEffect } from "react";
import { getAll } from "../../api/product";
import Banner from "../../components/layout/user/Banner";
import Product from "../../components/layout/user/Products";
import { IProduct } from "../../interfaces/product";

const Homepage = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const fetchProducts = async () => {
    try {
      const { data } = await getAll();
      // console.log(data);
      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="container mx-auto">
      <div>
        <Banner></Banner>
      </div>
      <div className="mb-5">
        <h1 className="text-2xl mb-5 font-medium leading-10 text-[#444444]">
          SẢN PHẨM NỔI BẬT NHẤT
        </h1>
        <div className="grid grid-cols-5 gap-6">
          {products.map((product) => (
            <Product key={product._id} data={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Homepage;
