// frontend/src/App.jsx

import { useState, useEffect } from "react";
import { Toaster } from 'react-hot-toast';

import StartModal from "./StartModal";
import ImageParent from './ImageTagger'
import FindCharacters from './FindCharacters'
import Timer from "./Timer";

function App() {
  const [status, setStatus] = useState("loading");
  const [characters, setCharacters] = useState([])
  const [foundCharacters, setFoundCharacters] = useState([]);
  
  // modal and timer state
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [timerStarted, setTimerStarted] = useState(false);
  
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
          return response.json(); // success state - return character data
        }
      });
    }

    // fetch data
    sendFetchRequest("GET", `${import.meta.env.VITE_API_URL}/characters`)
      .then((res) => {
        setCharacters(res);
        setStatus("success");  // set status state variable to "success"
        console.log(res);
      })
      .catch((err) => {
        setStatus("error"); // set status state variable to "error"
        console.error(err);
      });
  }, []);
  
  // handle start button click
  const handleStart = () => {
    setIsModalOpen(false);
    setTimerStarted(true);
  };
    
  return (
    <>
      <StartModal isOpen={isModalOpen} onStart={handleStart} />
      <Toaster position="top-center" />
      <div className="card">
        <div className="header">
          <FindCharacters 
            characters={characters} 
            status={status} 
            foundCharacters={foundCharacters} 
            className="find-characters"
          />
          {timerStarted && <Timer className="timer" />}
        </div>
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