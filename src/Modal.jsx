import React, { useRef, useEffect } from 'react';

const Modal = ({ isOpen, onClose, cards }) => {
  const modalRef = useRef();

  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      onClose();
    }
  };

  const handleClose = () => {
    onClose();
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
    } else {
      document.body.style.overflow = ''; // Restore scrolling when modal is closed
    }
    return () => {
      document.body.style.overflow = ''; // Restore scrolling on unmount
    };
  }, [isOpen]);

  return (
    <div className={`fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-800 bg-opacity-50 transition-opacity ${isOpen ? '' : 'opacity-0 pointer-events-none'}`} onClick={handleClickOutside}>
      <div ref={modalRef} className="rounded-lg w-1/2 bg-transparent p-8 max-w-xl max-h-screen overflow-y-auto transform transition-transform ease-in-out duration-300" style={{ scale: isOpen ? 1 : 0.8 }}>
        <button className="absolute top-0 right-0 p-4 mb-4" onClick={handleClose}>Close</button>
        <div className="space-y-4">
          {cards.map(card => (
            <div className="bg-gray-100 p-4 rounded-lg" key={card.id}>
              <h3 className="text-lg font-semibold">{card.title}</h3>
              <p className="text-gray-600">{card.description}</p>
              {/* Add more card details here */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Modal;
