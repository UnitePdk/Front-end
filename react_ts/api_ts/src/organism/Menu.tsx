import CoffeeCard from "../molecule/CoffeeCard";
import Coffee, { CoffeeProps } from "../molecule/Coffee";

export type MenuProps = {
  coffees: CoffeeProps[];
};

const Menu = ({ coffees }: MenuProps) => {
  return (
    <section className="grid grid-cols-4 max-w-5xl">
      {coffees.map((v) => (
        <Coffee
          link={v.link}
          title={v.title}
          description={v.description}
          badges={v.badges}
          // badges={[
          //   { text: "Espresso", bgc: "blue" },
          //   { text: "Ångad mjölk", bgc: "red" },
          //   { text: "Foam", bgc: "green" },
          // ]}
        />
      ))}
    </section>
  );
};

export default Menu;
