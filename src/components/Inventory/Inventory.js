import React from 'react';
import { H1 } from '../design/Title/Title';

const inventories = [
  {
    _id: 2,
    name: 'Bread',
    img: '',
    description: '',
    price: '',
    quantity: '',
    supplier: 'Amir',
  },
];

const Inventory = () => {
  return (
    <section className='container mx-auto'>
      <H1 className='mt-16' text='Inventory' />
      {/* <div>
        {inventories.map((el) => (
          <Card item={el} />
        ))}
      </div> */}
    </section>
  );
};

export default Inventory;
