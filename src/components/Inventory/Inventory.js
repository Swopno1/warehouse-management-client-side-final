import React, { useEffect, useState } from "react";
import Card from "../design/Card/Card";
import { Link4 } from "../design/Link/Link";
import { H1 } from "../design/Title/Title";

//   {
//     _id: 1,
//     name: "Bread",
//     img: "https://i.ibb.co/RvhVcKV/image14.jpg",
//     description: "",
//     price: "300",
//     quantity: "",
//     supplier: "Amir",
//   }

const Inventory = () => {
  const [inventories, setInventories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/inventory")
      .then((res) => res.json())
      .then((data) => setInventories(data));
  }, []);

  return (
    <section className="container mx-auto">
      <div className="section-header flex justify-between items-center">
        <H1 className="mt-16" text="Inventory" />
        <Link4 className="mt-16" to="/inventory" text="View all" />
      </div>

      <div className="w-full my-4 grid grid-cols-3 gap-20">
        {inventories.map((el) => (
          <Card key={el._id} item={el} />
        ))}
      </div>
    </section>
  );
};

export default Inventory;
