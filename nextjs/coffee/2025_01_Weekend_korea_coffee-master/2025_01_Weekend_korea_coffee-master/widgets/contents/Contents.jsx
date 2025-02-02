import Aside from "./ui/Aside";
import CardList from "./ui/CardList";
import Title from "./ui/Title";

const Contents = () => {
  return (
    <section className="w-full max-w-screen-xl m-auto pt-10">
      <Title />
      <div className="flex gap-20">
        <CardList />
        <Aside />
      </div>
    </section>
  );
};

export default Contents;
