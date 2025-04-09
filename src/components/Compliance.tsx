import { motion } from "framer-motion";

import { compliances } from "../constants";
import { subheadingVariants } from "../anim";
import { SectionTitle } from "./SectionTitle";

import CustomButton from "./CustomButton";

const Compliance = () => {
  return (
    <section className="bg-[#050617] sm:py-20 py-8">
      {" "}
      <div className="2xl:container 2xl:mx-auto xl:px-[6rem] lg:px-[4rem] sm:px-[2rem] px-3 flex flex-col items-center justify-center ">
        <div className="max-w-2xl space-y-4 flex flex-col items-center justify-center">
          <SectionTitle title=" Compliance Certifications/ Standards We Specialize In" />
          <motion.p
            variants={subheadingVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="text-center sm:text-xl text-lg text-[#D2D2D2] leading-relaxed pt-8"
          >
            Elevate Your Organization's Security Posture with Our
            Compliance/Standards Consulting Services
          </motion.p>
          <div className="pt-2">
            <CustomButton
              extraStyle="bg-gradient-to-r from-navy-blue via-light-blue to-navy-blue border-[1px] border-light-blue sm:py-6 sm:px-10 px-4 py-2"
              title="Contact Us"
              handleClick={() => {}}
            />
          </div>
        </div>
        <div className="flex gap-10 flex-wrap mt-12 bg-white py-8  px-4 w-full rounded-lg">
          {compliances?.map((compliance, index) => (
            <img
              src={compliance}
              key={index}
              alt="compliance"
              className="object-contain"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Compliance;
