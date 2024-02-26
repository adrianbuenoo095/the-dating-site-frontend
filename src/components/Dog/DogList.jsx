import DogCard from "./DogCard.jsx";
import {useFetchData} from "../../hooks /useFetchData.js";

const DogList = () => {
        const pathRoute = "/api/dogs";
        const dogData = useFetchData(`${import.meta.env.VITE_API_URL}${pathRoute}`);

        return (
            <>
            <div>
                    {dogData.data && dogData.data.map((dog) => (
                            <DogCard  key={dog.name} {...dog} />
                    ))}
            </div>
            </>
        );
    }
;

export default DogList;
