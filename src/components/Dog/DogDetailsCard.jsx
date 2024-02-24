import {Link} from "react-router-dom";
import {Button} from "../common/Button.jsx";

const DogDetailsCard = ({dog, userId, handleDelete, dogId}) => {
    console.log("dog",dog)
    console.log("userId", userId)
    console.log("dogId", dogId )
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="max-w-screen-lg mx-auto p-6 bg-white rounded-md shadow-md flex">
                <div className="w-1/2 mr-6">
                    <img src={dog.picture} alt={dog.name} className="w-full h-auto rounded-md"/>
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
                            <Button onClick={handleDelete}>
                                Delete
                            </Button>
                            <Link to={`/dogs/${dogId}/update`}
                                  className="text-blue-500 hover:text-blue-700 font-semibold">
                                <Button>
                                    Update
                                </Button>
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default DogDetailsCard;