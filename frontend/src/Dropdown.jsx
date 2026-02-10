// frontend/src/Dropdown.jsx

function Dropdown(props) {
    const handleChange = (event) => {
        props.onSelectCharacter(event.target.value)
    }

    // position dropdown box at click point
    const dropdownStyle = {
        position: 'absolute',
        top: `${props.position.y + 2}%`,
        left: `${props.position.x - 4.5}%`
    }

    return (
        <form style={dropdownStyle} onClick={event => event.stopPropagation()}>
            <select onChange={handleChange} defaultValue="select-character">
                <option disabled value="select-character">Select A Character</option>
                {props.characters.map((character) => (
                    <option key={character.id} value={character.name}>{character.name}</option>
                ))}
            </select>
        </form>
    );
}

export default Dropdown;
