import ToLink from "./subcomponents/ToLink";
import Nav from "./subcomponents/Nav";
import { style } from "./style";

const Header = () => {
  return (
    <header className={style.header}>
      <div>
        <ToLink url="/" text="ITKOREA 커피" />
      </div>
      <Nav />
    </header>
  );
};

export default Header;
