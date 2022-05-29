import { useEffect, useState } from "react";

const useInventory = (id) => {
  const [inventory, setInventory] = useState([]);

  let uri = `https://inventoryish.herokuapp.com/inventory`;

  if (id) {
    uri = `https://inventoryish.herokuapp.com/inventory/${id}`;
  }

  useEffect(() => {
    fetch(uri)
      .then((res) => res.json())
      .then((data) => setInventory(data));
  }, []);

  return [inventory, setInventory];
};

export default useInventory;
