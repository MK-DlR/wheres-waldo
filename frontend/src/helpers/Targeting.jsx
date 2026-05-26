// frontend/src/helpers/Targeting.jsx

function Targeting(props) {
    // position targeting box centered around click point
    const targetingStyle = {
        position: 'absolute',
        top: `${props.position.y}%`,
        left: `${props.position.x}%`,
        transform: 'translate(-50%, -50%)',

        width: '90px',
        height: '90px',

        border: '1px solid rgba(0, 217, 255, 0.8)',
        boxShadow: '0 0 12px rgba(0, 217, 255, 0.6)',

        pointerEvents: 'none',
    };

    return (
        <div style={targetingStyle} className="targeting-reticle">
            <div className="corner tl" />
            <div className="corner tr" />
            <div className="corner bl" />
            <div className="corner br" />
            <div className="scan-dot" />
        </div>
    );
}

export default Targeting;