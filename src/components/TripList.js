import { useCallback, useEffect, useState } from "react"
import './TripList.css'

export default function TripList() {

  const [trips, setTrips] = useState([])
  const [url, setUrl] = useState('http://localhost:3000/trips')

  const fetchTrips = useCallback(()=>{
    fetch(url)
    .then((res) => res.json())
    .then(json => setTrips(json))
  }, [url])

  useEffect(()=>{
    fetchTrips()
  }, [fetchTrips])

  return (
    <div className="trip-list">
        <h2>Halo ini trip list</h2>
        <ul>
            {trips.map((trip)=>(
                <li key={trip.id}>
                    <h3>{trip.title}</h3>
                    <p>{trip.price}</p>
                </li>
            ))}
        </ul>
        <div className="filters">
            <button onClick={() => setUrl('http://localhost:3000/trips?loc=european')}>
                European Trips
            </button>
            <button onClick={() => setUrl('http://localhost:3000/trips')}>
                All Trips
            </button>
        </div>
    </div>
  )
}
