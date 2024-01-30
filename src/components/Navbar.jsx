import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const { isAuthenticated, logout } = useContext(AuthContext);

  return (
    <nav className="bg-gray-800 text-white p-4">
      <ul className="flex items-center justify-between">
        <li>
          <Link to="/" className="text-white hover:text-gray-300 mr-6">
            <img src="#" alt="homeimg" />
          </Link>
        </li>

        {isAuthenticated ? (
          <div className="flex">
            <li className="mr-6">
              <Link to="/new-dog" className="text-white hover:text-gray-300">
                New Dog
              </Link>
            </li>
            <li className="mr-6">
              <Link to="/my-dog" className="text-white hover:text-gray-300">
                My Dog
              </Link>
            </li>
            <li className="mr-6">
              <Link to="/new-event" className="text-white hover:text-gray-300">
                New Event
              </Link>
            </li>
            <li className="mr-6">
              <Link to="/my-events" className="text-white hover:text-gray-300">
                My Events
              </Link>
            </li>
            <li>
              <button
                type="button"
                onClick={logout}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              >
                Logout
              </button>
            </li>
          </div>
        ) : (
          <div className="flex">
            <li className="mr-6">
              <Link to="/signup" className="text-white hover:text-gray-300">
                Signup
              </Link>
            </li>
            <li>
              <Link to="/login" className="text-white hover:text-gray-300">
                Login
              </Link>
            </li>
          </div>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
