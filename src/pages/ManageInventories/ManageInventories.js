import React from "react";
import { H1 } from "../../components/design/Title/Title";
import useInventory from "../../hooks/useInventory";

const ManageInventories = () => {
  const [inventory, setInventory] = useInventory();

  const deleteItem = (id) => {
    fetch(`http://localhost:4000/inventory/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) =>
        data.success ? alert("Successfully deleted!") : data.result
      );
    const newInventory = inventory.filter((item) => item._id !== id);
    setInventory(newInventory);
  };

  return (
    <div className="container mx-auto">
      <H1 className="mt-16">Manage Inventories</H1>

      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Description</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {inventory.map((row, i) => (
              <tr key={row._id}>
                <th>{i + 1}</th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={row.img} alt={row.name} />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{row.name}</div>
                      <div className="text-sm opacity-50">
                        {"Supplier: " + row.supplier}
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  {row.description}
                  <br />
                  <span className="badge badge-ghost badge-sm">
                    {`Price: $${row.price}`}
                  </span>
                  <span className="badge badge-ghost badge-sm">
                    {`Stock: ${row.quantity}`}
                  </span>
                </td>
                <td>
                  <button className="btn" onClick={() => deleteItem(row._id)}>
                    Delete Item
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
          {/* <!-- foot --> */}
          <tfoot>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th></th>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default ManageInventories;