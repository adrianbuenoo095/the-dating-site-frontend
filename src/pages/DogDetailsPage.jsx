import {useNavigate, useParams} from "react-router-dom";
import {useContext, useEffect, useState} from "react";
import {AuthContext} from "../context/AuthContext";
import Navbar from "../components/common/Navbar.jsx";
import Footer from "../components/common/Footer.jsx";
import DogDetailsCard from "../components/Dog/DogDetailsCard.jsx";
import Loading from "../components/common/Loading.jsx";

const DogDetailsPage = () => {
    const {dogId} = useParams();
    const [dog, setDog] = useState();
    const {fetchWithToken, userId} = useContext(AuthContext);
    const [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate();

    useEffect(() => {
        const fetchDog = async () => {
            try {
                const response = await fetch(
                    `${import.meta.env.VITE_API_URL}/api/dogs/${dogId}`
                );
                if (response.ok) {
                    const dogData = await response.json();
                    setIsLoading(true)
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
        <>
            <Navbar/>
            {isLoading && <Loading/>}
            {dog && <DogDetailsCard dog={dog} userId={userId} handleDelete={handleDelete()} dogId={dogId}/>}
            <Footer/>
        </>
    );
};

export default DogDetailsPage;
