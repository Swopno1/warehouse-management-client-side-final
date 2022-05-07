import React from "react";
import { useParams } from "react-router-dom";

const Inventory = () => {
  const params = useParams();
  console.log(params);

  return <div>inventories</div>;
};

export default Inventory;
