import React from 'react';

function HideButton({hideOnClick}) {
    return <button 
    className = "btn hideTicketButton" 
    onClick = {hideOnClick}>Hide
    </button>;
}

export default HideButton;