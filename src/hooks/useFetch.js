import { useEffect, useState } from "react";

export const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [isPendding, setIsPending] = useState(false)

    useEffect(() => {
        const fetchTrips = async () => {
            setIsPending(true)
            const res = await fetch(url)
            const json = await res.json()
            setIsPending(false)
            setData(json)
        }
        fetchTrips()
    }, [url]);

    return {data, isPendding};
}