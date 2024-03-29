import EventCard from "./EventCard.jsx";
import {useFetchData} from "../../hooks /useFetchData.js";
import Loading from "../common/Loading.jsx";


const EventList = () => {
    const pathRoute = "api/events/"
    const {data, isLoaded } = useFetchData(`${import.meta.env.VITE_API_URL}/${pathRoute}`)
    console.log("data",data)
    return (
        <div>
            {!isLoaded && <Loading/>}
            {data.map((event) => (
                <EventCard  key={event.name} event={event}  />
            ))
            }
        </div>
    );
};

export default EventList;