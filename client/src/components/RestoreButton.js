import React from 'react';

function RestoreButton({onClick}) {
    return <button 
            className = "btn restore-button" 
            onClick = {onClick} 
            id = "restoreHideTickets"
            > Restore
            </button>;
}

export default RestoreButton;