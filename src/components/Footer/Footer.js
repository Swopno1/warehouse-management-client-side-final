import React from 'react';
import { Link2 } from '../design/Link/Link';

const Footer = () => {
  return (
    <footer>
      <div className='container mx-auto mb-20'>
        <div className='flex justify-between items-center'>
          <div className='footer-links'>
            <Link2 className='mr-10' to='/blog' text='Contact' />
            <Link2 className='mr-10' to='/terms' text='Terms of services' />
            <Link2
              className='mr-10'
              to='/shipping'
              text='Shipping and returns'
            />
          </div>
        </div>
        <div className='flex justify-between items-end'></div>
      </div>
    </footer>
  );
};

export default Footer;
