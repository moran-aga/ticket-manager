import React from 'react';

function RestoreButton({onClick}) {
    return (
        <div>
            <button onClick = {onClick} id = "restoreHideTickets">Restore</button>
        </div>
    );
}

export default RestoreButton;