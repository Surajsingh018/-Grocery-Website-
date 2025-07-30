import React from "react";
import { FaHeart, FaPlus } from "react-icons/fa";
import Button from "../Button/Button";

const Card = ({ image, name, price }) => {
  return (
    <div className=" p-5 bg-zinc-100 rounded-lg">
      {/* card icons */}
      <div className="justify-between flex ">
        <span className="text-3-xl  text-zinc-300 cursor-pointer">
          <FaHeart />
        </span>
        <button className="bg-gradient-to-b from-orange-400 to-orange-500 text-white  text-xl px-4 py-3 rounded-lg cursor-pointer">
          <FaPlus />
        </button>
      </div>

      {/* Card Image */}
      <div className="w-full h-50 flex items-center justify-center">
        <img src={image} alt={name} className="w-full h-full object-contain mx-auto " />
      </div>

      {/* Card Content */}
      <div className="text-center">
        <h3 className="font-semibold text-2xl">{name}</h3>
        <p className="text-2xl font-semibold mt-4 mb-3">${price.toFixed(2)}</p>
        <Button content="Shop Now" />
      </div>
    </div>
  );
};

export default Card;
