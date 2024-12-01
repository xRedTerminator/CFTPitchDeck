interface HeaderButtonProps {
  text: string;
  href: string;
  className?: string;
}

const HeaderButton: React.FC<HeaderButtonProps> = ({
  text,
  href,
  className = "",
}) => {
  return (
    <a
      className={`rounded-full border border-solid border-black/[.2] dark:border-white/[.2] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] hover:border-transparent dark:hover:text-black text-xs sm:text-sm h-8 sm:h-10 px-3 sm:px-4 ${className}`}
      href={`#${href}`}
    >
      {text}
    </a>
  );
};

export default HeaderButton;
