import { useEffect, useState } from "react";
import Menu, { MenuProps } from "./organism/Menu";
import { CoffeeProps } from "./molecule/Coffee";

type Data = {
  title: string;
  description: string;
  ingredients: string[];
  image: string;
  id: number;
};

function App() {
  const [data, setData] = useState<CoffeeProps[]>([]);
  const getData = async () => {
    const resp = await fetch("https://api.sampleapis.com/coffee/hot");
    const json = await resp.json();

    const newData = json.map((v: Data) => ({
      ...v,
      link: v.image,
      badges: v.ingredients.map((i) => ({
        text: i,
        color: "blue",
      })),
    }));

    setData(newData);
  };

  useEffect(() => {
    getData();
  }, []);

  const testData: CoffeeProps[] = [
    {
      title: "Black Coffee",
      description:
        "Svart kaffe är så enkelt som det kan bli med malda kaffebönor dränkta i hett vatten, serverat varmt. Och om du vill låta fancy kan du kalla svart kaffe med sitt rätta namn: café noir.",
      badges: [{ text: "Coffee" }],
      link: "https://images.unsplash.com/photo-1494314671902-399b18174975?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Black Coffee",
      description:
        "Svart kaffe är så enkelt som det kan bli med malda kaffebönor dränkta i hett vatten, serverat varmt. Och om du vill låta fancy kan du kalla svart kaffe med sitt rätta namn: café noir.",
      badges: [{ text: "Coffee" }],
      link: "https://images.unsplash.com/photo-1494314671902-399b18174975?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <div className="App">
      <Menu coffees={data} />
    </div>
  );
}

export default App;
