import React from "react";

function Counter({ hiddenTickets, tickets }) {
 return (
     <>
  <div className = "counter">
    Hidden Tickets: 
    <span id="hideTicketsCounter">
    {`${hiddenTickets.length}`}
    </span>
  </div>
   <h2 id="searchResults">showing {`${tickets.length - hiddenTickets.length}`} results</h2>
  </>
 );
}

export default Counter;
