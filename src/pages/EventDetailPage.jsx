import Navbar from "../components/common/Navbar.jsx";
import Footer from "../components/common/Footer.jsx";
import EventDetailsCard from "../components/Event/EventDetailsCard.jsx";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";

const EventDetailsPage = () => {

    const {eventId} = useParams();
    console.log("eventId",eventId)
    const [event, setEvent] = useState();
    console.log("event",event)

    useEffect(() => {
        const fetchEvent = async () => {
            try {
                const response = await fetch(
                    `${import.meta.env.VITE_API_URL}/api/events/${eventId}`
                );
                if (response.ok) {
                    const eventData = await response.json();
                    console.log("eventData", eventData)
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


    return (
        <>
            <Navbar/>
            <EventDetailsCard event={event}/>
            <Footer/>
        </>
    );
};

export default EventDetailsPage;
