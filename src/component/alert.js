import React from 'react';
import PropTypes from 'prop-types';

function Alert({ message, onClose, type = 'success' }) {
    const alertStyles = {
        position: 'fixed',
        top: '20px',
        right: '20px',
        padding: '15px',
        borderRadius: '5px',
        backgroundColor: type === 'success' ? '#4CAF50' : '#f44336',
        color: 'white',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
        zIndex: 1000,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    };

    const closeButtonStyles = {
        background: 'none',
        border: 'none',
        color: 'white',
        fontSize: '16px',
        cursor: 'pointer',
        marginLeft: '20px',
    };

    return (
        <div style={alertStyles}>
            <span>{message}</span>
            <button style={closeButtonStyles} onClick={onClose}>
                &times;
            </button>
        </div>
    );
}

Alert.propTypes = {
    message: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired,
    type: PropTypes.oneOf(['success', 'error']),
};

export default Alert;