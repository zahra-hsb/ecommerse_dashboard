import Card from "@/components/globals/Card"
import Logo from "@/components/globals/Logo"

const Login = () => {
    return (
    <>
        <Card className="!w-1/4 flex flex-col items-center justify-center gap-10">
            <Logo isShowTitle={false} />
            <h3 className="font-bold">ورود به پنل</h3>
            {/* <LoginForm /> */}
        </Card>
    </>
    )
}

export default Login