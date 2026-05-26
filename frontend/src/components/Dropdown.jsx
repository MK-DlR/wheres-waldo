// frontend/src/components/Dropdown.jsx

function Dropdown(props) {
    // exclude any characters whose names are in foundCharacters array
    const filteredCharacters = props.characters.filter(
        (character) =>
            !props.foundCharacters.some(
                (found) => found.name === character.name
            )
    );

    // don't render anything if all characters are found
    if (filteredCharacters.length === 0) return null;

    const nearBottom = props.position.y > 85;
    const nearRight = props.position.x > 85;

    const translateX = nearRight ? 'calc(-100% + 30px)' : '-42.5px';
    const translateY = nearBottom ? 'calc(-100% - 45px)' : '45px';

    // position dropdown box at click point
    const dropdownStyle = {
        position: 'absolute',
        top: `${props.position.y}%`,
        left: `${props.position.x}%`,
        transform: `translate(${translateX}, ${translateY})`
    }

    return (
        <form style={dropdownStyle} className="dropdown" onClick={event => event.stopPropagation()}>
            <ul className="dropdown-list">
                {filteredCharacters.map((character) => (
                    <li
                    key={character.id}
                    className="select-character"
                    onClick={() => props.onSelectCharacter(character.name)}
                    >
                    <img
                        src={character.image}
                        className="character-icon"
                        alt={character.name}
                    />
                    <span>{character.name}</span>
                    </li>
                ))}
            </ul>
        </form>
    );
}

export default Dropdown;