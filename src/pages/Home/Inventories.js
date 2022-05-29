import React from "react";
import useInventory from "../../hooks/useInventory";
import Card from "../../components/design/Card/Card";
import { Link4 } from "../../components/design/Link/Link";
import { H1 } from "../../components/design/Title/Title";

const Inventories = () => {
  const [inventory] = useInventory();
  const inventories = inventory.slice(0, 6);

  return (
    <section className="container mx-auto">
      <div className="section-header flex justify-between items-center">
        <H1 className="mt-16">Inventory</H1>
        <Link4
          className="mt-16"
          to="/manageinventory"
          text="Manage Inventories"
        />
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
