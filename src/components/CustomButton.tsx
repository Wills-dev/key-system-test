interface CustomButtonProps {
  extraStyle: string;
  title: string;
  handleClick: () => void;
  icon?: React.ReactNode;
}

const CustomButton = ({
  extraStyle,
  title,
  handleClick,
  icon,
}: CustomButtonProps) => {
  return (
    <button
      className={`relative flex items-center gap-1 w-fit rounded-full text-white font-bold font-family-Poppins cursor-pointer overflow-hidden before:absolute before:inset-0 before:bg-deep-blue before:scale-x-0 before:origin-left before:transition-transform before:duration-300 before:ease-in-out hover:before:scale-x-100 max-sm:text-sm ${extraStyle}`}
      onClick={handleClick}
    >
      <span className="z-10"> {icon && icon}</span>
      <span className="z-10">{title}</span>
    </button>
  );
};

export default CustomButton;
