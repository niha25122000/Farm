import React, { useState } from 'react';
import Modal from 'react-modal';
import Registration from './farmerRegistration';

function RegistrationModal(props) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button onClick={handleOpenModal}>Register</button>
      <Modal isOpen={isOpen} onRequestClose={handleCloseModal}>
        <div>
          <button onClick={handleCloseModal}>X</button>
        </div>
        <Registration onCloseModal={handleCloseModal} />
      </Modal>
    </>
  );
}

export default RegistrationModal;



