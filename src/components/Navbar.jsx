import React from 'react';
// import menu from '../assets/menu.svg';
// import profile from '../assets/profile.svg';
import './Navbar.css';

function Navbar(props) {
    const NavbarTitle = props.NavbarTitle;

    return (
        <React.Fragment>
            <div className="Navbar">
                <div className="Navbar-title">{NavbarTitle}</div>
            </div>
            <div className="Navbar-line"></div>
        </React.Fragment>
    )
}

export default Navbar;