import { constants } from "../data/constants";
import ContentsCard from "./ContentsCard";

const CardList = () => {
  return (
    <ul className="grid grid-cols-3 gap-20 w-fit flex-3">
      {constants.cards.map((v, i) => (
        <ContentsCard key={i} {...v} />
      ))}
    </ul>
  );
};

export default CardList;
