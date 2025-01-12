import { useEffect, useState } from "react";
import Image from "../atom/Image";
import Title from "../atom/Title";
import Description from "../atom/Description";
import Badge from "../atom/Badge";
import Button from "../atom/Button";

type Data = {
  title: string;
  description: string;
  ingredients: string[];
  image: string;
  id: number;
};

const CoffeeCard = () => {
  const [data, setData] = useState<Data[]>([]);
  const getData = async () => {
    const resp = await fetch("https://api.sampleapis.com/coffee/hot");
    const json: Data[] = await resp.json();
    setData(json);
  };

  useEffect(() => {
    getData();
  }, []);

  const sort = () => {
    //const ingredients_sorted=...new Set(data)
    console.log("sx");
  };

  if (data.length == 0) return <div>loading...</div>;

  const coffee = data[2];

  return (
    <div
      className="flex flex-col items-center bg-slate-100"
      style={{ width: "250px", border: "solid 2px grey" }}
    >
      <Image link={coffee.image} />
      <Title title={coffee.title} />
      <Description description={coffee.description} />
      <div className="flex gap-2 p-1">
        {coffee.ingredients.map((v, i) => (
          <Badge text={v} /*bgc="blue"*/ />
        ))}
      </div>
      <Button text="테스트용" func={sort} />
    </div>
  );
};
export default CoffeeCard;
