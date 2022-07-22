import React from "react";
import { Nav, NavMenu, NavLink, BottomNav, NavMobile, NavMenuMobile, 
    NavLinkMobile, NavMobileTwo, NavMobileThree } from "./NavbarStyles";
import { SDCIcon } from "../Logo";
import hamburgerIcon from "../../assets/illustrations/hamburgerIcon.png";
import "./navbar.css";

const Navbar = () => {

    class ShowDiv extends React.Component {
        
        state = { showing: true };

        render() {
            const { showing } = this.state;
            return (
                <div>
                <button onClick={() => this.setState({ showing: !showing })} style={{ background: 'none', 
                    color: 'inherit', border: 'none', padding: '0', 
                    font: 'inherit', cursor: 'pointer', outline: 'inherit'}}>
                    <img className="hamburgerResize" src={hamburgerIcon} alt="Hamburger Icon Dropdown"></img>
                </button>
                    { showing 
                        ? null : <div>                
                        <NavMobileTwo>
                        <NavMenuMobile>
                            <NavLinkMobile to='/' activestyle="true">
                                Home
                            </NavLinkMobile>
                            <NavLinkMobile to='/live' activestyle="true">
                                Live
                            </NavLinkMobile>
                            <NavLinkMobile to='/schedule' activestyle="true">
                                Schedule
                            </NavLinkMobile>
                        </NavMenuMobile>
                    </NavMobileTwo>
                    <NavMobileThree>
                        <NavMenuMobile>
                            <NavLinkMobile to='/teams' activestyle="true">
                                Teams
                            </NavLinkMobile>
                            <NavLinkMobile to='/standings' activestyle="true">
                                Standings
                            </NavLinkMobile>
                            <NavLinkMobile to='/statistics' activestyle="true">
                                Statistics
                            </NavLinkMobile>
                        </NavMenuMobile>
                    </NavMobileThree>
                    </div>
                
                    }
                </div>  
            )
        }
    }

    return (
        <>
            <Nav>
                <NavMenu>
                    <BottomNav>
                        <SDCIcon />
                        <NavLink to='/live' activestyle="true">
                            Live
                        </NavLink>
                        <NavLink to='/schedule' activestyle="true">
                            Schedule
                        </NavLink>
                        <NavLink to='/teams' activestyle="true">
                            Teams
                        </NavLink>
                        <NavLink to='/standings' activestyle="true">
                            Standings
                        </NavLink>
                        <NavLink to='/statistics' activestyle="true">
                            Statistics 123333
                        </NavLink>
                        <NavLink to='/allStatistics' activestyle="true">
                            All Statistics
                        </NavLink>
{/*                         <NavLink to='/aboutus' activestyle="true">
                            About Us
                        </NavLink> */}
                    </BottomNav>
                </NavMenu>
            </Nav>
            <NavMobile>
                <NavMenuMobile>
                    <ShowDiv />
                </NavMenuMobile>
            </NavMobile>
        </>
    );
};

export default Navbar;

