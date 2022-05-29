import { async } from "@firebase/util";
import React, { useState } from "react";
import { H1 } from "../../components/design/Title/Title";

const AddNew = () => {
  const [name, setName] = useState("");
  const [img, setImg] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [supplier, setSupplier] = useState("");

  const handleAddNew = async (e) => {
    e.preventDefault();
    const newItem = { name, img, description, price, quantity, supplier };

    fetch(`http://localhost:4000/inventory`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newItem),
    })
      .then((res) => res.json())
      .then((data) =>
        data.success ? alert("Item added successfully!") : data.result
      );
  };

  return (
    <div className="container mx-auto">
      <H1>Add New Item</H1>
      <form onSubmit={handleAddNew} className="max-w-sm mx-auto">
        <input
          onBlur={(e) => setName(e.target.value)}
          className="w-full border rounded my-1 p-1"
          type="text"
          name="name"
          id="name"
          placeholder="Enter Item Name"
        />
        <input
          onBlur={(e) => setImg(e.target.value)}
          className="w-full border rounded my-1 p-1"
          type="text"
          name="image"
          id="image"
          placeholder="Enter Image Link"
        />
        <input
          onBlur={(e) => setDescription(e.target.value)}
          className="w-full border rounded my-1 p-1"
          type="text"
          name="description"
          id="description"
          placeholder="Enter Item Description"
        />
        <input
          onBlur={(e) => setPrice(e.target.value)}
          className="w-full border rounded my-1 p-1"
          type="number"
          name="price"
          id="price"
          placeholder="Enter Item Price"
        />
        <input
          onBlur={(e) => setQuantity(e.target.value)}
          className="w-full border rounded my-1 p-1"
          type="number"
          name="quantity"
          id="quantity"
          placeholder="Enter Item Quantity"
        />
        <input
          onBlur={(e) => setSupplier(e.target.value)}
          className="w-full border rounded my-1 p-1"
          type="text"
          name="supplier"
          id="supplier"
          placeholder="Enter Item Supplier"
        />
        <input
          className="px-3 py-1 border shadow rounded bg-slate-900 text-white w-full"
          type="submit"
          value="Add New"
        />
      </form>
    </div>
  );
};

export default AddNew;
