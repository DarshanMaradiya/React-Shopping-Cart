import React, { Component } from 'react';

const NavBar = (props) => {
    return ( 
        <nav className="navbar navbar-light bg-light">
            <a className="navbar-brannd" href="#">
                Navbar <spna className="badge badge-pill badge-secondary">{ props.distinctItems }</spna>
            </a>
        </nav>
     );
}
 
export default NavBar;