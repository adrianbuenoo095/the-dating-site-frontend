
const EventCard = ({event}) => {
    return (
        <div>
                <div className="max-w-screen-lg mx-auto p-6 bg-white rounded-md shadow-md flex">
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
                            </div>
                </div>
        </div>
    );
};

export default EventCard;