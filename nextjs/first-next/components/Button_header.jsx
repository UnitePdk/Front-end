import Link from "next/link";

const Button_header = ({ text }) => {
  return (
    <div className="p-8 font-bold">
      <Link href="">{text}</Link>
    </div>
  );
};

export default Button_header;
