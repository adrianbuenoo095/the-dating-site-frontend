import { Link } from "react-router-dom";

export let Button = () => {
  return (
    <Link to="/signup">
      <button className="mt-6 px-4 py-2 bg-blue-500 hover:bg-orange text-white font-bold rounded-lg ">
        Create account
      </button>
    </Link>
  );
};
