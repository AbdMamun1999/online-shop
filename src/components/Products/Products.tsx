import React, { useState, useEffect } from "react";
import Product from "../Product/Product";

// type Props = {}
export type ProductsType = {
  name: string;
  about: string[];
  details: {};
  id: number;
  _id: string;
  img: string;
  ratings: number;
  price: number;
  main_key: string;
};

const Products = () => {
  const [products, setProducts] = useState([] as ProductsType[]);

  useEffect(() => {
    fetch("https://agile-dawn-56972.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProducts(data);
      });
  }, []);

  return (
    <div className="bg-slate-300 shadow-md border-2 w-4/5 mx-auto p-4 mt-5">
      <h2 className="my-2 font-bold text-2xl uppercase">Products</h2>
      <hr className="h-[2px] bg-black border-none rounded-lg my-3" />
      <div className="grid grid-cols-4 gap-5">
        {products.map((product) => (
          <Product key={product._id} product={product}></Product>
        ))}
      </div>
    </div>
  );
};

export default Products;
