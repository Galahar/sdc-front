import React from "react";
import { Nav, NavMenu, NavLink, BottomNav, NavMobile, NavMenuMobile, 
    NavLinkMobile, NavMobileTwo, NavMobileThree, NavMobileFour, NavLinkLogin, NavMobileFourMobile } from "./NavbarStyles";
import { SDCIcon } from "../Logo";
import hamburgerIcon from "../../assets/illustrations/hamburgerIcon.png";
import "./navbar.css";
import Button from "../Button";

import { Link } from 'react-router-dom';

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
{/*                             <NavLinkMobile to='/standings' activestyle="true">
                                Standings
                            </NavLinkMobile> */}
{/*                             <NavLinkMobile to='/standings' activestyle="true">
                                Standings
                            </NavLinkMobile> */}
                            <NavLinkMobile to='/series' activestyle="true">
                                Series 
                            </NavLinkMobile>
                        </NavMenuMobile>
                    </NavMobileThree>
                    <NavMobileFour>
                        <NavMenuMobile>
                            <NavLinkMobile to='/profile' activestyle="true">
                                Profile
                            </NavLinkMobile>
                            <NavLinkMobile to='/allStatistics' activestyle="true">
                                Statistics
                            </NavLinkMobile>
                        </NavMenuMobile>
                    </NavMobileFour>
                    <NavMobileFourMobile>
                        <NavMenuMobile>
                            <NavLinkLogin to='/login' activestyle="true">
                                Login
                            </NavLinkLogin>
                        </NavMenuMobile>
                    </NavMobileFourMobile>
                    
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
                        <NavLink to='/live' className="link" activestyle="true">
                            Live
                        </NavLink>
                        <NavLink to='/schedule' className="link" activestyle="true">
                            Schedule
                        </NavLink>
{/*                         <NavLink to='/standings' className="link" activestyle="true">
                            Standings
                        </NavLink> */}
                        <NavLink to='/series' className="link" activestyle="true">
                            Series
                        </NavLink>
{/*                         <NavLink to='/standings' activestyle="true">
                            Standings
                        </NavLink> */}
                        <NavLink to='/profile' className="link" activestyle="true">
                            Profile
                        </NavLink>
{/*                         <NavLink to='/statistics' activestyle="true">
                            Statistics
                        </NavLink> */}
                        <NavLink to='/allStatistics' className="link" activestyle="true">
                            Statistics
                        </NavLink>
                        <div className="move">
                            <Link to ="/login" className="none">
                                <Button>
                                    LOGIN
                                </Button>
                            </Link>
                        </div>
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

