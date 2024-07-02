import { useState, useEffect } from "react"
import "./App.css"
import axios from "axios"

// npm i axios

// npm i cors to connect both locallhost for get request from backend (its used in backend)

// /api/jokes :-standerise so we can used proxi
// here we use vite so open ( vite.config.js ) file 
//  server:{proxy:{
//  "/api":"http://localhost:4000",
//}},


function App() {
  const [jokes, setJokes] = useState([])

  useEffect(() => {
    axios
      .get("/api/jokes")
      .then((response) => {
        setJokes(response.data)
      })
      .catch((error) => {
        console.error(error)
      })
  })

  return (
    <>
      <p>Jokes : {jokes.length}</p>

      {
        jokes.map((joke) => (
          <div
            style={{ border: "2px solid red", padding: "20px" }}
            key={joke.id}
          >
            <h2>{joke.title}</h2>
            <h3>{joke.content}</h3>
          </div>
        ))}
    </>
  )
}

export default App



