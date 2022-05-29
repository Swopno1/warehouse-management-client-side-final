import React from "react";
import { useParams } from "react-router-dom";
import useInventory from "../../hooks/useInventory";
import { H1 } from "../design/Title/Title";

const Inventory = () => {
  const params = useParams();
  const [inventory] = useInventory(params.id);

  const reduceStock = () => {
    const oldStock = parseInt(inventory.stock);
    const newInventory = { ...inventory, stock: oldStock - 1 };
    fetch(`http://localhost:4000/inventory/${params.id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newInventory),
    });
  };

  return (
    <div className="container mx-auto">
      <H1>inventories</H1>
      <div className="card lg:card-side bg-base-100 shadow-xl lg:w-4/5 mx-auto my-12">
        <figure className="w-1/2">
          <img src={inventory.img} alt={inventory.name} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{inventory.name}</h2>
          <p>{inventory.description}</p>
          <p>Price: ${inventory.price}</p>
          <p>Stock Available: {inventory.stock}</p>
          <p>Supplier: {inventory.price}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary" onClick={reduceStock()}>
              Delivered
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inventory;

// id, name, image, description, price, quantity, supplier name, sold, etc. This page will have a Button named `delivered`
