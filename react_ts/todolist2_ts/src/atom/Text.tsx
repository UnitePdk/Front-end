type TextProps = {
  text: string;
};

const Text = ({ text }: TextProps) => {
  return (
    <span className="text-4xl text-white font-extrabold m-5 text-center">
      {text}
    </span>
  );
};

export default Text;
