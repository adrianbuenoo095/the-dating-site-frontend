import {useContext, useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {AuthContext} from "../context/AuthContext.jsx";

const UpdateEventPage = () => {
    const {eventId} = useParams();
    //Create object with initialValues
    const initialValues = {
        name: "",
        time: "",
        eventDuration: "",
        location: "",
        user: "",
    };

    const [data, setData] = useState(initialValues);

    //dont touch this
    const {fetchWithToken} = useContext(AuthContext);
    const navigate = useNavigate();

    const fetchEvent = async () => {
        try {
            const response = await fetch(
                `${import.meta.env.VITE_API_URL}/api/events/${eventId}`
            );

            if (response.ok) {
                const eventData = await response.json();
                setData(eventData);
            } else {
                console.log("Something went wrong");
            }
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchEvent();
    }, [eventId]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await fetchWithToken(`/events/${eventId}`, "PUT", {
                data,
            });
            if (response.status === 200) {
                navigate(`/events/${eventId}`);
            }
        } catch (error) {
            console.log(error);
        }
    };

    //const handleChange...
    const handleChange = (e) => {
        const {name, value} = e.target;
        setData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    return (
        <div className="flex justify-center h-screen items-center mb-6">
            <form
                className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
                onSubmit={handleSubmit}
            >
                <div className="mb-4">
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="email"
                    >
                        Name
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700
              leading-tight focus:outline-none focus:shadow-outline"
                            type="text"
                            name="name"
                            required
                            value={data.name}
                            onChange={handleChange}
                        />
                    </label>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Time
                        <input
                            className="shadow appearance-none border rounded
              w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="time"
                            name="time"
                            required
                            value={data.time}
                            onChange={handleChange}
                        />
                    </label>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Event Duration
                        <input
                            className="shadow appearance-none border rounded
              w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="time"
                            name="eventDuration"
                            required
                            value={data.eventDuration}
                            onChange={handleChange}
                        />
                    </label>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Location
                        <input
                            className="shadow appearance-none border rounded
              w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="text"
                            name="location"
                            required
                            value={data.location}
                            onChange={handleChange}
                        />
                    </label>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        User
                        <input
                            className="shadow appearance-none border rounded
              w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="Schema"
                            name="user"
                            required
                            value={data.user}
                            onChange={handleChange}
                        />
                    </label>
                </div>
                <button
                    className="bg-blue-500 hover:bg-blue-700
           text-white font-bold py-2 px-4 rounded"
                    type="submit"
                >
                    Update Event
                </button>
            </form>
        </div>
    );
};

export default UpdateEventPage;
