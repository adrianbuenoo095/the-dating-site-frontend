import {useState, useEffect} from 'react';

export const useFetchDogsData = (url) => {
    const [data, setData] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState(null);
    const fetchData = async () => {
        try {
            const response = await fetch(url);
            console.log("response:", response)
            if (response.ok) {
                const dogsData = await response.json();
                setIsLoaded(true);
                setData(dogsData);
            }
        } catch (error) {
            setError(error)
            console.log(error);
        }
    }
    useEffect(() => {
        fetchData()
    }, []);
    return { error, isLoaded, data };
};

