import {useContext, useState} from "react";
import {useNavigate} from "react-router-dom";
import {useForm} from "react-hook-form";
import {AuthContext} from "../../context/AuthContext.jsx";
import {faEye} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import SignInForm from "./SignInForm.jsx";
import RegistrationForm from "./RegistrationForm.jsx";

const eyeIcon = <FontAwesomeIcon icon={faEye}/>;
const AuthForm = ({isLogin = false}) => {
    const {register, handleSubmit, formState: {errors}, setValue} = useForm();
    const navigate = useNavigate();
    const {saveToken} = useContext(AuthContext);
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        const currentYear = new Date().getFullYear();
        const year = e.target.value.split("-")[0];
        const age = currentYear - year;
        if (age < 18) {
            setError("You are under 18");
        } else {
            setError(null);
        }
    };

    const onSubmit = async (data) => {
        if (error) return;
        try {
            const response = await fetch(
                `${import.meta.env.VITE_API_URL}/auth/${isLogin ? "login" : "signup"}`,
                {
                    method: "POST",
                    headers: {"Content-Type": "application/json"},
                    body: JSON.stringify(data),
                }
            );

            if (response.status === 201) {
                navigate("/login");
            }

            if (response.status === 200) {
                const parsed = await response.json();
                console.log(parsed);
                saveToken(parsed.token);
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="w-full max-w-xs">
            {isLogin ? <RegistrationForm/> : <SignInForm/>}
        </div>
    );
};

export default AuthForm;
