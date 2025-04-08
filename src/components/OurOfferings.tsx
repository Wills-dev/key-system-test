import { motion } from "framer-motion";

import { subheadingVariants } from "../anim";
import CustomButton from "./CustomButton";

const OurOfferings = () => {
  const services = [
    {
      service: [
        {
          serve: "Core banking services",
          extraColor: "from-[#0A3440E3] to-[#05071EA6]",
        },
        {
          serve: "Staff augmentation solutions",
          extraColor: "from-[#0D400AE3] to-[#05071EA6]",
        },
        {
          serve: "Business Intelligence",
          extraColor: "from-[#400A0AE3] to-[#05071EA6]",
        },
      ],
    },
    {
      service: [
        {
          serve: "Digital Banking & financial inclusion",
          extraColor: "from-[#0A0E40E3] to-[#05071EA6]",
        },
        {
          serve: "Internal audit solutions",
          extraColor: "from-[#40330AE3] to-[#05071EA6]",
        },
        {
          serve: "KeySystem software testing",
          extraColor: "from-[#3CA3BAE3] to-[#05071EA6]",
        },
      ],
    },
    {
      service: [
        {
          serve: "Online/mobile lending solution",
          extraColor: "from-[#400A3AE3] to-[#05071EA1]",
        },
        {
          serve: "Data warehouse",
          extraColor: "from-[#4A8C2BE3] to-[#05071EA6]",
        },
        {
          serve: "Cybersecurity Solutions",
          extraColor: "from-[#6012CEB8] to-[#05071EA6]",
        },
      ],
    },
  ];

  const offerStyle =
    "relative max-w-[230px] w-full min-w-[230px] px-6 py-4 text-center text-white border-[#DCAEC2] border-t-[1px] border-r-[1px] border-l-[1px] border-b-0 rounded-full overflow-hidden group flex flex-col justify-center items-center gap-1 h-[135px] bg-gradient-to-b";

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" },
    }),
  };

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

      <div className="py-16">
        <div className="2xl:container 2xl:mx-auto xl:px-[6rem] lg:px-[4rem] sm:px-[2rem] px-3">
          <div className="flex gap-10 max-md:gap-20 w-full flex-wrap justify-between max-lg:flex-col">
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
                          src="/src/assets/icons/arrow-pointer.svg"
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
