import { ReactNode } from "react";

const Button = ({
  children,
  onClick,
  disabled = false,
  className
}: {
  children: ReactNode;
  disabled?: boolean;
  className?: string;
  onClick: () => void;
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`text-white bg-black p-2 w-full rounded-xl mt-5 cursor-pointer hover:bg-black/80 duration-150 active:bg-white shadow border-black active:text-black active:border-2 border-2 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
