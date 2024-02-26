import Navbar from "../../components/common/Navbar.jsx";
import Footer from "../../components/common/Footer.jsx";
import EventDetailsCard from "../../components/Event/EventDetailsCard.jsx";
import {useParams} from "react-router-dom";
import {useFetchData} from "../../hooks /useFetchData.js";

const EventDetailsPage = () => {

    const {eventId} = useParams();
    const pathRoute = `/api/events/${eventId}`;
    const {data} = useFetchData(`${import.meta.env.VITE_API_URL}${pathRoute}`)

    return (
        <>
            <Navbar/>
            {data && <EventDetailsCard event={data}/>}
            <Footer/>
        </>
    );
};

export default EventDetailsPage;
