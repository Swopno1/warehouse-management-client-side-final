import React from 'react';

const navItems = [
  { _id: 1, name: 'Home', url: '/home' },
  { _id: 2, name: 'Inventory', url: '/inventory' },
  { _id: 3, name: 'Add', url: '/add' },
];

const Nav = () => {
  return (
    <nav className='nav'>
      <ul className='flex'>
        {navItems.map((el) => (
          <li className='mr-16' key={el._id}>
            {el.name}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
