import { MSG } from "@/constant/msg";
import Banner from "@/widgets/banner/Banner";
import Map from "@/widgets/map/Map";

const Page = () => {
  return (
    <div>
      <Banner {...MSG.BANNER.STORE} />
      <Map />
    </div>
  );
};

export default Page;
