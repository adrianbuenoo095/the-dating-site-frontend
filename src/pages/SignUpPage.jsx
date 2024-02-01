import AuthForm from "../components/AuthForm";
import Navbar from "../components/NavBar";
const SignUpPage = () => {
  return (
    <>
      <Navbar />
      <div className="flex justify-center h-screen items-center mb-6">
        <AuthForm />
      </div>
    </>
  );
};

export default SignUpPage;
