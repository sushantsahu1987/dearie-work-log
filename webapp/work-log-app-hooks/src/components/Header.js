import React from 'react';
import {Navbar, NavbarBrand,Button} from 'reactstrap'
import './Header.css';

function Header(props) {

    return (
        <Navbar color="light">
            <NavbarBrand>Work Log</NavbarBrand>
            {
                console.log(props)
            }
            {
                console.log(`logged in : ${props.show}`)
            }
            <div className={ !props.show 
                        ? "show" 
                        : "hide" }>
                <Button 
                    color="danger"
                    onClick={props.onLogout}>
                    Logout
                </Button>
            </div>
        </Navbar>
    )

}

export default Header;