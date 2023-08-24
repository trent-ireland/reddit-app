import React, { useState } from 'react';
import SearchBar from './SearchBar';
import styles from './Header.module.css';
import Popular from './Popular';

const Header = () => {
    const [showPopular, setShowPopular] = useState(false);

    return (
        <>
           <nav>
                <ul>
                    <li>Home</li>
                    <li onClick={() => setShowPopular(!showPopular)}>
                        Popular Subreddits 
                    </li>
                </ul>
           </nav>
           <div>
                <SearchBar />
           </div>
           {showPopular && <Popular />}
        </>
    );
};

export default Header;
