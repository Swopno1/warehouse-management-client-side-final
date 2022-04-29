const TextLarge = ({ text, className }) => {
  return <p className={`font-bold text-base  ${className}`}>{text}</p>;
};

const TextMedium = ({ text, className }) => {
  return <h2 className={`font-normal text-sm ${className}`}>{text}</h2>;
};

const TextSmall = ({ text, className }) => {
  return (
    <h2 className={`font-normal text-xs leading-5 py-[10px] ${className}`}>
      {text}
    </h2>
  );
};

export { TextLarge, TextMedium, TextSmall };
