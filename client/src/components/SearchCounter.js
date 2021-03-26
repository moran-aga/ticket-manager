import React from 'react';

function SearchCounter({tickets, hiddenTickets}) {
    return (
        <>
            <h2 id="searchResults">showing {`${tickets.length - hiddenTickets.length}`} results</h2>
        </>
    );
}

export default SearchCounter;