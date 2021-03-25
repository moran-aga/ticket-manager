import React from 'react';
import HideButton from './HideButton';
import Labels from './Labels';

function Ticket({ tickets, hideOnClick }) {
    const unDoneTickets = tickets.filter(ticket => !(ticket.done));
    return (
        <>
            {unDoneTickets&&unDoneTickets.map((ticket, index)=> {
                return <div key = {`ticket-${index}`} className = "ticket">
                    <div className="ticket-title">{ticket.title}</div>        
                    <div className = "ticket-content">{ticket.content}</div>        
                    <div className ="userEmail">{ticket.userEmail}</div>        
                    <div className="creation-time">{ticket.creationTime}</div> 
                    <Labels labels = {ticket.labels}/>
                    <HideButton hideOnClick = {hideOnClick}/>
                </div>
            })}
        </>
    );
}

export default Ticket;