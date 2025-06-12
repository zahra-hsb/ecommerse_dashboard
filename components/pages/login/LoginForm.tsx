import SubmitButton from "@/components/globals/SubmitButton";
import TextInput from "@/components/globals/TextInput";
import Link from "next/link";
import { FaUser } from "react-icons/fa6";
import { RiLockPasswordFill } from "react-icons/ri";

const LoginForm = () => {
  return (
    <div className="flex flex-col w-full items-center gap-5">
      <TextInput
        type="text"
        id="username"
        label="نام کاربری"
        placeholder="z_dev"
        dir="ltr"
        icon={
          <>
            <FaUser className="absolute top-3 left-5" />
          </>
        }
      />
      <TextInput
        type="password"
        id="password"
        label="رمز عبور"
        placeholder="●●●●●●●●"
        dir="ltr"
        icon={
          <>
            <RiLockPasswordFill className="absolute top-3 left-5" />
          </>
        }
      />
      <div className="flex flex-col w-full items-center gap-2">
        <SubmitButton text="ورود" />
        <Link href={"#"} className="text-sm underline">
          فراموشی رمز عبور
        </Link>
      </div>
    </div>
  );
};

export default LoginForm;
