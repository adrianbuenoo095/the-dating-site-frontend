const EventCard = ({event}) => {
    return (
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <img
                    src={event.picture}
                    alt={event.name}
                    className="rounded-t-lg"
                />
            <div className="p-5">
                    <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {event.name}
                    </h2>
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
    );
};

export default EventCard;