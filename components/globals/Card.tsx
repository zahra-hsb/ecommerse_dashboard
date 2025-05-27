import { ReactNode } from "react";

const Card = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return <section className={`bg-white p-10 rounded-3xl shadow ${className}`}>{children}</section>;
};

export default Card;
