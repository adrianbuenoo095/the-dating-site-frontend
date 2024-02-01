import {Link, useNavigate, useParams} from "react-router-dom";
import {useContext, useEffect, useState} from "react";
import Navbar from "../components/Navbar.jsx";
import {AuthContext} from "../context/AuthContext.jsx";

const UserPage = () => {
    const {userId} = useParams();
    console.log(userId)
    const [user, setUser] = useState("");
    const {fetchWithToken} = useContext(AuthContext)
    const navigate = useNavigate();
    const fetchUser = async () => {
        try {
            const response = await fetch(
                `${import.meta.env.VITE_API_URL}/api/users/${userId}`
            );
            console.log(response)
            if (response.ok) {
                const userData = await response.json();
                setUser(userData);
            } else {
                console.log("Something went wrong");
            }
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        fetchUser();
    }, [userId]);

    const handleDelete = async () => {
        try {
            const response = await fetchWithToken(`/users/${userId}`, "DELETE");
            if (response.status === 204) {
                navigate("/users");
            }
        } catch (error) {
            console.log(error);
        }
    };

    return user ? (
        <>
            <Navbar/>
            <h1>User Details</h1>
            <p>{user.firstName}</p>
            <p>{user.lastName}</p>
            <p>{user.email}</p>
            <p>{user.agr}</p>
            <p>{user.civilStatus}</p>

            <>
                <button type="button" onClick={handleDelete}>
                    Delete
                </button>
                <Link to={`/users/${user._id}/update`}>Update</Link>
            </>
        </>
    ) : (
        <h2>Loading...</h2>
    );
};

export default UserPage;
