import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function AllEventsPage() {
  const [events, setEvents] = useState([]);
  const fetchEvents = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/events`);
      if (response.ok) {
        const eventsData = await response.json();
        console.log(eventsData);
        setEvents(eventsData);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-center mb-6">Events Page</h1>
      <ul className="space-y-4">
        {events.map((event) => (
          <li key={event._id} className="border-b-2 border-gray-200 pb-2">
            <Link
              to={`/events/${event._id}`}
              className="text-blue-600 hover:text-blue-800 transition duration-150 ease-in-out"
            >
              <p className="text-lg font-semibold">{event.name}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AllEventsPage;
