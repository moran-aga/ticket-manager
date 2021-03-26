import React from 'react';

function NavBarItem({ name, onSortClick }) {
    if(name === 'sort'){
        return (
            <li onClick = {onSortClick} className = 'sortButton'>{name}</li>
        );
    }
    return (
        <li>{name}</li>
    )
}

export default NavBarItem;