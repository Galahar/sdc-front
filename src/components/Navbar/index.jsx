import React from "react";
import { Nav, NavMenu, NavLink, BottomNav } from "./NavbarStyles";
import { SDCIcon } from "../Logo";

const Navbar = () => {

    return (
        <>
            <Nav>
                <NavMenu>
                    <BottomNav>
                        <SDCIcon />
                        <NavLink to='/live' activeStyle>
                            Live
                        </NavLink>
                        <NavLink to='/schedule' activeStyle>
                            Schedule
                        </NavLink>
                        <NavLink to='/teams' activeStyle>
                            Teams
                        </NavLink>
                        <NavLink to='/standings' activeStyle>
                            Standings
                        </NavLink>
                        <NavLink to='/statistics' activeStyle>
                            Statistics
                        </NavLink>
{/*                         <NavLink to='/aboutus' activeStyle>
                            About Us
                        </NavLink> */}
                    </BottomNav>
                </NavMenu>
            </Nav>
        </>
    );
};

export default Navbar;