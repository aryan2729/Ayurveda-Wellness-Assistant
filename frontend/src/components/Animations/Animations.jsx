import React from "react";
import { motion } from "framer-motion";

function Animations() {
  return (
    <motion.div
      animate={{ rotate: 0 }}
      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
    >
      <img src="public/animations/Animation.gif" alt="Rotating Chakra" />
    </motion.div>
  );
}

export default Animations;