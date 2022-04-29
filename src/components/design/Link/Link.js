import React from 'react';
import { NavLink } from 'react-router-dom';

const Link = ({ to, text, className }) => {
  return (
    <NavLink
      className={`font-medium text-base text-dark uppercase hover:text-dark-gray ${className}`}
      style={({ isActive }) => {
        return {
          'border-bottom': isActive ? '2px solid #000000' : 'none',
        };
      }}
      to={to}
    >
      {text}
    </NavLink>
  );
};

export default Link;
