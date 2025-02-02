import Banner from "@/widgets/banner/Banner";
import Motto from "@/widgets/motto/Motto";
import { MSG } from "@/constant/msg";
import { motion } from "framer-motion";

const StoryFadeIn = () => {
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
    <motion.div
      variants={variants}
      initial="init"
      animate={"animate"}
      viewport={{ amount: 1 }}
    >
      <motion.div variants={boxVariant}>
        <Banner {...MSG.BANNER.STORY} />
      </motion.div>
      <motion.div variants={boxVariant}>
        <Motto />
      </motion.div>
    </motion.div>
  );
};

export default StoryFadeIn;
