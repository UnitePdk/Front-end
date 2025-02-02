import HeaderNavItem from "./HeaderNavItem";

const HeaderNav = () => {
  return (
    <ul className="flex items-center gap-16">
      <HeaderNavItem href={"/menu"} label={"menu"} />
      <HeaderNavItem href={"/story"} label={"story"} />
      <HeaderNavItem href={"/store"} label={"store"} />
    </ul>
  );
};

export default HeaderNav;
