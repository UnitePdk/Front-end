"use client";

import { animate, motion } from "framer-motion";

const Sample = () => {
  const variants = {
    init: {},
    animate: {
      transition: { staggerChildren: 1 },
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
      <motion.div
        variants={boxVariant}
        style={{ width: "100px", height: "100px", border: "1px solid black" }}
      ></motion.div>
      <motion.div
        variants={boxVariant}
        style={{ width: "100px", height: "100px", border: "1px solid black" }}
      ></motion.div>
      <motion.div
        variants={boxVariant}
        style={{ width: "100px", height: "100px", border: "1px solid black" }}
      ></motion.div>
    </motion.div>
  );
};

export default Sample;
