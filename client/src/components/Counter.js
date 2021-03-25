import React from "react";

function Counter({ hiddenTickets, tickets }) {
 return (
  <>
   <div id="hideTicketsCounter">
    Hidden Tickets: {`${hiddenTickets.length}`}
   </div>
   <h2 id="searchResults">showing {`${tickets.length}`} results</h2>
  </>
 );
}

export default Counter;
