<<<<<<< HEAD
import React, { useEffect, useState } from "react";

const useInventory = () => {
  const [inventories, setInventories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/inventory")
      .then((res) => res.json())
      .then((data) => setInventories(data));
  }, []);

  return inventories;
=======
import { useEffect, useState } from 'react';

const useInventory = () => {
  const [inventory, setInventory] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/inventory')
      .then((res) => res.json())
      .then((data) => setInventory(data));
  }, []);

  return [inventory, setInventory];
>>>>>>> 42e32349108b97ba3de9172475e559b2e4c00296
};

export default useInventory;
