// frontend/src/FoundMarker.jsx

function FoundMarker(props) {
    // position found marker pin on selected spot
    const foundStyle = {
        width: '20px',
        height: '20px',
        borderRadius: '50% 50% 50% 0',
        background: '#CA091A',
        position: 'absolute',
        transform: 'rotate(-45deg)',
        top: `${props.position.y}%`,
        left: `${props.position.x}%`,
        margin: '-10px 0 0 -15px',
    }

    return <div style={foundStyle}></div>
}

export default FoundMarker;