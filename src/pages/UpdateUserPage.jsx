import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { useContext, useEffect, useState } from "react";

const UpdateUserPage = () => {
  const { userId } = useParams();

  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    age: 0,
    civilStatus: "single",
    events: [],
    dog: "",
  };

  const [data, setData] = useState(initialValues);
  const { fetchWithToken } = useContext(AuthContext);
  const navigate = useNavigate();

  const fetchOneUser = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/users/${userId}`,
      );

      if (response.ok) {
        const userData = await response.json();
        setData(userData);
      }
    } catch (error) {
      console.log("Something went wrong ", error);
    }
  };

  useEffect(() => {
    fetchOneUser();
  }, [userId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const statusOptions = [
    { value: "single", label: "Single" },
    { value: "married", label: "Married" },
    { value: "just for fun", label: "Just For Fun" },
  ];

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetchWithToken(`/users/${userId}`, "PUT", {
        data,
      });
      if (response.status === 200) {
        navigate(`/users/${userId}`);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex justify-center h-screen items-center mb-6">
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="firstName"
          >
            First Name
            <input
              type="text"
              name="firstName"
              required
              value={data.firstName}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Last Name
            <input
              type="text"
              name="lastName"
              required
              value={data.lastName}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Email
            <input
              type="email"
              name="email"
              required
              value={data.email}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Password
            <input
              type="password"
              name="password"
              required
              value={data.password}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Age
            <input
              type="number"
              name="age"
              required
              value={data.age}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Status
            <select
              name="civilStatus"
              value={data.civilStatus}
              onChange={handleChange}
              required
            >
              {statusOptions.map((option) => (
                <option key={option.label} value={option.value}>
                  {option.value}
                </option>
              ))}
            </select>
          </label>
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          type="submit"
        >
          {" "}
          Update User
        </button>
      </form>
    </div>
  );
};

export default UpdateUserPage;
