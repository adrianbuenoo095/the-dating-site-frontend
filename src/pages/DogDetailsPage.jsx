import { Link, useNavigate, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";

const DogDetailsPage = () => {
  const { dogId } = useParams();
  const [dog, setDog] = useState();
  const { fetchWithToken, userId } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDog = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/dogs/${dogId}`,
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

  return dog ? (
    <>
      <h1>Dog Details</h1>
      <p>{dog.name}</p>
      <p>{dog.picture}</p>
      <p>{dog.age}</p>
      <p>{dog.breed}</p>
      <p>{dog.status}</p>
      <p>{dog.size}</p>
      <p>{dog.owner}</p>
      {userId === dog.owner && (
        <>
          <button type="button" onClick={handleDelete}>
            Delete
          </button>
          <Link to={`/dogs/${dog._id}/update`}>Update</Link>
        </>
      )}
    </>
  ) : (
    <h2>Loading...</h2>
  );
};

export default DogDetailsPage;
