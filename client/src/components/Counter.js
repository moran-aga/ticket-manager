import React from "react";

function Counter({ hiddenTickets, tickets }) {
 if(hiddenTickets.length === 0) return <h2 id="searchResults">showing {`${tickets.length - hiddenTickets.length}`} results</h2>;
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
