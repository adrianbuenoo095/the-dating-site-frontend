const EventDetailsCard = ({event}) => {
    return (
            <div className="min-h-screen flex items-center justify-center bg-gray-100">
                <div className="max-w-screen-lg mx-auto p-6 bg-white rounded-md shadow-md flex">
                    <div className="w-1/2 mr-6">
                        <img src={event.picture} alt={event.name}/>
                    </div>
                </div>
            </div>
    );
};

export default EventDetailsCard;