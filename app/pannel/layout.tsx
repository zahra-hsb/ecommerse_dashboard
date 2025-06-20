import Logo from "@/components/globals/Logo";
import DashboardMenu from "@/components/pages/dashboard/DashboardMenu";
import { ReactNode } from "react";

const PanelLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <section className="w-full max-w-[1800px] m-auto mt-10 flex gap-10 p-10 ">
        <div className="bg-white h-[80vh] flex flex-col items-start justify-between w-1/4 shadow-sm rounded-2xl p-5">
          <Logo height={50} isShowTitle width={50} />
          <DashboardMenu />
        </div>
        <div className="w-full">{children}</div>
      </section>
    </>
  );
};

export default PanelLayout;
