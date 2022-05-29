const TextLarge = ({ text, className }) => {
  return <p className={`font-bold text-base  ${className}`}>{text}</p>;
};

const TextMedium = ({ children, className }) => {
  return <p className={`font-normal text-sm ${className}`}>{children}</p>;
};

const TextSmall = ({ text, className }) => {
  return (
    <p className={`font-normal text-xs leading-5 py-[10px] ${className}`}>
      {text}
    </p>
  );
};

export { TextLarge, TextMedium, TextSmall };
