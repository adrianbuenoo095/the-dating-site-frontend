import {useNavigate} from "react-router-dom";
import {AuthContext} from "../context/AuthContext";
import {useContext, useState} from 'react'

const initialValues = {
    name: "",
    time: "",
    eventDuration: "",
    location: "",
    user: "",
}
const EventForm = () => {
    const {fetchWithToken} = useContext(AuthContext);
    const navigate = useNavigate()
    const [data, setData] = useState(initialValues);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setData(prevState => ({
            ...prevState,
            [name]: value,
        }))
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        const eventToCreate = data;
        console.log("Event to Create:", eventToCreate)
        try {
            const response = await fetchWithToken('/events', 'POST', eventToCreate)
            if (response.status === 201) {
                const event = await response.json()
                console.log(event)
                navigate(`/events/${event._id}`)
            } else {
                console.log('Something went wrong')
            }
        } catch (error) {
            console.error(error)
        }
    };

    return (
        <div className="flex justify-center h-screen items-center mb-6">
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                        Name
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700
          leading-tight focus:outline-none fohandleChange:shadow-outline"
                               type="text" required value={data.name} onChange={handleChange}/>
                    </label>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Time
                        <input className="shadow appearance-none border rounded
          w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                               type="Date"
                               required
                               value={data.time}
                               onChange={handleChange}
                        />
                    </label>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        EventDuration
                        <input className="shadow appearance-none border rounded
          w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                               type="Number"
                               required
                               value={data.eventDuration}
                               onChange={handleChange}
                        />
                    </label>
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Location
                        <input className="shadow appearance-none border rounded
          w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                               type="Number"
                               required
                               value={data.location}
                               onChange={handleChange}
                        />
                    </label>
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        User
                        <input className="shadow appearance-none border rounded
          w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                               type="Schema"
                               required
                               value={data.user}
                               onChange={handleChange}
                        />
                    </label>
                </div>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit">
                    Create Event
                </button>
            </form>
        </div>
    );
}

export default EventForm;