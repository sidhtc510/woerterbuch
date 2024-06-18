'use client'
export default function Modal({ wordObj, isOpen, onClose, }) {
    if (!isOpen) return null;
    console.log(wordObj);
    return (
        <div className="modal">
            <div className="modal-content">
                <span className="close" onClick={onClose}>&times;</span>
                <p>modalContent</p>
            </div>
        </div>
    );
}