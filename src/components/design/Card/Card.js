import React from "react";
import { H3 } from "../Title/Title";

const Card = ({ item }) => {
  const { _id, name, img, description, price, quantity, supplier } = item;

  return (
    <div className="w-[380px] h-[472px] rounded">
      <img className="w-full h-[380px] mb-6 rounded" src={img} alt={name} />
      <H3 text={name} className=" mb-4" />
      <p className="text-ascend text-accent">${price}</p>
    </div>
  );
};

export default Card;
