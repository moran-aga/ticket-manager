import React from 'react';

function SearchInput({getTickets}) {
    return <input 
    type = "text" 
    placeholder = "Search for ticket"
    id = "searchInput" 
    onChange = {e => getTickets(e.target.value)}
    />
}

export default SearchInput;