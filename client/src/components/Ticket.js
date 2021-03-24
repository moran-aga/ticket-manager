import React from 'react';
import Labels from './Labels';

function Ticket({ tickets }) {
    return (
        <>
            {tickets.map(ticket => {
                return <div className = "ticket">
                    <div className="ticket-title">{ticket.title}</div>        
                    <div className = "ticket-content">{ticket.content}</div>        
                    <div classname ="userEmail">{ticket.userEmail}</div>        
                    <div className="creation-time">{ticket.creationTime}</div> 
                    <Labels labels = {ticket.labels}/>
                </div>
            })}
        </>
    );
}

export default Ticket;