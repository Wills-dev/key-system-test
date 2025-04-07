import { motion } from "framer-motion";

import TrustUsImg from "/src/assets/images/TrustUs.png";

import { imageVariants, subheadingVariants } from "../anim";

const WhyChooseUs = () => {
  return (
    <section className="py-28 bg-trust-us-bg">
      <div className="2xl:container 2xl:mx-auto xl:px-[6rem] lg:px-[4rem] sm:px-[2rem] px-3 flex justify-center ">
        <div className="max-w-5xl space-y-4">
          <h3 className="md:text-5xl sm:text-3xl text-xl font-bold text-center">
            Why we are your Trusted Consultant
          </h3>
          <p className="md:text-xl sm:text-lg text-center text-[#BBBBBB]">
            Empowering Businesses with Cutting-edge Technology
          </p>
          <p className="text-center md:text-3xl sm:text-xl text-lg text-[#D2D2D2] leading-relaxed pt-8">
            Excellence isn’t a goal, it’s our DNA; our relentless pursuit of
            excellence is the driving force behind our success. Excellence is
            our legacy, and we are proud to carry it forward.{" "}
          </p>
        </div>
      </div>
      <div className="bg-radial from-deep-blue  to-dark-navy">
        <div className="2xl:container 2xl:mx-auto xl:px-[6rem] lg:px-[4rem] sm:px-[2rem] px-3 flex justify-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            className="max-w-5xl space-y-8 pt-16"
          >
            <motion.p
              variants={subheadingVariants}
              className="text-[#D2D2D2] md:text-xl sm:text-lg text-center"
            >
              Watch the video to see how we are innovating to keep businesses on
              top of their games.
            </motion.p>
            <div className="w-full">
              <motion.img
                src={TrustUsImg}
                alt="Hero illustration"
                className="w-full h-auto"
                loading="lazy"
                variants={imageVariants}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
