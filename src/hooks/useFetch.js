import { useEffect, useState } from "react";

export const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [isPendding, setIsPending] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchTrips = async () => {
            try{
                setIsPending(true)
                const res = await fetch(url)
                if (!res.ok){
                    throw new Error(res.statusText)
                }
                const json = await res.json()
                setError(false)
                setIsPending(false)
                setData(json)
            }catch(err){
                setIsPending(false)
                setError("Coul not fetch the data")
                console.log(err.message)
            }

        }
        fetchTrips()
    }, [url]);

    return {data, isPendding, error};
}