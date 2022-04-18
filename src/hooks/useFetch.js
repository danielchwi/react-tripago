import { useEffect, useState } from "react";

export const useFetch = (url) => {
    
    const [data, setData] = useState(null)
    const [isPendding, setIsPending] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchController = new AbortController()
        const fetchTrips = async () => {
            setIsPending(true)
            try{
                const res = await fetch(url, {signal: fetchController.signal})
                if (!res.ok){
                    throw new Error(res.statusText)
                }
                const json = await res.json()
                setError(false)
                setIsPending(false)
                setData(json)
            }catch(err){
                if (err.name === "AbortError"){
                    console.log('the fetch was aborted')
                }else {
                    setIsPending(false)
                    setError("Coul not fetch the data")
                }
            }
        }
        fetchTrips()

        return () => {
            fetchController.abort()
        }
    }, [url]);

    return {data, isPendding, error};
}