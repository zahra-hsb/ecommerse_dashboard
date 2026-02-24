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
      className={`text-white bg-primary p-2 w-full rounded-xl mt-5 cursor-pointer hover:bg-primary/80 duration-150 active:bg-white shadow border-primary active:text-primary active:border-2 border-2 dark:text-gray-800 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
