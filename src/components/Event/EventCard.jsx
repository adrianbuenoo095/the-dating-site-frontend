import {Link} from "react-router-dom";


const EventCard = ({event, userId, eventId, handleDelete}) => {

    return (
        <div>
            <div className="min-h-screen flex items-center justify-center bg-gray-100">
                <div className="max-w-screen-lg mx-auto p-6 bg-white rounded-md shadow-md flex">
                    {event ? (
                        <>
                            <div className="w-1/2 mr-6">
                                <img
                                    src={event.picture}
                                    alt={event.name}
                                    className="w-full h-auto rounded-md"
                                />
                            </div>
                            <div className="w-1/2">
                                <h1 className="text-3xl font-semibold mb-4">Event Details</h1>
                                <div className="mb-4">
                                    <p>
                                        <span className="font-semibold">Event Name:</span>{" "}
                                        {event.name}
                                    </p>
                                    <p>
                                        <span className="font-semibold">Time:</span> {event.time}
                                    </p>
                                    <p>
                                        <span className="font-semibold">Duration:</span>{" "}
                                        {event.eventDuration}
                                    </p>
                                    <p>
                                        <span className="font-semibold">Location:</span>{" "}
                                        {event.location}
                                    </p>
                                </div>
                                <p className="mb-4">
                                    <span className="font-semibold">Owner:</span> {event.user}
                                </p>
                                {userId === event.createdBy && (
                                    <>
                                        <button
                                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
                                            type="button"
                                            onClick={handleDelete}
                                        >
                                            Delete
                                        </button>
                                        <Link
                                            to={`/events/${eventId}/update`}
                                            className="text-blue-500 hover:text-blue-700 font-semibold"
                                        >
                                            Update
                                        </Link>
                                    </>
                                )}
                            </div>
                        </>
                    ) : (
                        <h2>Loading...</h2>
                    )}
                </div>
            </div>
        </div>
    );
};

export default EventCard;