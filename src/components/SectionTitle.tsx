import { motion } from "framer-motion";

import { subheadingVariants } from "../anim";

export const SectionTitle = ({ title }: { title: string }) => {
  return (
    <motion.h3
      variants={subheadingVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="md:text-5xl sm:text-3xl text-xl font-bold text-center"
    >
      {title}
    </motion.h3>
  );
};
