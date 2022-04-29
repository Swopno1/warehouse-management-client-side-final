import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../logo.svg';
import Nav from '../Nav/Nav';

const Header = () => {
  return (
    <header>
      <div className='container mx-auto flex justify-between my-10'>
        <div className='main-logo h-10'>
          <Link to='/home'>
            <img className='s h-full' src={logo} alt='logo: Inventoryish' />
          </Link>
        </div>
        <div className='flex'>
          <Nav />
          <div className='user-icon'></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
