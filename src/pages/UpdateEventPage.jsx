import { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from '../context/AuthContext'

const UpdateEventPage = () => {
    const { eventId } = useParams();

    const [name, setName] = useState ('');
    const [time, setTime] = useState (0);
    const [eventDuration, setEventDuration] = useState (0);
    const [location, setLocation] = useState ('');
    const [user, setUser] = useState ('');

    const { fetchWithToken } = useContext(AuthContext)
    const navigate = useNavigate()
   
    useEffect(() => {
      const fetchEvent = async () => {
          try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/api/events/${eventId}`)
    
            if (response.ok) {
              const eventData = await response.json()
                setName(eventData.name);
                setTime(eventData.time);
                setEventDuration(eventData.eventDuration);
                setLocation(eventData.location);
                setUser(eventData.user);
            } else {
                console.log("Something went wrong");
              }
            } catch (error) {
              console.error(error);
            }
          };
      
          fetchEvent();
        }, [eventId]);

        const handleSubmit = async (event) => {
            event.preventDefault();
            try {
                const response = await fetchWithToken(`/events/${eventId}`, 'PUT', {  })
                if (response.status === 200) {
                  navigate(`/events/${eventId}`);
                }
              } catch (error) {
                console.log(error)
              }
        };

    return ( 
        <div className="flex justify-center items-center">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Name
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 
              leading-tight focus:outline-none focus:shadow-outline"
               type="text" required value={name} onChange={event=>setName(event.target.value)}/>
            </label>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Time
              <input className="shadow appearance-none border rounded 
              w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="Date"
                  placeholder="time"
                  required
                  value={time}
                  onChange={event=>setTime(event.target.value)}
              />
            </label>
         </div>
         <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
            EventDuration
              <input className="shadow appearance-none border rounded 
              w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="Number"
                  placeholder="number"
                  required
                  value={eventDuration}
                  onChange={event=>setEventDuration(event.target.value)}
              />
            </label>
         </div>
         <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Location
              <input className="shadow appearance-none border rounded 
              w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="Number"
                  placeholder="place"
                  required
                  value={location}
                  onChange={event=>setLocation(event.target.value)}
              />
            </label>
         </div>
         <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
             User
              <input className="shadow appearance-none border rounded 
              w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="Schema"
                  placeholder="user"
                  required
                  value={user}
                  onChange={event=>setUser(event.target.value)}
              />
            </label>
         </div>
          <button className="bg-blue-500 hover:bg-blue-700
           text-white font-bold py-2 px-4 rounded" type="submit">
           Update Event</button>
        </form>
          </div>
    );
}
 
export default UpdateEventPage;