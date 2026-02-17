// frontend/src/NameModal.jsx

import { useState } from "react";

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
        <div className="modal" onClick={(e) => e.stopPropagation()}>
            <h2>Enter your name</h2>
            <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                autoFocus
            />
            <button type="submit">Save</button>
            <button type="button" onClick={onClose}>Cancel</button>
            </form>
        </div>
        </div>
    );
}

export default NameModal;