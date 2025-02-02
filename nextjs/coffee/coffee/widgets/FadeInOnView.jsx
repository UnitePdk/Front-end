import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const FadeInOnView = ({ children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-50% 0px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

export default FadeInOnView;
