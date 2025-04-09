import { motion } from "framer-motion";

import { subheadingVariants } from "../anim";
import { SectionTitle } from "./SectionTitle";
import { ourPartners } from "../constants";

const OurPartners = () => {
  return (
    <section className="sm:py-20 py-8">
      {" "}
      <div className="2xl:container 2xl:mx-auto xl:px-[6rem] lg:px-[4rem] sm:px-[2rem] px-3 flex flex-col items-center justify-center ">
        <div className="max-w-2xl space-y-4 flex flex-col items-center justify-center">
          <SectionTitle title="Our Partners" />
          <motion.p
            variants={subheadingVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="text-center sm:text-xl text-lg text-[#D2D2D2] leading-relaxed pt-8"
          >
            Creating a Synergy with global brands
          </motion.p>
        </div>
      </div>
      <div className="bg-[#080a24] py-6 mt-12">
        <div className="2xl:container 2xl:mx-auto xl:px-[6rem] lg:px-[4rem] sm:px-[2rem] px-3 ">
          <div className="flex justify-center gap-6 flex-wrap  w-full rounded-lg">
            {ourPartners?.map((logo, i) => (
              <img
                key={i}
                src={logo}
                alt={`Partner Logo ${i}`}
                className="w-[220px]  h-auto object-contain"
                loading="lazy"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurPartners;
