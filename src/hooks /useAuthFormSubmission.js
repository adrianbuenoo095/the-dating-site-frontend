import {useState} from "react";

export const UseAuthFormSubmission = (isLogin, navigate, saveToken) => {
    const [error, setError] = useState();
    const useAuthFormSubmit = async (data) => {
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
    }


};

