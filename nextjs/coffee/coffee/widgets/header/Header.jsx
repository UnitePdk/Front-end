import HeaderLogo from "./ui/HeaderLogo";
import HeaderNav from "./ui/HeaderNav";

const Header = () => {
  return (
    <header className="w-screen py-5">
      <nav className="w-full max-w-screen-xl m-auto flex items-center justify-between">
        <HeaderLogo />
        <HeaderNav />
      </nav>
    </header>
  );
};

export default Header;
