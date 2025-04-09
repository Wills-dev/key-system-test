import Blue from "../assets/images/blue.svg";
import CustomButton from "./CustomButton";

const Ready = () => {
  return (
    <section className="sm:py-20 py-8 relative">
      <div className="absolute left-0 top-0 h-full w-[20%] bg-gradient-to-b from-dark-navy via-deep-blue to-dark-navy" />
      <div className="2xl:container 2xl:mx-auto xl:px-[6rem] lg:px-[4rem] sm:px-[2rem] px-3">
        <div className="border-[#4169E19E] border-t-[1px] border-r-[1px] border-l-[0.5px] border-b-0 rounded-lg w-full p-10 max-sm:px-4 max-sm:py-6 relative bg-[#030517] ">
          <div className="max-w-3xl space-y-6 relative z-10">
            <h6 className="font-bold md:text-5xl sm:text-3xl text-xl">
              Ready to get started?
            </h6>
            <p className="text-[#BBBBBB] sm:text-lg">Shoot us a Mail</p>
            <p className="sm:text-xl text-lg">
              Join numerous corporations, organizations, and businesses as they
              scale their teams, tap into new market opportunities and build
              innovative products with KeySystem Technology
            </p>
            <p className="sm:text-xl text-lg">
              Join thousands of students who are ready to learn new skills or
              take their career to the next level by enrolling in one of our
              training programs today.
            </p>
            <div className="">
              <CustomButton
                extraStyle="bg-gradient-to-r from-navy-blue via-light-blue to-navy-blue border-[1px] border-light-blue sm:py-6 sm:px-10 px-4 py-2"
                title="Send Us a Mail Now"
                handleClick={() => {}}
              />
            </div>
          </div>
          <div className="absolute right-0 top-0 h-full z-0">
            <img
              src={Blue}
              alt="blue"
              className="w-auto h-full object-contain z-0"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ready;
