import { useState } from "react";

import { motion } from "framer-motion";

import { partners } from "../constants";

const PartnersSlider = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  return (
    <section className="py-10">
      {" "}
      <div className="relative overflow-hidden">
        <motion.div
          className="flex"
          animate={{
            x: ["0%", "-100%"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {/* Doubled the logos for seamless looping */}
          {[...partners, ...partners].map((logo, index) => (
            <motion.div
              key={index}
              className="px-4 flex-shrink-0 rounded-lg"
              whileHover={{ scale: 1.1 }}
              initial={{ filter: "blur(0px)" }}
              animate={{
                filter:
                  hoveredIndex === null || hoveredIndex === index
                    ? "blur(0px)"
                    : "blur(4px)",
              }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
            >
              <img
                src={logo}
                alt={`Partner Logo ${index}`}
                className="sm:h-24 h-16 object-contain"
                loading="lazy"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PartnersSlider;
