import AuthForm from "../components/forms/AuthForm.jsx";
import Navbar from "../components/common/Navbar.jsx";

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
