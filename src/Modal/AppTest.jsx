import React, { useState } from 'react';
import Modal from './Modal'; // Import the component we built earlier
import './modal.css'; // Import the CSS we wrote

const AppTest = () => {
  // 1. The State: Controls whether the modal is visible
  const [isModalOpen, setIsModalOpen] = useState(false);

  // 2. The Handlers: Functions to toggle the state
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="app-container" style={{ padding: '50px', textAlign: 'center' }}>
      <h1>React Modal Demo</h1>
      
      <p>Click the button below to trigger the modal.</p>

      {/* 3. The Trigger: A button that updates the state to true */}
      <button 
        onClick={openModal} 
        style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}
      >
        Open Settings
      </button>

      {/* 4. The Modal Component: Receives state and the close handler */}
      <Modal 
        isOpen={isModalOpen} 
        onClose={closeModal} 
        title="Account Settings"
      >
        {/* This content is passed as {children} */}
        <form>
          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', marginBottom: '5px' }}>Username:</label>
            <input type="text" placeholder="Enter username" style={{ width: '100%', padding: '8px' }} />
          </div>
          <p style={{ fontSize: '0.9rem', color: '#666' }}>
            Changes will be saved immediately.
          </p>
          <div style={{ marginTop: '20px', textAlign: 'right' }}>
            <button type="button" onClick={closeModal} style={{ marginRight: '10px' }}>
              Cancel
            </button>
            <button type="submit" style={{ backgroundColor: 'blue', color: 'white', border: 'none', padding: '8px 16px' }}>
              Save
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default AppTest;