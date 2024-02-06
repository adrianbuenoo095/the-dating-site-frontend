import {useEffect, useState} from "react";
import DogCard from "./DogCard.jsx";

const DogList = () => {
        const [dogs, setDogs] = useState([]);
        const [users, setUsers] = useState([]);
        const fetchDogs = async () => {
            try {
                const dogResponse = await fetch(`${import.meta.env.VITE_API_URL}/api/dogs`);
                if (dogResponse.ok) {
                    const dogsData = await dogResponse.json();
                    setDogs(dogsData)
                }
            } catch (error) {
                console.log(error);
            }
        }

        const fetchUsers = async () => {
            try {
                const userResponse = await fetch(`${import.meta.env.VITE_API_URL}/api/users`);
                if (userResponse.ok) {
                    const usersData = await userResponse.json();
                    setUsers(usersData)
                }
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }

        useEffect(() => {
            fetchDogs()
        }, []);

        useEffect(() => {
            fetchUsers()
        }, []);

        let userDogs = combineData(dogs, users)

        function combineData(dogs, users) {
            return dogs.map((dog) => {
                const owner = users.find((user) => user.id === dog.userId);
                return {...dog, owner};
            });
        }

        return (
            <>
            <div>
                    {userDogs.map((dog) => (
                            <DogCard  key={dog.name} {...dog} />
                    ))}
            </div>
            </>
        );
    }
;

export default DogList;
