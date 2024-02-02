import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";

function AllDogsPage() {
    const [dogs, setDogs] = useState([]);

    const fetchDogs = async () => {
        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/api/dogs`);
            if (response.ok) {
                const dogData = await response.json();
                console.log(dogData);
                setDogs(dogData);
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchDogs();
    }, []);

    return (
        <>
            <Navbar/>
            <div className="max-w-4xl mx-auto px-4 py-8">
                <h1 className="text-2xl font-bold text-center mb-6">Dogs page</h1>
                <ul className="space-y-4">
                    {dogs.map((dog) => (
                        <li key={dog._id} className="border-b-2 border-gray-200 pb-2">
                            <Link
                                to={`/dogs/${dog._id}`}
                                className="text-blue-600 hover:text-blue-800 transition duration-150 ease-in-out"
                            >
                                <p className="text-lg font-semibold">{dog.name}</p>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            <Footer/>
        </>
    );
}

export default AllDogsPage;
