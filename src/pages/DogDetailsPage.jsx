import {Link, useNavigate, useParams} from "react-router-dom";
import {useContext, useEffect, useState} from "react";
import {AuthContext} from "../context/AuthContext";

const DogDetailsPage = () => {
    const {dogId} = useParams();
    const [dog, setDog] = useState();
    const {fetchWithToken, userId} = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchDog = async () => {
            try {
                const response = await fetch(
                    `${import.meta.env.VITE_API_URL}/api/dogs/${dogId}`
                );
                if (response.ok) {
                    const dogData = await response.json();
                    setDog(dogData);
                } else {
                    console.log("Something went wrong");
                }
            } catch (error) {
                console.log(error);
            }
        };

        fetchDog();
    }, [dogId]);

    const handleDelete = async () => {
        try {
            const response = await fetchWithToken(`/dogs/${dogId}`, "DELETE");
            if (response.status === 204) {
                navigate("/");
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="max-w-screen-lg mx-auto p-6 bg-white rounded-md shadow-md flex">
                {dog ? (
                    <>
                        <div className="w-1/2 mr-6">
                            <img src={dog.picture} alt={dog.name} className="w-full h-auto rounded-md" />
                        </div>
                        <div className="w-1/2">
                            <h1 className="text-3xl font-semibold mb-4">Dog Details</h1>
                            <div className="mb-4">
                                <p><span className="font-semibold">Name:</span> {dog.name}</p>
                                <p><span className="font-semibold">Age:</span> {dog.age}</p>
                                <p><span className="font-semibold">Breed:</span> {dog.breed}</p>
                                <p><span className="font-semibold">Civil Status:</span> {dog.civilStatus}</p>
                                <p><span className="font-semibold">Size:</span> {dog.size}</p>
                            </div>
                            <p className="mb-4"><span className="font-semibold">Owner:</span> {dog.user}</p>
                            {userId === dog.user && (
                                <>
                                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2" type="button" onClick={handleDelete}>
                                        Delete
                                    </button>
                                    <Link to={`/dogs/${dogId}/update`} className="text-blue-500 hover:text-blue-700 font-semibold">Update</Link>
                                </>
                            )}
                        </div>
                    </>
                ) : (
                    <h2>Loading...</h2>
                )}
            </div>
        </div>
    );
};

export default DogDetailsPage;
