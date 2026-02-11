// frontend/src/ImageTagger.jsx

import { useState } from "react";
import mainImage from "/images/mainImage.png";
import Dropdown from './Dropdown';
import Targeting from "./Targeting";

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

            setClickLocation({ 
                x: xPercent, 
                y: yPercent
            });
        }

        console.log(clickLocation)
    }

    // select character and close dropdown
    function characterSelection(value) {
        console.log(`${value} was selected at x: ${clickLocation.x}, y: ${clickLocation.y}`);
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
                            characters={props.characters} />
                        <Targeting position={clickLocation} />
                    </>
                ) : null}
            </DisplayImage>
        </div>
    )
}

export default ImageParent;