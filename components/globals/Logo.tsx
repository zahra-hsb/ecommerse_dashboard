import Image from "next/image";
import logo from "@/public/Logo/logo.svg";

const Logo = ({
  isShowTitle = false,
  width,
  height,
  className,
}: {
  isShowTitle: boolean;
  width: number;
  height: number;
  className?: string;
}) => {
  return (
    <>
      <div
        className={`flex font-bold gap-3 items-center justify-start ${className}`}
      >
        <Image src={logo} alt="" width={width} height={height} />
        {isShowTitle && <p>داشبورد Z DEV</p>}
      </div>
    </>
  );
};

export default Logo;
