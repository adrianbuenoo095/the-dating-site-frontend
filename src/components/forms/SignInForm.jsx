import {useForm} from "react-hook-form";
import {useState} from "react";
import {faEye} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const eyeIcon = <FontAwesomeIcon icon={faEye}/>;
const SignInForm = () => {
    const {register, formState: {errors}} = useForm();
    const [passwordShown, setPasswordShown] = useState(false);
    const togglePasswordVisibility = () => {
        setPasswordShown(!passwordShown);
    }
    return (
        <div className="form">
            <form action="">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Email
                        <input
                            className="shadow appearance-none border rounded
                w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="email"
                            name="email"
                            {...register("email", {required: true})}
                        />
                    </label>
                    {errors.email && <span className="text-red-500">Email is required</span>}
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Password
                        <div className="relative">
                            <input
                                className="shadow appearance-none border rounded
                w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                type={passwordShown ? "text" : "password"}
                                name="password"
                                {...register("password", {required: true})}
                            />
                            <i className="absolute right-0 top-0 mt-2 mr-3"
                               onClick={togglePasswordVisibility}>{eyeIcon}</i>
                        </div>
                    </label>
                    {errors.password && <span className="text-red-500">Password is required</span>}
                </div>
            </form>
        </div>
    );
};

export default SignInForm;