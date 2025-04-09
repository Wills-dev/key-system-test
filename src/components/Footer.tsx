import { quickLinks, services1, services2, socials } from "../constants";

const Footer = () => {
  return (
    <footer className="sm:py-20 py-8">
      <div className="2xl:container 2xl:mx-auto xl:px-[6rem] lg:px-[4rem] sm:px-[2rem] px-3  space-y-10">
        <div className="grid grid-cols-7 gap-6">
          <div className="md:col-span-2 sm:col-span-3 col-span-7">
            <img
              src="/logo.svg"
              alt="logo"
              className="object-contain  max-md:max-w-32"
            />
          </div>
          <div className="md:col-span-5 sm:col-span-4 col-span-7 grid grid-cols-2 gap-6">
            <h5 className="col-span-2 md:text-3xl sm:text-xl text-lg font-bold text-[#bbbbbb] ">
              Services
            </h5>
            <ul className="lg:col-span-1 col-span-2 space-y-4 text-[#CFCFCF] sm:text-lg">
              {services1.map((service) => (
                <li key={service}>{service}</li>
              ))}
            </ul>
            <ul className="lg:col-span-1 col-span-2 space-y-4 text-[#CFCFCF] sm:text-lg">
              {services2.map((service) => (
                <li key={service}>{service}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="grid grid-cols-7 gap-6">
          <div className="md:col-span-2 sm:col-span-3 col-span-7 h-full">
            <div className="flex flex-col justify-between gap-10 h-full">
              <div className="space-y-6">
                <h5 className=" md:text-3xl sm:text-xl text-lg font-bold text-[#bbbbbb] ">
                  QUICK LINKS
                </h5>
                <ul className=" space-y-4 text-[#CFCFCF] sm:text-lg">
                  {quickLinks.map((link) => (
                    <li key={link}>{link}</li>
                  ))}
                </ul>
              </div>
              <div className="flex items-center gap-10">
                {socials.map((social) => (
                  <img key={social} src={social} alt="social" className="" />
                ))}
              </div>
            </div>
          </div>
          <div className="md:col-span-5 sm:col-span-4 col-span-7 grid grid-cols-6 gap-6">
            <h5 className="col-span-6 md:text-3xl text-xl font-bold text-[#bbbbbb] ">
              Contact
            </h5>
            <div className="lg:col-span-3 col-span-6 space-y-4 text-[#CFCFCF] ">
              <h6 className="sm:text-xl text-lg font-bold">Nigeria</h6>
              <p className="sm:text-lg">
                55G Adebisi Omotola Close, Off Samuel Adedoyin Street, Victoria
                Island
              </p>
            </div>
            <div className="lg:col-span-3 col-span-6 space-y-4 text-[#CFCFCF] ">
              <h6 className="sm:text-xl text-lg font-bold">United Kingdom</h6>
              <p className="sm:text-lg">
                39 Kenyon Lane, Off Moston Lane,Moston, Manchester, United
                Kingdom, M40 9JG
              </p>
            </div>
            <div className="lg:col-span-2 md:col-span-3 col-span-6 space-y-4 text-[#CFCFCF] ">
              <h6 className="sm:text-xl text-lg font-bold">United Kingdom</h6>
              <p className="sm:text-lg">Tel: +44 161 948 1444</p>
            </div>
            <div className="lg:col-span-2 md:col-span-3 col-span-6 space-y-4 text-[#CFCFCF] ">
              <h6 className="sm:text-xl text-lg font-bold">
                United Arab Emirates
              </h6>
              <p className="sm:text-lg">Tel: +971 50 423 8817</p>
            </div>
            <div className="lg:col-span-2 md:col-span-3 col-span-6 space-y-4 text-[#CFCFCF] ">
              <h6 className="sm:text-xl text-lg font-bold">Canada</h6>
              <p className="sm:text-lg">Tel: +1 647 977 1435</p>
            </div>
            <div className="lg:col-span-2 md:col-span-3 col-span-6 space-y-4 text-[#CFCFCF] ">
              <h6 className="sm:text-xl text-lg font-bold">Nigeria</h6>
              <p className="sm:text-lg">Tel: +234 818 444 1404</p>
            </div>
            <div className="lg:col-span-2 md:col-span-3 col-span-6 space-y-4 text-[#CFCFCF] ">
              <h6 className="sm:text-xl text-lg font-bold">Email</h6>
              <p className="sm:text-lg">enquiries@keysystemltd.com</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
