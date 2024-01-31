import {Link, useNavigate, useParams} from "react-router-dom";
import {useContext, useEffect, useState} from "react";
import {AuthContext} from "../context/AuthContext";
import Navbar from "../components/Navbar.jsx";

const EventDetailsPage = () => {
    const {eventId} = useParams();
    const [event, setEvent] = useState();
    const {fetchWithToken, userId} = useContext(AuthContext);
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
                navigate("/");
            }
        } catch (error) {
            console.log(error);
        }
    };

    return event ? (
        <>
            <Navbar/>
            <h1>Event Details</h1>
            <p>{event.name}</p>
            <p>{event.time}</p>
            <p>{event.eventDuration}</p>
            <p>{event.location}</p>

            {userId === event.createdBy && (
                <>
                    <button type="button" onClick={handleDelete}>
                        Delete
                    </button>
                    <Link to={`/event/${event._id}/update`}>Update</Link>
                </>
            )}
        </>
    ) : (
        <h2>Loading...</h2>
    );
};

export default EventDetailsPage;
