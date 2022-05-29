import React from "react";
import { Link } from "react-router-dom";
import { H3 } from "../Title/Title";

const Card = ({ item }) => {
  const { _id, name, img, description, price, quantity, supplier } = item;

  return (
    <Link to={`/inventory/${_id}`} className="w-[380px] h-[472px] rounded">
      <div className="relative overflow-hidden bg-no-repeat bg-cover max-w-xs">
        <img className="max-w-xs h-[380px] mb-6 rounded" src={img} alt={name} />
      </div>

      <H3 text={name} className=" mb-4" />
      <div className="">
        <p>Supplier: {supplier}</p>
        <p>{description}</p>
      </div>
      <div className="flex justify-between items-center">
        <p className="text-accent">${price}</p>
        <p className="text-black">{quantity}</p>
      </div>
    </Link>
  );
};

export default Card;
