import React from "react";
import Card from "../design/Card/Card";
import { H1 } from "../design/Title/Title";

const inventories = [
  {
    _id: 2,
    name: "Bread",
    img: "",
    description: "",
    price: "",
    quantity: "",
    supplier: "Amir",
  },
];

const Inventory = () => {
  return (
    <section className="container mx-auto">
      <H1 className="mt-16 text-center" text="Inventory" />
      <div>
        {inventories.map((el) => (
          <Card key={el._id} item={el} />
        ))}
      </div>
    </section>
  );
};

export default Inventory;
