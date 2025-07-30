import React, { useState } from "react";
import Heading from "../Heading/Heading";
import ProductList from "../ProductList/ProductList";
import Card from "../Card/Card";
import { Link } from "react-router-dom";

const Products = () => {
  const categories = ["All", "Fruits", "Vegetables", "Dairy", "SeaFood"];
  const [activeTab, setActiveTab] = useState("All");

  const filteredProducts =
    activeTab === "All"
      ? ProductList
      : ProductList.filter((product) => product.category === activeTab);

  const renderCard = filteredProducts.slice(0,8).map((product, index) => (
    <Card
      key={index}
      image={product.image}
      name={product.name}
      price={product.price}
    />
  ));
  return (
    <div className="max-w-[1400px] mx-auto px-10 py-20">
      <Heading highlight="Our" heading="Products" />

      {/* Tabs */}
      <div className="flex gap-3 justify-center mt-10">
        {categories.map((category) => {
          return (
            <button
              key={category}
              onClick={() => setActiveTab(category)} 
              className={`px-5 py-2 text-lg rounded-lg transition-all duration-300 cursor-pointer ${
                activeTab === category
                  ? "bg-gradient-to-b from-orange-400 to-orange-500 text-white"
                  : "bg-zinc-100 text-black"
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>
      {/* Product Listing  */}
      <div className="grid grid-cols-4 gap-9 mt-20">
        {renderCard}
        </div>
        <div className="mt-15 mx-auto w-fit">
          <Link to ="./allproducts"className="bg-gradient-to-b from-orange-400 to-orange-500 text-white px-8 py-3 rounded-lg md:text-lg text-md hover:scale-105 hover:to-orange-600 transation-all duration-300 cursor-pointer">Sea All

                </Link>
        </div>
    </div>
  );
};

export default Products;
