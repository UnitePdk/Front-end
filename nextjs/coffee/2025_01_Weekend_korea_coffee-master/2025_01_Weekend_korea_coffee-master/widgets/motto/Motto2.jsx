import { motion } from "framer-motion";
import Motto2_card from "./Motto2_card";

const Motto2 = () => {
  const variants = {
    init: {},
    animate: {
      transition: { staggerChildren: 0.7, delayChildren: 0.3 }, // 후딜레이, 선딜레이 초
    },
  };

  const boxVariant = {
    init: { opacity: 0 },
    animate: { opacity: 1 },
  };

  return (
    <motion.section
      className="w-screen p-72"
      variants={variants}
      initial="init"
      animate={"animate"}
      whileInView={"animate"} // 화면에 들어올 시
      viewport={{ amount: 0.5, once: true }} // 스크롤 시 화면 50%가 기준, 한번만
    >
      <div
        className="w-3/4 max-w-screen-xl m-auto text-center text-3xl"
        style={{ fontFamily: "NanumSquareNeoExtraBold" }}
      >
        <div className="text-left">
          <h3 className="text-sm m-3">미션</h3>
          <h3 className="text-4xl m-2">
            스타일 커머스와 체인 플랫폼을 <br />
            글로벌로 확장합니다
          </h3>
        </div>
        <div className="flex">
          <Motto2_card
            title="스타일 커머스"
            content="다양한 취향을 발견할 수 있는 커머스 플랫폼"
          />
          <Motto2_card
            title="체인 플랫폼"
            content="나만의 상품을 쉽게 제작하고 유통할 수 있는 세상"
          />
        </div>
      </div>
    </motion.section>
  );
};

export default Motto2;
