import {Link} from "react-router-dom";

const UpdateButton = ({eventId}) => {
    const eventsPath = `/events/${eventId}/update`;
    return (
        <div>
            <Link
                to={eventsPath}
                className="text-blue-500 hover:text-blue-700 font-semibold"
            >
                <button className="bg-red-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">
                    Update Event
                </button>

            </Link>
        </div>
    );
};

export default UpdateButton;