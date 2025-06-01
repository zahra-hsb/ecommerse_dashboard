import TextInput from "@/components/globals/TextInput"


const LoginForm = () => {
    return (
        <>
            <TextInput type="text" id="username" label="نام کاربری" placeholder="@z_dev" dir="ltr" />
            <TextInput type="password" id="password" label="رمز عبور" placeholder="********" dir="ltr" />
        </>
    )
}

export default LoginForm