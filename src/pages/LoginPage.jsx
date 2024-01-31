import AuthForm from "../components/AuthForm";
import Navbar from "../components/NavBar";

const LoginPage = () => {
    return (
        <>
            <Navbar/>
            <div className="flex justify-center h-screen items-center mb-6">
                <AuthForm isLogin/>
            </div>
        </>
    );
};

export default LoginPage;
