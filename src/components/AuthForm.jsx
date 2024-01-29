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
      <div className="w-full max-w-xs">
    <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Email
          <input type="email" required value={email} onChange={handleEmail}/>
        </label>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Password
          <input
              type="password"
              required
              value={password}
              onChange={handlePassword}
          />
        </label>
      </div>


      {!isLogin && (
          <>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              First Name
              <input
                  type="text"
                  required
                  value={firstName}
                  onChange={handleFirstName}
            />
          </label>
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Last Name
            <input
              type="text"
              required
              value={lastName}
              onChange={handleLastName}
            />
          </label>
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Age
            <input type="number" required value={age} onChange={handleAge} />
          </label>
          <label className="block text-gray-700 text-sm font-bold mb-2">
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
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit">{isLogin ? "Login" : "Signup"}</button>
    </form>
      </div>

  );
};

export default AuthForm;
