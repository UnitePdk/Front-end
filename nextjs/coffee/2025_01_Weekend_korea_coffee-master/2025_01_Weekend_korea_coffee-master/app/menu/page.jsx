import Banner from "@/widgets/banner/Banner";
import Menu from "@/widgets/menu/Menu";
import { MSG } from "@/constant/msg";

const Page = () => {
  return (
    <main>
      <Banner {...MSG.BANNER.MENU} />
      <Menu />
    </main>
  );
};

export default Page;
