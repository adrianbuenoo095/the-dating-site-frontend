import {useNavigate, useParams} from "react-router-dom";
import {useContext} from "react";
import {AuthContext} from "../context/AuthContext";
import Navbar from "../components/common/Navbar.jsx";
import Footer from "../components/common/Footer.jsx";
import DogDetailsCard from "../components/Dog/DogDetailsCard.jsx";
import {useFetchData} from "../hooks /useFetchData.js";

const DogDetailsPage = () => {
    const {dogId} = useParams();
    const {fetchWithToken, userId} = useContext(AuthContext);
    const navigate = useNavigate();
    const pathRoute= `/api/dogs/${dogId}`;
    const {data} = useFetchData(`${import.meta.env.VITE_API_URL}${pathRoute}`)

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
            {data && <DogDetailsCard dog={data} userId={userId} handleDelete={handleDelete()} dogId={dogId}/>}
            <Footer/>
        </>
    );
};

export default DogDetailsPage;
