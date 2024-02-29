import {useContext, useState} from "react";
import {useNavigate} from "react-router-dom";
import {useForm} from "react-hook-form";
import {AuthContext} from "../../context/AuthContext.jsx";
import {faEye} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Button} from "../common/Button.jsx";
import SignInForm from "./SignInForm.jsx";

const eyeIcon = <FontAwesomeIcon icon={faEye}/>;
const AuthForm = ({isLogin = false}) => {
    const {register, handleSubmit, formState: {errors}, setValue} = useForm();
    const navigate = useNavigate();
    const {saveToken} = useContext(AuthContext);
    const [error, setError] = useState(null);

    const formTitle = !isLogin ? <h1>Sign up</h1> : <h1>Log in</h1>;
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
            <form
                className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
                onSubmit={handleSubmit(onSubmit)}
            >
                {formTitle}
                {!isLogin && (
                    <>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                First Name
                                <input
                                    className="shadow appearance-none border rounded
                    w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    type="text"
                                    name="firstName"
                                    {...register("firstName", {required: true})}
                                />
                            </label>
                            {errors.firstName && <span className="text-red-500">First Name is required</span>}
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                Last Name
                                <input
                                    className="shadow appearance-none border rounded
                    w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    type="text"
                                    name="lastName"
                                    {...register("lastName", {required: true})}
                                />
                            </label>
                            {errors.lastName && <span className="text-red-500">Last Name is required</span>}
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                Birthday
                                <input
                                    className="shadow appearance-none border rounded
                    w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    type="date"
                                    name="birthday"
                                    onChange={(e) => {
                                        setValue("birthday", e.target.value);
                                        handleChange(e);
                                    }}
                                />
                            </label>
                            {errors.birthday && <span className="text-red-500">Birthday is required</span>}
                            {error && <span className="text-red-500">{error}</span>}
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                Civil Status
                                <select
                                    className="shadow appearance-none border rounded
                    w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    name="civilStatus"
                                    {...register("civilStatus", {required: true})}
                                >
                                    <option value="">Select Civil Status</option>
                                    <option value="single">Single</option>
                                    <option value="married">Married</option>
                                    <option value="just for fun">Just For Fun</option>
                                </select>
                            </label>
                            {errors.civilStatus && <span className="text-red-500">Civil Status is required</span>}
                        </div>
                    </>
                )}
                <SignInForm/>
                <Button>
                    {formTitle}
                </Button>
            </form>
        </div>
    );
};

export default AuthForm;
