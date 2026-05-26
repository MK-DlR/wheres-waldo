// frontend/src/components/StartModal.jsx

import FindCharacters from './FindCharacters'
import '../styles/StartModal.css';
import '../styles/theme.css';

function StartModal({ isOpen, onStart, characters, status, foundCharacters }) {
  // don't render anything if modal isn't open
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onStart}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h1>SIMULATION INITIALIZATION</h1>
        <div className="instructions">
          <p>Find the targets displayed below as quickly as you can.</p>
          <p>The timer will begin as soon as "START" is pressed.</p>
          <br></br>
          <FindCharacters 
            characters={characters} 
            status={status} 
            foundCharacters={foundCharacters} 
            className="find-characters"
          />
        </div>
        <button className="start-button" onClick={onStart}>
          START
        </button>
      </div>
    </div>
  );
}

export default StartModal;