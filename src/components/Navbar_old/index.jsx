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
                            <NavLinkMobile to='/' activeStyle>
                                Home
                            </NavLinkMobile>
                            <NavLinkMobile to='/live' activeStyle>
                                Live
                            </NavLinkMobile>
                            <NavLinkMobile to='/schedule' activeStyle>
                                Schedule
                            </NavLinkMobile>
                        </NavMenuMobile>
                    </NavMobileTwo>
                    <NavMobileThree>
                        <NavMenuMobile>
                            <NavLinkMobile to='/teams' activeStyle>
                                Teams
                            </NavLinkMobile>
                            <NavLinkMobile to='/standings' activeStyle>
                                Standings
                            </NavLinkMobile>
                            <NavLinkMobile to='/statistics' activeStyle>
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
                            Statistics 123333
                        </NavLink>
                        <NavLink to='/allStatistics' activeStyle>
                            All Statistics
                        </NavLink>
{/*                         <NavLink to='/aboutus' activeStyle>
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

