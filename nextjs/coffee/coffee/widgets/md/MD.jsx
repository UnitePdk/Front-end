import Title from "./ui/Title";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { constants } from "./data/constant";
import MDCard from "./ui/MDCard";

const MD = () => {
  return (
    <section className="w-full max-w-screen-xl m-auto pt-10">
      <Title />
      <Swiper
        spaceBetween={50}
        modules={[Navigation]}
        slidesPerView={4}
        navigation={true}
        loop={true}
      >
        {constants.mdCards.map((v, i) => (
          <SwiperSlide key={i}>
            <MDCard {...v} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default MD;
