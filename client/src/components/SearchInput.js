import React from 'react';

function SearchInput({getTickets}) {
    return <input type ="text" id = "searchInput" onChange = {e => getTickets(e.target.value)} />
}

export default SearchInput;