import React from "react";

function Counter({ hiddenTickets }) {
 return (
  <div id="hideTicketsCounter">Hidden Tickets: {`${hiddenTickets.length}`}</div>
 );
}

export default Counter;
