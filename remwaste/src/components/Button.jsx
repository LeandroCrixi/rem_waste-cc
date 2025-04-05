import React from 'react';

const Button = ({ isSelected, yard, onClick }) => {
    return (
        <button
            className={`${isSelected ? 'selected' : ''}`}
            >
            {isSelected ? 'Selected' : `Select ${yard} Yard Skip`}
        </button>
    );
};

export default Button;
