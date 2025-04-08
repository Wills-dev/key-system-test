import { motion } from "framer-motion";

import { subheadingVariants } from "../anim";
import { SectionTitle } from "./SectionTitle";

import ShadowCard from "./ShadowCard";
import RepImg from "/src/assets/images/rep.svg";
import RepImg2 from "/src/assets/images/rep2.svg";

const WhatWeRepresent = () => {
  return (
    <section className="sm:py-28 py-8 bg-trust-us-bg">
      <div className="2xl:container 2xl:mx-auto xl:px-[6rem] lg:px-[4rem] sm:px-[2rem] px-3 flex flex-col items-center justify-center ">
        <div className="max-w-4xl space-y-4 flex flex-col items-center justify-center">
          <SectionTitle title=" What we Represent" />
          <motion.p
            variants={subheadingVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="md:text-xl sm:text-lg text-center text-[#BBBBBB] max-w-xl"
          >
            Our relentless pursuit of excellence is the driving force behind our
            success
          </motion.p>
          <motion.p
            variants={subheadingVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="text-center sm:text-xl text-lg text-[#D2D2D2] leading-relaxed pt-8"
          >
            Excellence isn’t a goal, it’s our DNA; our relentless pursuit of
            excellence is the driving force behind our success. Excellence is
            our legacy, and we are proud to carry it forward. Watch the video to
            see how we are innovating to keep businesses on top of their games.
          </motion.p>
        </div>
        <div className="flex gap-10 flex-wrap pt-12">
          <div className="flex-1 w-full min-w-[300px] bg-gradient-to-tr from-dark-navy via-dark-navy  to-deep-blue border-t-[1px] border-r-[1px] border-l-[1px] border-b-[1px] border-[#01B4DE] p-6 rounded-2xl space-y-4 relative">
            <ShadowCard extraStyle="-left-[1.8px] bg-[linear-gradient(to_bottom,transparent_0%,#05071E20_1%,#05071E40_10%,#05071E60_15%,#05071E80_20%,#05071E_30%,#05071E_40%,#05071E_60%,#05071E80_70%,#05071E40_80%,#05071E20_90%,transparent_100%)]" />
            <ShadowCard extraStyle="-right-[1.8px] bg-[linear-gradient(to_bottom,transparent_0%,#111A8920_1%,#111A8940_10%,#111A8960_15%,#111A8980_20%,#111A89_30%,#111A89_40%,#111A89_60%,#05071e80_70%,#05071e40_80%,#05071e10_90%,transparent_100%)]" />
            <div className="flex justify-center">
              <img src={RepImg} alt="arrow" className="object-contain" />
            </div>
            <h4 className="md:text-5xl text-3xl font-bold">Our Vision</h4>
            <p className="md:text-lg">
              To be the trusted partner for businesses seeking to leverage
              technology to improve decision-making, unlock new opportunities,
              and achieve transformative growth
            </p>
          </div>
          <div className="flex-1 w-full min-w-[300px] bg-gradient-to-tr from-dark-navy via-dark-navy  to-deep-blue border-t-[1px] border-r-[1px] border-l-[1px] border-b-[1px] border-[#01B4DE] p-6 rounded-2xl space-y-4 relative">
            <ShadowCard extraStyle="-left-[1.8px] bg-[linear-gradient(to_bottom,transparent_0%,#05071E20_1%,#05071E40_10%,#05071E60_15%,#05071E80_20%,#05071E_30%,#05071E_40%,#05071E_60%,#05071E80_70%,#05071E40_80%,#05071E20_90%,transparent_100%)]" />
            <ShadowCard extraStyle="-right-[1.8px] bg-[linear-gradient(to_bottom,transparent_0%,#111A8920_1%,#111A8940_10%,#111A8960_15%,#111A8980_20%,#111A89_30%,#111A89_40%,#111A89_60%,#05071e80_70%,#05071e40_80%,#05071e10_90%,transparent_100%)]" />
            <div className="flex justify-center">
              <img src={RepImg2} alt="arrow" className="object-contain" />
            </div>
            <h4 className="md:text-5xl text-3xl font-bold">Our Mission</h4>
            <p className="md:text-lg">
              We bridge the gap between technology and business, delivering
              customized ICT solutions that drive efficiency, growth, and
              competitive advantage.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeRepresent;
