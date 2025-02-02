"use client";
import { motion } from "framer-motion";

const ScaleUp = ({ children }) => {
  const divVaraints = {
    normal: { scale: 1 },
    bigger: { scale: 1.5 },
  };

  return (
    <motion.div variants={divVaraints} initial="normal" animate="bigger">
      {children}
    </motion.div>
  );
};

export default ScaleUp;
