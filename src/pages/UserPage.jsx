import { Link, useNavigate, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import Navbar from "../components/Navbar.jsx";
import { AuthContext } from "../context/AuthContext.jsx";

const UserPage = () => {
    const {userId} = useParams();
    console.log(userId)
    const [user, setUser] = useState("");
    const {fetchWithToken} = useContext(AuthContext)
    const navigate = useNavigate();
    const fetchUser = async () => {
        try {
            const response = await fetch(
                `${import.meta.env.VITE_API_URL}/api/users/${userId}`
            );
            console.log(response)
            if (response.ok) {
                const userData = await response.json();
                setUser(userData);
            } else {
                console.log("Something went wrong");
            }
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        fetchUser();
    }, [userId]);

    const handleDelete = async () => {
        try {
            const response = await fetchWithToken(`/users/${userId}`, "DELETE");
            if (response.status === 204) {
                navigate("/users");
            }
        } catch (error) {
            console.log(error);

        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchUser();
  }, [userId]);

  const handleDelete = async () => {
    try {
      const response = await fetchWithToken(`/users/${userId}`, "DELETE");
      if (response.status === 204) {
        navigate("/users");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return user ? (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Navbar />
      <div className="bg-white shadow overflow-hidden sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <h1 className="text-2xl font-bold text-gray-900">User Details</h1>
        </div>
        <div className="border-t border-gray-200">
          <dl>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">First Name</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {user.firstName}
              </dd>
            </div>
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Last Name</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {user.lastName}
              </dd>
            </div>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Email</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {user.email}
              </dd>
            </div>
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Age</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {user.age}
              </dd>
            </div>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">
                Civil Status
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {user.civilStatus}
              </dd>
            </div>
          </dl>
        </div>
        <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
          <button
            type="button"
            onClick={handleDelete}
            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
          >
            Delete
          </button>
          <Link
            to={`/users/${user._id}/update`}
            className="ml-4 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Update
          </Link>
        </div>
      </div>
    </div>
  ) : (
    <h2 className="text-center text-2xl font-semibold">Loading...</h2>
  );
};

export default UserPage;
