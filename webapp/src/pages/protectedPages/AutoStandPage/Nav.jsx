import React, { useState } from 'react';
// import { FaUserCircle } from 'react-icons/fa';
import { FaBars } from 'react-icons/fa';
import "../AutoStandPage/Nav.css"
import {Link} from "react-router-dom";

const Navbar = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');


    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const handleSearchSubmit = (event) => {
        event.preventDefault();
        // Perform search functionality with searchQuery
        console.log('Search submitted:', searchQuery);
        // Clear the search query
        setSearchQuery('');
    };

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    }
    return (
        <nav className='navbar'>
            <div className="menu-icon" onClick={toggleMenu}>
                <FaBars className='hamburger-icon' />
            </div>
            <ul className={`menu ${isMenuOpen ? 'open' : ''}`}>
                <li className="menu-item">Home</li>
                <li className="menu-item">Histroy</li>
                <li className="menu-item">Notifications</li>
                <li className="menu-item">Settings</li>
            </ul>
            {/* <div className="search-bar"> */}
                {/* <input type="text" placeholder="Search" /> */}
                <form className="navbar-search" onSubmit={handleSearchSubmit}>
                    <input
                        type="text"
                        placeholder="Search"
                        value={searchQuery}
                        onChange={handleSearchChange}
                    />
                    <Link to='/autostand/table'> <button type="submit">Search</button></Link>
                </form>
            {/* </div> */}
            {/* <div className="right-section">
                <div className="profile-icon">
                    <FaUserCircle />
                </div>
            </div> */}
        </nav>
    );
};

export default Navbar;
