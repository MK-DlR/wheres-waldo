// frontend/src/components/FoundMarker.jsx

function FoundMarker(props) {
    // position found marker pin on selected spot
    const markerStyle = {
        position: 'absolute',
        top: `${props.position.y}%`,
        left: `${props.position.x}%`,
        transform: 'translate(-50%, -50%)',

        width: '14px',
        height: '14px',
        borderRadius: '50%',

        background: 'var(--accent-magenta)',
        boxShadow: '0 0 12px rgba(255, 20, 147, 0.7)',

        pointerEvents: 'none',
    };

    return (
        <div className="found-marker" style={markerStyle}>
            <div className="found-pulse" />
        </div>
    );
}

export default FoundMarker;