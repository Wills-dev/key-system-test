import { motion } from "framer-motion";

import { subheadingVariants } from "../anim";
import { SectionTitle } from "./SectionTitle";

import Process from "../assets/images/process/process.svg";
import Process1 from "../assets/images/process/process1.svg";
import Process2 from "../assets/images/process/process2.svg";

const OurProcess = () => {
  return (
    <section className="bg-[#050617] sm:py-20 py-8">
      {" "}
      <div className="2xl:container 2xl:mx-auto xl:px-[6rem] lg:px-[4rem] sm:px-[2rem] px-3 flex flex-col items-center justify-center ">
        <div className="max-w-2xl space-y-4 flex flex-col items-center justify-center">
          <SectionTitle title="Our Process" />
          <motion.p
            variants={subheadingVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="text-center sm:text-xl text-lg text-[#D2D2D2] leading-relaxed pt-8"
          >
            At KeySystem, we leave you with a lasting impression
          </motion.p>
        </div>
        <div className="grid grid-cols-2 gap-10 mt-12  py-8  px-4 w-full rounded-lg">
          <div className="col-span-2  bg-gradient-to-r from-[#04050B]  to-[#181B4D] flex items-center justify-between max-md:flex-col  lg:gap-16 md:gap-10 gap-4 rounded-lg">
            <div className="flex-1 space-y-4  p-6">
              <h6 className="md:text-4xl sm:text-2xl text-xl font-bold">
                Strategic Consultation
              </h6>
              <p className="md:text-xl sm:text-lg">
                We kick off with a strategic consultation to understand your
                brand, goals, and audience
              </p>
            </div>
            <div className="lg:flex-1 flex justify-end items-end w-full">
              <img
                src={Process}
                alt="process image"
                className="md:h-full  object-contain"
                loading="lazy"
              />
            </div>
          </div>
          <div className="lg:col-span-1 col-span-2  bg-gradient-to-r from-[#04050B]  to-[#181B4D] flex items-center justify-between max-sm:flex-col max-sm:gap-4 rounded-lg relative min-h-[302px]">
            <div className="flex-1 md:max-w-[80%] w-full space-y-4  p-6 z-10">
              <h6 className="md:text-4xl sm:text-2xl text-xl font-bold">
                Collaboration
              </h6>
              <p className="md:text-xl sm:text-lg">
                At KeySystem, we collaborate closely to ensure the end result
                meets your expectations and makes you happy
              </p>
            </div>
            <div className="absolute right-0 bottom-0">
              <img
                src={Process1}
                alt="process image"
                className="object-contain"
                loading="lazy"
              />
            </div>
          </div>
          <div className="lg:col-span-1 col-span-2  bg-gradient-to-r from-[#04050B]  to-[#181B4D] flex items-center justify-between max-sm:flex-col max-sm:gap-4 rounded-lg relative min-h-[302px]">
            <div className="flex-1 md:max-w-[80%] w-full space-y-4  p-6 z-10">
              <h6 className="md:text-4xl sm:text-2xl text-xl font-bold">
                Delivery
              </h6>
              <p className="md:text-xl sm:text-lg">
                Our delivery rate is 100%; our clients deserve nothing less.
              </p>
            </div>
            <div className="absolute right-0 bottom-0">
              <img
                src={Process2}
                alt="process image"
                className="object-contain"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurProcess;
