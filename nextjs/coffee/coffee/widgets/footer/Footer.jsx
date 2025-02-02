import Link from "next/link";
import { FaYoutube, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="mt-10 w-screen py-10 border-t-2 border-slate-600 ">
      <section className="w-full max-w-screen-xl m-auto  flex items-center justify-between">
        <Link href={"/"}>
          <strong>Korea Coffee</strong>
        </Link>
        <div className="flex flex-col">
          <span>인천광역시 부평구 부평로 </span>
          <span>Copyright© by KoreaCoffee, Allr rights reserved</span>
        </div>
        <div className="flex items-center gap-3">
          <FaFacebook />
          <FaYoutube />
        </div>
      </section>
    </footer>
  );
};

export default Footer;
