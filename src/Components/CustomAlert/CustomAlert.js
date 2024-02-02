import React from 'react';

const CustomAlert = ({ message, handleClose }) => {
  return (
    <div
      style={{
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: '#4CAF50',
        color: 'white',
        padding: '16px',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        maxWidth: '300px',
        width: '100%',
        textAlign: 'center',
      }}
    >
      <p style={{ margin: '0', fontSize: '18px', fontWeight: 'bold' }}>
        {message}
      </p>
      <button
        style={{
          background: '#fff',
          color: '#4CAF50',
          border: '1px solid #4CAF50',
          padding: '8px 12px',
          borderRadius: '4px',
          cursor: 'pointer',
          marginTop: '10px',
        }}
        onClick={handleClose}
      >
        Close
      </button>
    </div>
  );
};

export default CustomAlert;
