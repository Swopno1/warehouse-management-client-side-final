const H1 = ({ text, className }) => {
  return (
    <h1 className={`font-medium text-[33px] text-dark ${className}`}>{text}</h1>
  );
};

const H2 = ({ text, className }) => {
  return (
    <h2 className={`font-normal text-[26px] leading-9 text-dark ${className}`}>
      {text}
    </h2>
  );
};

const H3 = ({ text, className }) => {
  return (
    <h3 className={`font-normal text-xl text-dark ${className}`}>{text}</h3>
  );
};

const H4 = ({ text, className }) => {
  return (
    <h4 className={`font-medium text-xl leading-5 text-dark ${className}`}>
      {text}
    </h4>
  );
};

const H5 = ({ text, className }) => {
  return (
    <h5
      className={`font-normal text-base leading-7 text-dark py-[10px] ${className}`}
    >
      {text}
    </h5>
  );
};

export { H1, H2, H3, H4, H5 };
