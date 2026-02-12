// frontend/src/Timer.jsx

import { useState, useRef, useEffect } from "react";

function Timer() {
    const [time, setTime] = useState(0); // elapsed ms
    const [running, setRunning] = useState(false);
    const startTimeRef = useRef(0); // absolute start timestamp
    const elapsedBeforeRef = useRef(0); // accumulated time before last start
    const intervalRef = useRef(null);

    // format ms -> mm:ss:ms
    function formatTime(ms) {
        const minutes = Math.floor(ms / 60000);
        const seconds = Math.floor((ms % 60000) / 1000);
        const milliseconds = Math.floor(ms % 1000);

        return (
            String(minutes).padStart(2, "0") + ":" +
            String(seconds).padStart(2, "0") + ":" +
            String(milliseconds).padStart(3, "0")
        );
    }

    useEffect(() => {
        if (running) {
            startTimeRef.current = Date.now() - elapsedBeforeRef.current;

            intervalRef.current = setInterval(() => {
                setTime(Date.now() - startTimeRef.current);
            }, 10);
        } else {
            clearInterval(intervalRef.current);
        }

        return () => clearInterval(intervalRef.current);
    }, [running]);

    function handleStartStop() {
        if (running) {
            // stop: save elapsed for next resume
            elapsedBeforeRef.current = time;
            setRunning(false);
        } else {
            setRunning(true);
        }
    }

    return (
        <div>
            <h1>{formatTime(time)}</h1>
            <button onClick={handleStartStop}>{running ? "Stop" : "Start"}</button>
        </div>
    );
}

export default Timer;