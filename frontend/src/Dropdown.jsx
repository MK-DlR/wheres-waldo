// frontend/src/Dropdown.jsx

function Dropdown(props) {
    const handleChange = (event) => {
        props.onSelectCharacter(event.target.value)
    }

    // position dropdown box at click point
    const dropdownStyle = {
        position: 'absolute',
        top: `${props.position.y}%`,
        left: `${props.position.x}%`
    }

    return (
        <form style={dropdownStyle} onClick={event => event.stopPropagation()}>
            <select onChange={handleChange} defaultValue="select-character">
                <option disabled value="select-character">Select A Character</option>
                <option value="c1placeholder">C1 Placeholder</option>
                <option value="c2placeholder">C2 Placeholder</option>
                <option value="c3placeholder">C3 Placeholder</option>
            </select>
        </form>
    );
}

export default Dropdown;