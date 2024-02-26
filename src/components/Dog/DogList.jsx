import DogCard from "./DogCard.jsx";
import {useFetchData} from "../../hooks /useFetchData.js";

const DogList = () => {
        const pathRoute = "/api/dogs";
        const usePathRoute = "/api/users";
        const dogData = useFetchData(`${import.meta.env.VITE_API_URL}${pathRoute}`)
        const userData=  useFetchData(`${import.meta.env.VITE_API_URL}${usePathRoute}`)

        console.log("dogData", dogData)
        console.log("userData", userData)

        let userDogs = combineData(dogData, userData)

        function combineData(dogs, users) {
            if (!dogs || !users) return;

            const dogOwner = dogs.map((dog) => {
                let owner = users.find((user) => user.id === dog.userId);
                return {...dog, owner};
            });

            return dogOwner;
        }

        return (
            <>
            <div>
                    {userDogs && userDogs.map((dog) => (
                            <DogCard  key={dog.name} {...dog} />
                    ))}
            </div>
            </>
        );
    }
;

export default DogList;
