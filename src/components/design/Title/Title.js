import React from "react";

const H1 = ({ className, children }) => {
  return (
    <h1 className={`font-medium text-[33px] text-dark ${className}`}>
      {children}
    </h1>
  );
};

const H2 = ({ children, className }) => {
  return (
    <h2 className={`font-normal text-[26px] leading-9 text-dark ${className}`}>
      {children}
    </h2>
  );
};

const H3 = ({ children, className }) => {
  return (
    <h3 className={`font-normal text-xl text-dark ${className}`}>{children}</h3>
  );
};

const H4 = ({ children, className }) => {
  return (
    <h4 className={`font-medium text-xl leading-5 text-dark ${className}`}>
      {children}
    </h4>
  );
};

const H5 = ({ children, className }) => {
  return (
    <h5
      className={`font-normal text-base leading-7 text-dark py-[10px] ${className}`}
    >
      {children}
    </h5>
  );
};

export { H1, H2, H3, H4, H5 };
