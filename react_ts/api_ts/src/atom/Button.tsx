type ButtonProps = {
  text: string;
  func: () => void;
};

const Button = ({ text, func }: ButtonProps) => {
  return <button onClick={func}>{text}</button>;
};

export default Button;
