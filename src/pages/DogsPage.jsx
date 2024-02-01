import {useEffect, useState} from "react";
import {Link} from "react-router-dom";

function DogsPage() {
    const [dogs, setDogs] = useState([]);

    const fetchDogs = async () => {
        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/dogs`);
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
        <div>
            <h1>Dogs page</h1>
            <ul>
                {dogs.map((dog) => (
                    <li key={dog._id}>
                        <Link to={`/dogs/${dog._id}`}>
                            <p>{dog.name}</p>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default DogsPage;
