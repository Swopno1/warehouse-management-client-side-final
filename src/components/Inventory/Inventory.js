import React from "react";
import { useParams } from "react-router-dom";
import useInventory from "../../hooks/useInventory";

const Inventory = () => {
  const params = useParams();

  const { _id, name, img, description, price, quantity, supplier } =
    useInventory(params);
  console.log(params.id);

  return <div className="container mx-auto">inventories</div>;
};

export default Inventory;
