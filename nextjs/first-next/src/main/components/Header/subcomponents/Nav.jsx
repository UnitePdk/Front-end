import ToLink from "../../../components/Header/subcomponents/ToLink";
import { link } from "../constant";
import { style } from "../style";

const Nav = () => {
  return (
    <div className={style.nav}>
      {link.map((v) => (
        <div>
          <ToLink url={v.url} text={v.text} />
        </div>
      ))}
    </div>
  );
};

export default Nav;
