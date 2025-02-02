import ScaleUp from "@/shared/ScaleUp";
import Link from "next/link";

const MenuCard = ({ imageSrc, title, id }) => {
  return (
    <Link href={`/menu/${id}`}>
      <article className="bg-slate-200 w-full p-4 flex flex-col items-center">
        <ScaleUp>
          <img src={imageSrc} alt="" />
        </ScaleUp>
        <strong>{title}</strong>
      </article>
    </Link>
  );
};

export default MenuCard;
