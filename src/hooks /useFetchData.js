import {useEffect, useState} from 'react';

export const useFetchData = (url) => {

    const [data, setData] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState("");
    const fetchData = async () => {
        try {
            const response = await fetch(url);
            if (response.ok) {
                const payload = await response.json();
                setIsLoaded(true);
                setData(payload);
            }
        } catch (error) {
            setError(error)
            console.log(error);
        }
    }
    useEffect(() => {
        fetchData()
    }, []);
    return {error, isLoaded, data};
};

