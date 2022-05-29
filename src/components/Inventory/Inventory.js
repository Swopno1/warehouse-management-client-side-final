import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useInventory from "../../hooks/useInventory";
import { Link } from "../design/Link/Link";
import { H1 } from "../design/Title/Title";

const Inventory = () => {
  const params = useParams();
  const [quantity, setQuantity] = useState();
  const [inventory, setInventory] = useInventory(params.id);

  const reduceStock = () => {
    const oldStock = parseInt(inventory.quantity);

    inventory._id && delete inventory._id;

    const newInventory = { ...inventory, quantity: oldStock - 1 };
    setNewStock(newInventory);
  };

  const setNewStock = (newInventory) => {
    fetch(`http://localhost:4000/inventory/${params.id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newInventory),
    });
    setInventory(newInventory);
  };

  const updateStock = (e) => {
    e.preventDefault();

    inventory._id && delete inventory._id;

    const newInventory = { ...inventory, quantity };
    setNewStock(newInventory);
  };

  return (
    <div className="container mx-auto">
      <H1>inventories</H1>
      <div className="card lg:card-side bg-base-100 shadow-xl lg:w-4/5 mx-auto my-12">
        <figure className="w-1/2 h-60">
          <img src={inventory.img} alt={inventory.name} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{inventory.name}</h2>
          <p>{inventory.description}</p>
          <p>Price: ${inventory.price}</p>
          <p>Stock Available: {inventory.quantity}</p>
          <p>Supplier: {inventory.price}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary" onClick={() => reduceStock()}>
              Delivered
            </button>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center my-20">
        <form
          onSubmit={updateStock}
          className="flex justify-center items-center "
        >
          <p className="text-xl font-bold">Restock The Items:</p>
          <input
            onBlur={(e) => setQuantity(e.target.value)}
            className="input max-w-xs mx-3"
            type="text"
            name="quantity"
            id="quantity"
            placeholder="Enter new quantity"
          />
          <input className="btn" type="submit" value="Update Stock" />
        </form>
      </div>
      <div className="text-center mt-3 mb-12">
        <Link to="/manageinventory" text="Manage Inventories" className="" />
      </div>
    </div>
  );
};

export default Inventory;

// id, name, image, description, price, quantity, supplier name, sold, etc. This page will have a Button named `delivered`
