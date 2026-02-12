// frontend/src/Dropdown.jsx

function Dropdown(props) {
    // position dropdown box at click point
    const dropdownStyle = {
        position: 'absolute',
        top: `${props.position.y + 2.5}%`,
        left: `${props.position.x - 4.5}%`
    }

    // exclude any characters whose names are in foundCharacters array
    const filteredCharacters = props.characters.filter(
        (character) =>
            !props.foundCharacters.some(
                (found) => found.name === character.name
            )
    );

    return (
        <form style={dropdownStyle} className="dropdown" onClick={event => event.stopPropagation()}>
            <ul>
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