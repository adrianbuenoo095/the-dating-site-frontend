import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext.jsx";
const DogForm = () => {
  const initialValues = {
    name: "",
    picture: "",
    age: 0,
    breed: "",
    user: "",
    civilStatus: "",
    size: "",
  };

  const [data, setData] = useState(initialValues);
  const { fetchWithToken } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  console.log(data);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const dogToCreate = data;
    console.log("Dog to Create:", dogToCreate);
    try {
      const response = await fetchWithToken("/dogs", "POST", dogToCreate);
      if (response.status === 201) {
        const dog = await response.json();
        console.log(dog);
        navigate(`/dogs/${dog._id}`);
      } else {
        console.log("Something went wrong");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="w-full max-w-xs">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Name
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700
          leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="name"
              required
              value={data.name}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Picture
            <input
              className="shadow appearance-none border rounded
          w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="picture"
              placeholder="picture"
              required
              value={data.picture}
              onChange={handleChange}
            />
          </label>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Age
            <input
              className="shadow appearance-none border rounded
          w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="number"
              name="age"
              placeholder="age"
              required
              value={data.age}
              onChange={handleChange}
            />
          </label>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Breed
            <input
              className="shadow appearance-none border rounded
          w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="Schema"
              name="breed"
              placeholder="breed"
              required
              value={data.breed}
              onChange={handleChange}
            />
          </label>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            User
            <input
              className="shadow appearance-none border rounded
          w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="Schema"
              name="user"
              placeholder="user"
              required
              value={data.user}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Status
            <input
              className="shadow appearance-none border rounded
          w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="civilStatus"
              placeholder="status"
              required
              value={data.civilStatus}
              onChange={handleChange}
            />
          </label>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Size
            <input
              className="shadow appearance-none border rounded
          w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="size"
              placeholder="size"
              required
              value={data.size}
              onChange={handleChange}
            />
          </label>
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          type="submit"
        >
          Create Dog
        </button>
      </form>
    </div>
  );
};

export default DogForm;
