import {useState} from "react";

export const UseAuthFormSubmission = (url, isLogin, saveToken, data) => {
    const [error, setError] = useState("");
    const authFormSubmit = async () => {
        try {
            const response = await fetch(url,
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
            setError(error)
            console.log(error);
        }
    }
    return {error}
};

