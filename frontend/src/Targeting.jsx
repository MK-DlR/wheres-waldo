// frontend/src/Targeting.jsx

function Targeting(props) {
    // position targeting box centered around click point
    const targetingStyle = {
        position: 'absolute',
        top: `${props.position.y}%`,
        left: `${props.position.x}%`,
        transform: 'translate(-50%, -50%)',
        border: '4px solid red',
        width: '80px',
        height: '80px'
    }

    return <div style={targetingStyle}></div>
}

export default Targeting;