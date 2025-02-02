import Title from "./ui/Title";
import Card from "./ui/Card";
import { motion } from "framer-motion";
import { IMAGE } from "@/constant/image";

const Motto3 = () => {
  const variants = {
    init: {},
    animate: {
      transition: { staggerChildren: 0.7 }, // 후딜레이, 선딜레이 초
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
      whileInView={"animate"} // 화면에 들어올 시
      viewport={{ amount: 0.8, once: true }} // 스크롤 시 화면 50%가 기준, 한번만
    >
      <div className="w-full max-w-screen-xl m-auto text-center text-3xl leading-relaxed">
        <motion.div variants={boxVariant}>
          <Card />
        </motion.div>
        <motion.div variants={boxVariant}>
          <Title />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Motto3;
