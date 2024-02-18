const EventDetailsCard = ({event}) => {
    console.log("event", event)
    return (
            <div className="min-h-screen flex items-center justify-center bg-gray-100">
                <div className="max-w-screen-lg mx-auto p-6 bg-white rounded-md shadow-md flex">
                    <div className="w-1/2 mr-6">
                       <h1>{event.name}</h1>
                    </div>
                </div>
            </div>
    );
};

export default EventDetailsCard;