import React from 'react';

const Card = ({ item }) => {
  const { _id, name, img, description, price, quantity, supplier } = item;

  return <div>{name}</div>;
};

export default Card;
