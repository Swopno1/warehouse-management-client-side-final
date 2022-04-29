import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../logo.svg';
import Nav from '../Nav/Nav';
import { Cart, Search, User } from '../../components/design/Icons/Icons';

const Header = () => {
  return (
    <header>
      <div className='container mx-auto flex justify-between items-center my-10'>
        <div className='main-logo h-10'>
          <Link to='/home'>
            <img className='s h-full' src={logo} alt='logo: Inventoryish' />
          </Link>
        </div>

        <div className='flex items-center'>
          <Nav />
          <div className='separator h-7 border-r mr-3'></div>
          <div className='user-icon flex items-center'>
            <Search />
            <Cart />
            <User />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
