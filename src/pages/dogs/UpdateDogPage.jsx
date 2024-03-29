import {useContext, useEffect, useState} from 'react'
import {useNavigate, useParams} from "react-router-dom";
import {AuthContext} from '../../context/AuthContext.jsx'

const UpdateDogPage = () => {
    const {dogId} = useParams();

    const initialValues = {
        'name': '',
        'picture': '',
        'age': 0,
        'breed': '',
        'user': '',
        'civilStatus': '',
        'size': '',
    }

    const [data, setData] = useState(initialValues)
    const {fetchWithToken} = useContext(AuthContext)

    const handleChange = (e) => {
        const {name, value} = e.target;
        setData(prevState => ({
            ...prevState,
            [name]: value,
        }));
    }

    const navigate = useNavigate()

    useEffect(() => {
        const fetchDog = async () => {
            try {
                const response = await fetch(`${import.meta.env.VITE_API_URL}/api/dogs/${dogId}`)

                if (response.ok) {
                    const dogData = await response.json()
                    setData(dogData)
                } else {
                    console.log("Something went wrong");
                }
            } catch (error) {
                console.error(error);
            }
        };

        fetchDog();
    }, [dogId]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await fetchWithToken(`/dogs/${dogId}`, 'PUT', {data})
            if (response.status === 200) {
                navigate(`/dogs/${dogId}`);
            }
        } catch (error) {
            console.log(error)
        }
    };

    return (
        <div className="flex justify-center h-screen items-center mb-6">
            <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                        Name
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700
            leading-tight focus:outline-none focus:shadow-outline"
                               type="text" name="name" required value={data.name} onChange={handleChange}/>
                    </label>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Picture
                        <input className="shadow appearance-none border rounded
            w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                               type="text"
                               name="picture"
                               required
                               value={data.picture}
                               onChange={handleChange}
                        />
                    </label>
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Age
                        <input className="shadow appearance-none border rounded
            w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                               type="number"
                               name="age"
                               required
                               value={data.age}
                               onChange={handleChange}
                        />
                    </label>
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Breed
                        <input className="shadow appearance-none border rounded
            w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                               type="Schema"
                               name="breed"
                               required
                               value={data.breed}
                               onChange={handleChange}
                        />
                    </label>
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        User
                        <input className="shadow appearance-none border rounded
            w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                               type="Schema"
                               name="user"
                               required
                               value={data.user}
                               onChange={handleChange}
                        />
                    </label>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Status
                        <input className="shadow appearance-none border rounded
            w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                               type="text"
                               name="civilStatus"
                               required
                               value={data.civilStatus}
                               onChange={handleChange}
                        />
                    </label>
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Size
                        <input className="shadow appearance-none border rounded
            w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                               type="text"
                               name="size"
                               required
                               value={data.size}
                               onChange={handleChange}
                        />
                    </label>
                </div>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit">
                    Update Dog
                </button>
            </form>
        </div>
    );
}

export default UpdateDogPage;