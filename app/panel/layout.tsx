// import Logo from "@/components/globals/Logo";
import DashboardMenu from "@/components/pages/dashboard/DashboardMenu";
import ThemeToggle from "@/components/globals/ThemeToggle";
import { ReactNode } from "react";
import SiteLogo from "@/components/globals/SiteLogo";

const PanelLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      {/* Theme Toggle - Top Right */}
      <div className="fixed top-4 right-4 z-50">
        <ThemeToggle />
      </div>
      
      <section className="w-full max-w-[1800px] m-auto flex gap-10 p-10 ">
        <div className="bg-white dark:bg-slate-900 sticky top-0 h-[80vh] flex flex-col items-start justify-between w-1/4 transition-colors duration-300 glass-lg rounded-2xl p-5 md:p-12 text-center space-y-6 shadow-lg">
          {/* <Logo height={50} isShowTitle width={50} /> */}
          <SiteLogo />
          <DashboardMenu />
        </div>
        <div className="w-full">{children}</div>
      </section>
    </>
  );
};

export default PanelLayout;
