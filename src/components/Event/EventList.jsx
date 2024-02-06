import {useContext, useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {AuthContext} from "../../context/AuthContext.jsx";
import EventCard from "./EventCard.jsx";

const EventList = () => {

    const {eventId} = useParams();
    const [event, setEvent] = useState();
    const {fetchWithToken, userId} = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchEvent = async () => {
            try {
                const response = await fetch(
                    `${import.meta.env.VITE_API_URL}/api/events/${eventId}`
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

    return (
        <div>

            <EventCard userId={userId} event={event} eventId={eventId} handleDelete={handleDelete()}/>
        </div>
    );
};

export default EventList;