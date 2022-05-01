import React from "react";
import { NavLink } from "react-router-dom";

const Link = ({ to, text, className }) => {
  return (
    <NavLink
      className={`font-medium text-base text-dark uppercase hover:text-dark-gray ${className}`}
      style={({ isActive }) => {
        return {
          borderBottom: isActive ? "2px solid #000000" : "none",
        };
      }}
      to={to}
    >
      {text}
    </NavLink>
  );
};

const Link2 = ({ to, text, className }) => {
  return (
    <NavLink
      className={`${className} text-dark-gray text-base uppercase hover:text-dark`}
      style={({ isActive }) => {
        return {
          color: isActive ? "#323232" : "",
        };
      }}
      to={to}
    >
      {text}
    </NavLink>
  );
};

const Link3 = ({ to, text, className }) => {
  return (
    <NavLink
      className={`text-dark text-base hover:text-dark-gray ${className}`}
      style={({ isActive }) => {
        return {
          color: isActive ? "#707070" : "",
        };
      }}
      to={to}
    >
      {text}
    </NavLink>
  );
};

const Link4 = ({ to, text, className }) => {
  return (
    <NavLink
      className={`text-accent text-xl font-bold hover:text-dark ${className}`}
      style={({ isActive }) => {
        return {
          color: isActive ? "#323232" : "",
        };
      }}
      to={to}
    >
      {text}
    </NavLink>
  );
};

export { Link, Link2, Link3, Link4 };
