const ShadowCard = ({ extraStyle }: { extraStyle: string }) => {
  return (
    <div
      className={`absolute top-1/2 -translate-y-1/2 h-full w-[2px] ${extraStyle}`}
    />
  );
};

export default ShadowCard;
