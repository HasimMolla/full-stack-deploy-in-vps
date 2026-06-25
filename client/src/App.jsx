import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [message, setMessage] = useState("")

  useEffect(() => {
    fetch("/api/message") // automatically vite configaration add the target and change the origin
      .then((res) => res.json()) // data convert string to json
      .then((data) => setMessage(data.message))
      .catch((err) => {
        console.log("Error message", err);

      })
  }, [
    // no dependency array when we run application then only my one time useEffct code run
  ])

  return (
    <>
      <h1>Welcome to Hasim deploy fronted</h1>
      <h3>Gretting from backend: {message}</h3>
    </>
  )
}

export default App
