import { useEffect, useState } from "react";

export const useFetch = (url) => {
    const [data, setData] = useState(null)
    useEffect(() => {
        const fetchTrips = async () => {
            const res = await fetch(url)
            const json = await res.json()
            setData(json)
        }
        fetchTrips()
    }, [url]);

    return {data};
}