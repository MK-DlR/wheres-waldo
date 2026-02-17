// frontend/src/NameModal.jsx

import { useState } from "react";
import './NameModal.css';

function NameModal({ isOpen, onClose, onSubmit }) {
    const [name, setName] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(name);
        setName("");
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <h1>Enter Your Name</h1>
                <div className="instructions">
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Your name"
                        autoFocus
                    />
                </div>
                <button className="submit-button" onClick={handleSubmit}>SAVE</button>
                <button className="cancel-button" onClick={onClose}>CANCEL</button>
            </div>
        </div>
    );
}

export default NameModal;