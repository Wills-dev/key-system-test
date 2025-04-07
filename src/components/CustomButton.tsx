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
      className={`flex items-center gap-1 w-fit rounded-full px-6  text-white font-bold font-family-Poppins ${extraStyle}`}
      onClick={handleClick}
    >
      {icon && icon}
      <span>{title}</span>
    </button>
  );
};

export default CustomButton;
