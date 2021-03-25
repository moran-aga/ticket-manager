import React from 'react';

function Counter({ hiddenTickets }) {
    return (
        <div id = "hideTicketsCounter">
            {`${hiddenTickets.length}`}
        </div>
    );
}

export default Counter;