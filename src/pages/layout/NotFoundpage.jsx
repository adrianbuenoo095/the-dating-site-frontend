import {faArrowLeft} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Link} from "react-router-dom";
import Navbar from "../../components/common/Navbar.jsx";

const NotFoundPage = () => {
    return (
        <>
            <Navbar/>
            <div className="bg-gray-200 w-full px-16 md:px-0 h-screen flex items-center justify-center">
                <div className="flex flex-col items-center justify-center px-4 md:px-8 lg:px-24 py-8">
                    <p className="text-6xl md:text-7xl lg:text-9xl font-bold tracking-wider text-gray-300">
                        404
                    </p>
                    <p className="text-2xl md:text-3xl lg:text-5xl font-bold tracking-wider text-gray-500 mt-4">
                        Page Not Found
                    </p>

                    <p className="text-gray-500 mt-4 pb-4 border-b-2 text-center">
                        Sorry, the page you are looking for could not be found.
                    </p>
                    <Link to="/">
                        <button
                            type="button"
                            className="flex items-center space-x-2 bg-blue-500 hover:bg-blue-700 text-gray-100 px-4 py-2 mt-6 rounded transition duration-150"
                        >
                            <FontAwesomeIcon className="mr-2.5" icon={faArrowLeft}/>
                            Return Home
                        </button>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default NotFoundPage;
