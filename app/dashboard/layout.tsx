import Logo from "@/components/globals/Logo";
import DashboardMenu from "@/components/pages/dashboard/DashboardMenu";

const dashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="w-full max-w-[1800px] m-auto mt-10 flex gap-10 p-10 ">
      <div className="bg-white h-[80vh] flex flex-col items-start justify-between w-1/4 shadow-lg rounded-2xl p-5">
        <Logo height={50} isShowTitle width={50} />
        <DashboardMenu />
      </div>
      <div>{children}</div>
    </section>
  );
};

export default dashboardLayout;
