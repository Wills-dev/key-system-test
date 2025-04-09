import { motion } from "framer-motion";

import { subheadingVariants } from "../anim";
import { SectionTitle } from "./SectionTitle";
import { partners } from "../constants";

const TrustUs = () => {
  return (
    <section className="bg-[#050617] sm:py-20 py-8">
      {" "}
      <div className="2xl:container 2xl:mx-auto xl:px-[6rem] lg:px-[4rem] sm:px-[2rem] px-3 flex flex-col items-center justify-center ">
        <div className="max-w-2xl space-y-4 flex flex-col items-center justify-center">
          <SectionTitle title="They Trust Us" />
          <motion.p
            variants={subheadingVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="text-center sm:text-xl text-lg text-[#D2D2D2] leading-relaxed pt-8"
          >
            And so can you
          </motion.p>
        </div>
        <div className="flex justify-center gap-10 flex-wrap mt-12  py-8  px-4 w-full rounded-lg">
          {partners?.map((logo, i) => (
            <img
              src={logo}
              alt={`Partner Logo ${i}`}
              className="sm:h-24 h-16 object-contain"
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustUs;
