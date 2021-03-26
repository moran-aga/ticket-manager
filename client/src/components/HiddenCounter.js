import React from "react";
import RestoreButton from "./RestoreButton";

function HiddenCounter({ hiddenTickets, onClick }) {
 if(hiddenTickets.length === 0) return null;
 return (
     <>
  <div className = "counter">
    Hidden Tickets: 
    <span id="hideTicketsCounter">
    {`${hiddenTickets.length}`}
    </span>
  </div>
  <RestoreButton onClick = {onClick} />
  </>
 );
}

export default HiddenCounter;
