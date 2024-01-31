import { Link, useNavigate, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";

const EventPage = () => {
  const { eventId } = useParams();
  const [event, setEvent] = useState();

  const navigate = useNavigate();

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/events/${eventId}`
        );
        if (response.ok) {
          const eventData = await response.json();
          setEvent(eventData);
        } else {
          console.log("Something went wrong");
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchEvent();
  }, [eventId]);

  const handleDelete = async () => {
    try {
      const response = await fetchWithToken(`/events/${eventId}`, "DELETE");
      if (response.status === 204) {
        navigate("/events");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return user ? (
    <>
      <h1>Event Details</h1>
      <p>{event.name}</p>
      <p>{event.lastName}</p>
      <p>{event.email}</p>
      <p>{event.social}</p>
      <p>{event.age}</p>
      <p>{event.civilStatus}</p>
      <p>{event.xxxxx}</p>
      <p>{event.xxxxxx}</p>

      <>
        <button type="button" onClick={handleDelete}>
          Delete
        </button>
        <Link to={`/users/${user._id}/update`}>Update</Link>
      </>
    </>
  ) : (
    <h2>Loading...</h2>
  );
};

export default EventPage;
