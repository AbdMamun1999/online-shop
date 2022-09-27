import React from "react";
import { ProductsType } from "../Products/Products";

// types
type Props = {
  product: ProductsType;
};

const Product: React.FC<Props> = ({ product }) => {
  return (
    <div>
      <div className="p-3 border rounded-md">
        <img src={product.img} alt="" className="object-cover h-40 w-72 rounded-md bg-red-700" />
        <h1 title={product.name}>{product.name.slice(0, 25) + "..."}</h1>
        <h6>${product.price}</h6>
        <button className="w-full p-2 pl-5 pr-5 bg-transparent border-2 border-indigo-500 text-indigo-500 text-lg rounded-lg transition-colors duration-700 transform hover:bg-orange-500 hover:text-gray-100 focus:border-4 focus:border-indigo-300">Add To Cart</button>
      </div>
    </div>
  );
};

export default Product;
