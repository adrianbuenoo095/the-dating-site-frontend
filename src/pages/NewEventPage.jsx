import EventForm from "../components/forms/EventForm.jsx";
import Navbar from "../components/common/Navbar.jsx";
import Footer from "../components/common/Footer.jsx";

const NewEventPage = () => {
    return (
        <>
            <Navbar/>
            <EventForm/>
            <Footer/>
        </>
    );
}
export default NewEventPage;