import { useEffect, useState } from 'react'
import './App.css'
import MovieDisplay from "./components/MovieDisplay"
import Form from "./components/Form"

function App() {

  const [apiKey, setApiKey] = useState("4144e7c0")
  const [movie, setMovie] = useState(null)
  // Keep track of searched movie

  const getMovie = async (searchTerm) => {
    const response = await fetch(`https://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`);
    // 1. Fetch data from API
    const data = await response.json();
    // 2. Convert data to json
    console.log(data)
    // 3. Save the retrieved data to state
    setMovie(data)    

  }
  // Function to request movies and save them to state

  useEffect(() => {
    getMovie("Superbad")
    // Make request to API
  },[])

  // getMovie(Godfather)
  // // Make request to API

  return (
    <>
      <Form movieSearch={getMovie}/>
      <MovieDisplay movie={movie}/>  
      {/* Pass movie to MovieDisplay */}
    </>
  );
}

export default App
