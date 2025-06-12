"use client";
import SubmitButton from "@/components/globals/SubmitButton";
import TextInput from "@/components/globals/TextInput";
import { Inputs, LoginFormType } from "@/utils/schemas/types";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { FaUser } from "react-icons/fa6";
import { RiLockPasswordFill } from "react-icons/ri";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<LoginFormType>();

  const onSubmit = (value: LoginFormType) => {
    console.log(value);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col w-full items-center gap-5"
    >
      <TextInput
        required
        type="text"
        name="username"
        id="username"
        label="نام کاربری"
        placeholder="z_dev"
        dir="ltr"
        icon={
          <>
            <FaUser className="absolute top-3 left-5" />
          </>
        }
        register={register}
      />
      <TextInput
        required
        type="password"
        id="password"
        name="password"
        label="رمز عبور"
        placeholder="●●●●●●●●"
        dir="ltr"
        icon={
          <>
            <RiLockPasswordFill className="absolute top-3 left-5" />
          </>
        }
        register={register}
      />
      <div className="flex flex-col w-full items-center gap-2">
        <SubmitButton text="ورود" />
        <Link href={"#"} className="text-sm underline hover:text-black/80">
          فراموشی رمز عبور
        </Link>
      </div>
    </form>
  );
};

export default LoginForm;
