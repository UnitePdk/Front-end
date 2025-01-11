type InputProps = {
  placeholder: string;
  func: (input: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({ placeholder, func }: InputProps) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      onChange={func}
      className="border-none"
    />
  );
};

export default Input;
