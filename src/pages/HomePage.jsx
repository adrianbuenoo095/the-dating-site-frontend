import {useEffect, useState} from "react";
import Card from "../components/Card.jsx";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import Header from "../components/Header.jsx";

const HomePage = () => {
        const [dogs, setDogs] = useState([]);
        const [users, setUsers] = useState([]);
        const fetchDogs = async () => {
            try {
                const dogResponse = await fetch(`${import.meta.env.VITE_API_URL}/api/dogs`);
                if (dogResponse.ok) {
                    const dogsData = await dogResponse.json();
                    console.log(dogs);
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
                    console.log(usersData)
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

        let items = combineData(dogs, users)
        function combineData(dogs, users) {
            return dogs.map((dog) => {
                const owner = users.find((user) => user.id === dog.userId);
                return {...dog, owner};
            });
        }

        return (
            <div>
                <Navbar/>
                <Header/>
                <main className="flex flex-wrap justify-center">
                    {items.map((item) => (
                        <Card key={item.id} {...item} />
                    ))}
                </main>
                <Footer/>
            </div>
        );
    }
;

export default HomePage;
