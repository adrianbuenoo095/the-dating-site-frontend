import AuthForm from "../../components/forms/AuthForm.jsx";
import Navbar from "../../components/common/Navbar.jsx";
import Footer from "../../components/common/Footer.jsx";
const SignUpPage = () => {
  return (
      <>
          <Navbar />
      <div className="flex justify-center h-screen items-center mb-6">
        <AuthForm />
      </div>
          <Footer/>
    </>
  );
};

export default SignUpPage;
