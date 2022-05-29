import React from "react";
import useInventory from "../../hooks/useInventory";
import Card from "../design/Card/Card";
import { Link4 } from "../design/Link/Link";
import { H1 } from "../design/Title/Title";

const Inventories = () => {
  const [inventory] = useInventory();
  const inventories = inventory.slice(0, 6);

  return (
    <section className="container mx-auto">
      <div className="section-header flex justify-between items-center">
        <H1 className="mt-16">Inventory</H1>
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

export default Inventories;
