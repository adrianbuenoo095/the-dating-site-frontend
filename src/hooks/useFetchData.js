import {useEffect, useState} from 'react';

export const useFetchData = (url) => {

    const [data, setData] = useState([]);
    const [isLoaded, setIsLoaded] = useState(true);
    const [error, setError] = useState(false);
    const fetchData = async () => {
        try {
            const response = await fetch(url);
            const result = await response.json();

            if (!response.ok) {
                return Promise.reject(result)
            }
            
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

