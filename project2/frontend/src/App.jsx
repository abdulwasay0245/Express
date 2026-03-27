import { useState } from 'react'
import './App.css'
import axios from 'axios'
import { useEffect } from 'react'
function App() {
  const [jokes, setJokes] = useState([])
  useEffect(() => {
    
    axios.get('/api/jokes')
      .then((response) => {
        setJokes(response.data)
      
      })
      .catch((error) => {
      console.log(error)
    })
  }, [])
  console.log(jokes)
  

  return (
    <>
      <h1>API FETCHING</h1>
      <h2>{ jokes.length}</h2>
      {jokes.map((joke) => (
        <div key={joke.id}>

          <h1>{joke.title}</h1>
          <p>{joke.joke}</p>

        </div>
      ))}
    </>
  )
}

export default App
