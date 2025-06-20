import { ReactNode } from "react";

const RoutLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <div>{children}</div>
    </>
  );
};

export default RoutLayout;
