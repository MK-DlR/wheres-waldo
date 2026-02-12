// frontend/src/ImageTagger.jsx

import { useState } from "react";
import mainImage from "/images/mainImage.png";
import Dropdown from './Dropdown';
import Targeting from "./Targeting";
import FoundMarker from "./FoundMarker";

// render image
function DisplayImage(props) {
    return (
    <div className="main-image" style={{ padding: 0, margin: 0, position: 'relative' }}>
        <img 
            src={mainImage} 
            onClick={props.onImageClick} 
            alt="The Raid by Laurie Greasley"
            style={{ display: 'block', margin: 0, padding: 0 }}
        />
        {props.children}
    </div>
    );
}

// image parent component
function ImageParent(props) {
    // image location clicked state
    const [clickLocation, setClickLocation] = useState(null)

    // detect x/y click coordinates and convert to percentages
    function detectClick(event) {
        if (clickLocation) {
            setClickLocation(null);
        } else {
            const rect = event.target.getBoundingClientRect();
            const xPercent = event.nativeEvent.offsetX / rect.width * 100;
            const yPercent = event.nativeEvent.offsetY / rect.height * 100;

            // assign click location
            setClickLocation({ 
                x: xPercent, 
                y: yPercent
            });

            console.log('New click:', xPercent, yPercent);
        }
    }

    // select character and close dropdown
    function characterSelection(value) {
        console.log(`${value} was selected at x: ${clickLocation.x}, y: ${clickLocation.y}`);
        
        // POST fetch request to backend
        fetch(`${import.meta.env.VITE_API_URL}/characters/verify`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name: value, x: clickLocation.x, y: clickLocation.y })
        })
        .then((response) => {
            return response.json();
        })
        .then((response) => {
            if (response.success) {
                // check if found character is already in array
                if (props.foundCharacters.some(e => e.name === value)) {
                    return;
                }
                // if not, add found character to array
                props.setFoundCharacters([...props.foundCharacters, 
                    { 
                        name: value, 
                        x: clickLocation.x, 
                        y: clickLocation.y 
                    }])
            }
            console.log(response.success);
        })
        .catch((err) => {
            // set status state variable to "error"
            console.error(err);
        })
        
        setClickLocation(null);
    }

    // conditionally display dropdown and targeting box
    return (
        <div className="img-and-dropdown">
            <DisplayImage onImageClick={detectClick}>
                {clickLocation ? (
                    <>
                        <Dropdown 
                            position={clickLocation} 
                            onSelectCharacter={characterSelection} 
                            characters={props.characters}
                            foundCharacters={props.foundCharacters} />
                        <Targeting position={clickLocation} />
                    </>
                ) : null}
                {props.foundCharacters.map((character) => (
                    <FoundMarker key={character.name} position={{x: character.x, y: character.y}} />
                ))}
            </DisplayImage>
        </div>
    )
}

export default ImageParent;