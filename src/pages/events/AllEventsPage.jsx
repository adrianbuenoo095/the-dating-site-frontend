import Navbar from "../../components/common/Navbar.jsx";
import Footer from "../../components/common/Footer.jsx";
import EventList from "../../components/Event/EventList.jsx";

const AllEventsPage = () =>{

  return (
      <>
        <Navbar/>
        <EventList/>
        <Footer/>
      </>
  );
}

export default AllEventsPage;
