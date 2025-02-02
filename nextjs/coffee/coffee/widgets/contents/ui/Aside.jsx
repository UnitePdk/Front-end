import { constants } from "../data/constants";
import AsideCard from "./AsideCard";
import AsideTitle from "./AsideTitle";

const Aside = () => {
  return (
    <aside style={{ backgroundColor: "#C8E2E0" }} className="flex-1 p-5 w-fit">
      <AsideTitle />
      {constants.asideCards.map((v, i) => (
        <AsideCard key={i} {...v} />
      ))}
    </aside>
  );
};

export default Aside;
