import React from 'react';

function HideButton({hideOnClick}) {
    return (
        <div className = "btn hide">
            <button className = "hideTicketButton" onClick = {hideOnClick}>Hide</button>
        </div>
    );
}

export default HideButton;