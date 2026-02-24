import { ReactNode } from "react";

const Card = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return <section className={`glass-lg rounded-2xl p-12 text-center space-y-6 shadow-lg  ${className}`}>{children}</section>;
};

export default Card;
