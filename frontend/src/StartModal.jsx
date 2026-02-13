// StartModal.jsx
import './StartModal.css';

function StartModal({ isOpen, onStart }) {
  // don't render anything if modal isn't open
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onStart}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h1>header</h1>
        <div className="instructions">
          <p>instructions</p>
        </div>
        <button className="start-button" onClick={onStart}>
          START
        </button>
      </div>
    </div>
  );
}

export default StartModal;