// frontend/src/Timer.jsx

import { useState, useRef, useEffect } from "react";

function Timer({ shouldStop, time,setTime }) {
    const [running, setRunning] = useState(true); // auto-start on mount
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

    // timer count
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
    }, [running, setTime]);

    // stop timer when all characters found
    useEffect(() => {
        if (shouldStop === true) {
            // eslint-disable-next-line
            setRunning(false);
        }
    }, [shouldStop])

    return (
        <div>
            <h1>{formatTime(time)}</h1>
        </div>
    );
}

export default Timer;