import { motion } from "framer-motion";

import CustomButton from "./CustomButton";
import heroImage from "/src/assets/images/hero-img.svg";

import {
  imageVariants,
  subheadingVariants,
  welcomeVariants,
  wordVariants,
} from "../anim";

const headingText = "IT Consulting for Forward-thinking Businesses".split(" ");

const HeroSection = () => {
  return (
    <section className="w-full">
      <div className="sm:pt-20 pt-14 w-full bg-gradient-to-r from-dark-navy via-dark-navy  to-deep-blue font-family-Poppins">
        <div className="2xl:container 2xl:mx-auto xl:px-[6rem] lg:px-[4rem] sm:px-[2rem] px-3">
          <div className="flex justify-center w-full">
            <div className="max-w-4xl w-full flex flex-col items-center space-y-4">
              <div className="w-full flex flex-col items-center space-y-4 relative overflow-hidden ">
                <div className="max-w-md w-full h-full bg-grid-pattern absolute left-0 top-0 opacity-85 " />
                <motion.p
                  variants={welcomeVariants}
                  initial="hidden"
                  animate="visible"
                  className="md:text-lg max-sm:text-sm text-center w-fit bg-[#2E6D9C] rounded-full px-4 py-1 border-[1px] border-white z-10"
                >
                  Welcome to KeySystem
                </motion.p>
                <motion.h1
                  initial="hidden"
                  animate="visible"
                  className="text-center md:text-7xl sm:text-5xl text-3xl font-bold leading-tight tracking-wide z-10"
                >
                  {" "}
                  {headingText.map((word, index) => (
                    <motion.span
                      key={index}
                      className="inline-block mr-2"
                      variants={wordVariants}
                      custom={index}
                    >
                      {word}
                    </motion.span>
                  ))}
                </motion.h1>
                <motion.p
                  variants={subheadingVariants}
                  initial="hidden"
                  animate="visible"
                  className="md:text-3xl sm:text-xl text-center z-10"
                >
                  {" "}
                  Driving Digital Transformation, One Solution at a Time
                </motion.p>
              </div>
              <div className=" sm:py-16 py-10 relative w-full overflow-hidden">
                <div className="max-w-md w-full h-full bg-grid-pattern absolute -right-30 top-16 opacity-75 " />
                <div className="flex sm:gap-10 gap-4 justify-center z-10">
                  <CustomButton
                    extraStyle="bg-gradient-to-r from-navy-blue via-light-blue to-navy-blue border-[1px] border-light-blue sm:py-6 sm:px-10 px-4 py-2"
                    title="Get Started"
                    handleClick={() => {}}
                  />
                  <CustomButton
                    extraStyle="border-[1px] border-light-blue sm:py-6 sm:px-10 px-4 py-2 bg-dark-navy"
                    title="Learn More"
                    handleClick={() => {}}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full bg-gradient-to-tr from-dark-navy via-dark-navy  to-deep-blue pb-16">
          <div className="w-full min-w-full bg-hero-bg flex justify-center">
            <div className="2xl:container 2xl:mx-auto xl:px-[6rem] lg:px-[4rem] sm:px-[2rem] px-3">
              <div className="max-w-5xl w-full z-10">
                <motion.img
                  src={heroImage}
                  alt="Hero illustration"
                  className="w-full h-auto"
                  loading="lazy"
                  variants={imageVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
