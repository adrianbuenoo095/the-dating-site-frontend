import {useEffect, useState} from 'react';

export const useFetchData = (url) => {

    const [data, setData] = useState([]);
    const [isLoaded, setIsLoaded] = useState(true);
    const [error, setError] = useState(false);
    const fetchData = async () => {
        try {
            const response = await fetch(url);

            if (!response.ok) return Promise.reject(await response.json())

            const result = await response.json();
            
            setIsLoaded(false);
            setError(false);
            setData(result);

        } catch (error) {
            setIsLoaded(false)
            setError(error)
            console.log(error);
        }
    }

    useEffect(() => {
        fetchData()
    }, []);
    return {error, isLoaded, data};
};

