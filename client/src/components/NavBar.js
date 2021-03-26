import React from 'react';
import NavBarItem from './NavBarItem';

function NavBar({ navTitles, onSortClick }) {
    return (
        <nav>
            <ul className = "nav-bar">{navTitles.map((title, index) => {
                return <NavBarItem name = {title} key = {index} onSortClick = {onSortClick}/>
            })}
            </ul>
        </nav>
    );
}

export default NavBar;