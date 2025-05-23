import { motion } from "framer-motion";

import CustomButton from "./CustomButton";
import Arrow from "/src/assets/icons/arrow-pointer.svg";

import { services } from "../constants";
import { cardVariants, cursorVariants, subheadingVariants } from "../anim";

const OurOfferings = () => {
  const offerStyle =
    "relative max-w-[230px] w-full min-w-[230px] px-6 py-4 text-center text-white border-[#DCAEC2] border-t-[1px] border-r-[1px] border-l-[1px] border-b-0 rounded-full overflow-hidden group flex flex-col justify-center items-center gap-1 h-[135px] bg-gradient-to-b";

  return (
    <section className="2xl:container 2xl:mx-auto xl:px-[6rem] lg:px-[4rem] sm:px-[2rem] px-3 pb-28">
      <div className="flex justify-center">
        <div className="space-y-6 max-w-2xl flex flex-col items-center">
          <motion.h3
            variants={subheadingVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="md:text-5xl sm:text-3xl text-xl font-bold text-center"
          >
            Our Offerings
          </motion.h3>
          <motion.p
            variants={subheadingVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="md:text-xl sm:text-lg text-center tracking-wide"
          >
            Leverage KeySystem’s cutting-edge expertise to transform your
            business. Our tailored software and cybersecurity solutions drive
            efficiency, security, and growth. We empower businesses to thrive in
            the digital age
          </motion.p>
          <div className="pt-2">
            <CustomButton
              extraStyle="bg-gradient-to-r from-navy-blue via-light-blue to-navy-blue border-[1px] border-light-blue sm:py-6 sm:px-10 px-4 py-2"
              title="Learn More"
              handleClick={() => {}}
            />
          </div>
        </div>
      </div>

      <div className="py-16">
        <div className="2xl:container 2xl:mx-auto xl:px-[6rem] lg:px-[4rem] sm:px-[2rem] px-3">
          <div className="flex gap-10 w-full flex-wrap lg:justify-between justify-center">
            {services?.map((service, i) => (
              <div
                key={i}
                className={`flex flex-col gap-10 ${i === 1 ? "lg:mt-16" : ""}`}
              >
                {service.service.map((service, index) => (
                  <motion.div
                    key={index}
                    className={`flex justify-center ${index === 2 ? "" : ""}`}
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    custom={index}
                  >
                    <div className={`${offerStyle} ${service?.extraColor}`}>
                      {/* Service Text */}
                      <p className="md:text-xl sm:text-lg">{service?.serve}</p>

                      {/* Cursor Icon */}
                      <motion.div
                        className=""
                        variants={cursorVariants}
                        initial="initial"
                        whileHover="hover"
                      >
                        <img
                          src={Arrow}
                          alt="arrow"
                          className="object-contain w-4 h-4"
                        />
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurOfferings;
