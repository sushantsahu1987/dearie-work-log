import React from 'react';
import './Header.css';

function Header(props) {

    return (
        <nav className="header">
            <h2>Header</h2>
            {
                console.log(props)
            }
            {
                console.log(`logged in : ${props.show}`)
            }
            <div className={ !props.show 
                        ? "show" 
                        : "hide" }>
                <button>Logout</button>
            </div>
        </nav>
    )

}

export default Header;