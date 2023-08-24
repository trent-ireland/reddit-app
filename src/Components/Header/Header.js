import SearchBar from './SearchBar';
import React from 'react';
import styles from './Header.module.css';

const Header = () => {
    return (
        <>
           <nav>
                <ul>
                    <li>Home</li>
                    <li>Popular</li>
                    <li>All</li>    
                </ul>
           </nav>
           <div>
                <SearchBar />
           </div>
        </>
    )
};

export default Header;
