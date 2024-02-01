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
    <div>
      <h1>Events page</h1>
      <ul>
        {events.map((event) => (
          <li key={event._id}>
            <Link to={`/events/${event._id}`}>
              <p>{event.name}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AllEventsPage;
