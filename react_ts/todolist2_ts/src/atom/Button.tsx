import { IconType } from "react-icons";

type ButtonProps = {
  Icon: IconType;
  css: string;
  func: (todo: string) => void;
};

const Button = ({ Icon, css, func }: ButtonProps) => {
  return (
    <button className={css} onClick={() => func}>
      <Icon />
    </button>
  );
};

export default Button;
