import React from "react";
import { H3 } from "../Title/Title";

const Card = ({ item }) => {
  const { _id, name, img, description, price, quantity, supplier } = item;

  return (
    <div className="w-[380px] h-[472px] rounded">
      <img className="w-full h-[380px] mb-6 rounded" src={img} alt={name} />
      <H3 text={name} className=" mb-4" />
      <div className="">
        <p>Supplier: {supplier}</p>
        <p>{description}</p>
      </div>
      <div className="flex justify-between items-center">
        <p className="text-accent">${price}</p>
        <p className="text-black">{quantity.slice(0, 30)}</p>
      </div>
    </div>
  );
};

export default Card;
