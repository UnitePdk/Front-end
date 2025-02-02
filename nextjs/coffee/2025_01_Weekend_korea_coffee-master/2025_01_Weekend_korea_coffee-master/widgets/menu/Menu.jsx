import MenuCard from "./ui/MenuCard";

const Menu = async () => {
  const data = await fetch("https://fake-coffee-api.vercel.app/api").then(
    (res) => res.json()
  );

  return (
    <section className="grid grid-cols-4 gap-12 w-full max-w-screen-xl m-auto mt-20">
      {data.map((v, i) => (
        <MenuCard key={i} id={v.id} imageSrc={v.image_url} title={v.name} />
      ))}
    </section>
  );
};

export default Menu;
