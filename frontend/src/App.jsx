// frontend/src/App.jsx

import { useState, useEffect } from "react";

import ImageParent from './ImageTagger'
import FindCharacters from './FindCharacters'

function App() {
  const [status, setStatus] = useState("loading");
  const [characters, setCharacters] = useState([])
  const [foundCharacters, setFoundCharacters] = useState([]);
  
  // fetch data on component mount
    useEffect(() => {
      // helper function to make request and return error or success state
      function sendFetchRequest(method, url, data) {
        // set status state variable to "loading" during fetch
        setStatus("loading");
        return fetch(url, {
          method,
          body: JSON.stringify(data),
          header: data
            ? {
                "Content-Type": "application/json",
              }
            : {},
        }).then((response) => {
          if (response.status >= 400) {
            return response.json().then(() => {
                const error = new Error("Something went wrong!");
                throw error;
              });
          } else {
            // success state - return character data
            return response.json();
          }
        });
      }
  
      // fetch data
      sendFetchRequest("GET", `${import.meta.env.VITE_API_URL}/characters`)
        .then((res) => {
          // set status state variable to "success"
          setCharacters(res);
          setStatus("success");
          console.log(res);
        })
        .catch((err) => {
          // set status state variable to "error"
          setStatus("error");
          console.error(err);
        });
    }, []);
    
  return (
    <>
      <div className="card">
        <FindCharacters 
          characters={characters} 
          status={status} 
          foundCharacters={foundCharacters} 
        />
        <ImageParent
          characters={characters} 
          foundCharacters={foundCharacters} 
          setFoundCharacters={setFoundCharacters} 
        />
      </div>
    </>
  )
}

export default App
