import { motion } from "framer-motion";

const MegaMenu: React.FC = () => {
  return (
    <motion.div
      className="absolute top-full left-0 w-full bg-gradient-to-r from-deep-blue to-dark-navy shadow-lg border-t border-light-blue z-40 h-96"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
    >
      <div className="2xl:container 2xl:mx-auto xl:px-[6rem] lg:px-[4rem] sm:px-[2rem] px-3 py-10 flex justify-between gap-8">
        <div>
          <h4 className="text-xl font-bold mb-3 text-[#CFCFCF]">
            Web Development
          </h4>
          <ul className="space-y-2 text-[#CFCFCF]">
            <li>
              <a href="#" className="hover:text-light-blue">
                React Apps
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-light-blue">
                Next.js Projects
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-light-blue">
                Landing Pages
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-xl font-bold mb-3 text-[#CFCFCF]">Design</h4>
          <ul className="space-y-2 text-[#CFCFCF]">
            <li>
              <a href="#" className="hover:text-light-blue">
                UI/UX Design
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-light-blue">
                Prototyping
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-light-blue">
                Figma to Code
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-xl font-bold mb-3 text-[#CFCFCF]">Consulting</h4>
          <ul className="space-y-2 text-[#CFCFCF]">
            <li>
              <a href="#" className="hover:text-light-blue">
                Product Strategy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-light-blue">
                Tech Stack Advice
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-light-blue">
                Start-up Planning
              </a>
            </li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default MegaMenu;
