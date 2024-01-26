import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
const AuthForm = ({ isLogin = false }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [status, setStatus] = useState("");
  const statusOptions = ["Single", "Married", "Just for fun"];
  /* const [errorMsg, setErrorMsg] = useState()
   */
  const navigate = useNavigate();

  const { saveToken } = useContext(AuthContext);

  const handleEmail = (event) => setEmail(event.target.value);
  const handlePassword = (event) => setPassword(event.target.value);
  const handleFirstName = (event) => setFirstName(event.target.value);
  const handleLastName = (event) => setLastName(event.target.value);
  const handleAge = (event) => setAge(event.target.value);
  const handleStatus = (event) => setStatus(event.target.value);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const reqBody = isLogin
      ? { email, password }
      : { email, password, firstName, lastName, age, status }; // The fields for signin

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/auth/${isLogin ? "login" : "signup"}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(reqBody),
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
    <form onSubmit={handleSubmit}>
      <label>
        Email
        <input type="email" required value={email} onChange={handleEmail} />
      </label>

      <label>
        Password
        <input
          type="password"
          required
          value={password}
          onChange={handlePassword}
        />
      </label>

      {!isLogin && (
        <>
          <label>
            First Name
            <input
              type="text"
              required
              value={firstName}
              onChange={handleFirstName}
            />
          </label>
          <label>
            Last Name
            <input
              type="text"
              required
              value={lastName}
              onChange={handleLastName}
            />
          </label>
          <label>
            Age
            <input type="number" required value={age} onChange={handleAge} />
          </label>
          <label>
            Status
            <select value={status} onChange={handleStatus} required>
              {statusOptions.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </label>
        </>
      )}

      <button type="submit">{isLogin ? "Login" : "Signup"}</button>
    </form>
  );
};

export default AuthForm;
