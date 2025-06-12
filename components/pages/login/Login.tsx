import Card from "@/components/globals/Card"
import Logo from "@/components/globals/Logo"
import LoginForm from "./LoginForm"

const Login = () => {
    return (
    <>
        <Card className="w-full sm:w-1/2 lg:!w-1/4 flex flex-col items-center justify-center gap-10 py-16">
            <Logo isShowTitle={false} width={70} height={70} />
            <h3 className="font-bold text-xl">ورود به پنل</h3>
            <LoginForm />
        </Card>
    </>
    )
}

export default Login