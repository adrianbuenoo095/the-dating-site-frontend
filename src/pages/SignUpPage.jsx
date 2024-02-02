import AuthForm from "../components/AuthForm";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer.jsx";
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
