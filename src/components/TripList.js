import { useState } from "react"
import { useFetch } from "../hooks/useFetch"
import './TripList.css'

export default function TripList() {
  const [url, setUrl] = useState('http://localhost:3000/trips')
  const { data: trips, isPendding} = useFetch(url)

  return (
    <div className="trip-list">
        <h2>Halo ini trip list</h2>
        {isPendding && "Loading dulu bray"}
        <ul>
            {trips && trips.map((trip)=>(
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
