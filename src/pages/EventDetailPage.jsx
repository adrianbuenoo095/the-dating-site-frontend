import Navbar from "../components/common/Navbar.jsx";
import Footer from "../components/common/Footer.jsx";
import EventCard from "../components/Event/EventCard.jsx";
import EventList from "../components/Event/EventList.jsx";

const EventDetailsPage = () => {
    return (
        <>
            <Navbar/>
            <EventList/>
            <Footer/>
        </>
    );
};

export default EventDetailsPage;
