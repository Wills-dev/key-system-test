import { motion } from "framer-motion";

import { subheadingVariants } from "../anim";
import CustomButton from "./CustomButton";

const OurOfferings = () => {
  const services = [
    "Core banking services",
    "Digital Banking & financial inclusion",
    "Online/mobile lending solution",
    "Staff augmentation solutions",
    "Internal audit solutions",
    "Data warehouse",
    "Business Intelligence",
    "KeySystem software testing",
    "Cybersecurity Solutions",
  ];

  // Variants for card animation (fade-in and slide-up when in view)
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" },
    }),
  };

  // Variants for the cursor "go" animation
  const cursorVariants = {
    initial: { scale: 1, rotate: 0 },
    hover: { scale: 1.2, rotate: 15, transition: { duration: 0.3 } },
  };

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
      <div className="flex justify-between gap-10">
        <div className="">
          <div className="py-16">
            <div className="2xl:container 2xl:mx-auto xl:px-[6rem] lg:px-[4rem] sm:px-[2rem] px-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full">
                {services.map((service, index) => (
                  <motion.div
                    key={index}
                    className="relative max-w-[230px] w-full px-6 py-4 text-center text-white border-[#DCAEC2] border-t-[1px] border-r-[1px] border-l-[1px] border-b-0 rounded-full overflow-hidden group flex flex-col justify-center items-center gap-1"
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    custom={index}
                  >
                    {/* Service Text */}
                    <p className="md:text-xl sm:text-lg">{service}</p>

                    {/* Cursor Icon */}
                    <motion.div
                      className=""
                      variants={cursorVariants}
                      initial="initial"
                      whileHover="hover"
                    >
                      <img
                        src="/src/assets/icons/arrow-pointer.svg"
                        alt="arrow"
                        className="object-contain"
                      />
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurOfferings;
