import Image from "next/image";
import logo from "@/public/Logo/logo.svg";

const Logo = ({ isShowTitle = false, className }: { isShowTitle: boolean; className?: string }) => {
  return (
    <>
      <div className={`flex font-bold gap-3 items-center justify-start ${className}`}>
        <Image src={logo} alt="" />
        {isShowTitle && <p>داشبورد Z DEV</p>}
      </div>
    </>
  );
};

export default Logo;
