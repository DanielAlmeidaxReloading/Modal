import React, { useState } from 'react';
import Modal from './Modal';

const ParentComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [cards, setCards] = useState([
    { id: 1, title: 'Card 1', description: 'Description 1' },
    { id: 2, title: 'Card 2', description: 'Description 2' },
    // Add more cards as needed
  ]);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <div>
      <button onClick={openModal}>Open Modal</button>
      <Modal isOpen={isOpen} onClose={closeModal} cards={cards} />
    </div>
  );
};

export default ParentComponent;