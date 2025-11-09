"use client";
import { createSession } from "@/app/actions/auth/createSession";
import { login } from "@/app/actions/auth/login";
import SubmitButton from "@/components/globals/SubmitButton";
import TextInput from "@/components/globals/TextInput";
import { LoginFormType } from "@/utils/schemas/types";
import { LoginSchema } from "@/utils/schemas/zodSchemas";
import { userStore } from "@/utils/stores/userStore";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { FaUser } from "react-icons/fa6";
import { RiLockPasswordFill } from "react-icons/ri";
import { toast } from "react-toastify";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    // watch,
    // formState: { errors },
  } = useForm<LoginFormType>();
  const { setUserInfo, setToken } = userStore();
  const router = useRouter();
  /**
   * call the login server action and go to dashboard
   * @param value login payload
   */
  const onSubmit = async (value: LoginFormType) => {
    const isValidValue = LoginSchema.safeParse(value);
    if (!isValidValue.success) {
      isValidValue.error.issues.map((iss) => {
        toast.error(iss.message);
      });
    } else {
      const responseOfLogin = await login(value);
      if (responseOfLogin?.data && responseOfLogin?.ok) {
        const responseOfCreateSession = await createSession(
          JSON.parse(responseOfLogin?.data ? responseOfLogin?.data : "")
        );
        if (responseOfCreateSession.ok) {
          setUserInfo(JSON.parse(responseOfLogin?.data));
          setToken(
            responseOfCreateSession?.data?.token
              ? responseOfCreateSession?.data?.token
              : ""
          );
          toast.success(responseOfCreateSession.message);
          router.replace("/panel/dashboard")
        } else toast.error(responseOfCreateSession.message);
      } else toast.error(responseOfLogin.message);
    }
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
