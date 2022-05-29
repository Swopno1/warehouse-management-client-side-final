import { useEffect, useState } from "react";

const useInventory = (id) => {
  const [inventory, setInventory] = useState([]);

  let uri = `http://localhost:4000/inventory`;

  if (id) {
    uri = `http://localhost:4000/inventory/${id}`;
  }

  useEffect(() => {
    fetch(uri)
      .then((res) => res.json())
      .then((data) => setInventory(data));
  }, []);

  return [inventory, setInventory];
};

export default useInventory;
