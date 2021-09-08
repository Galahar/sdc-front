import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../themes.js";

export const Nav = styled.nav`
    background-color: ${theme.primary};
    overflow: hidden;
    position: fixed;
    width: 100%;
    background: rgba(255,255,255,0);
    z-index: 9999;
    top: 0;
    transition: all 0.35s ease-in-out;
    :hover {
        background: rgba(255,255,255,1);
        transition: all 0.5s ease-in-out;
        background-color: ${theme.primary};
        box-shadow: 0 1px 40px -8px rgb(0 0 0 / 50%);
	}
`;

export const NavMenu = styled.div`
    display: flex;
    height: 80px;
    flex-direction: column;
    align-items: center;
`;

export const NavLink = styled(Link)`
    height: 43px;
    color: ${theme.textColor};
    text-transform: uppercase;
    text-align: center;
    text-decoration: none;
    font-size: 20px;
    font-weight: 600;
    letter-spacing: .08em;
    padding: 0 20px;
    padding-top: 27px;

    :after {
        content: "";
        display: block;
        position: relative;
        width: 0% ;
        padding-top: 18px;
        border-bottom: 6px solid ${theme.highlightPrimary};
        transition: width .5s ease, background-color .5s ease;
    }

    :hover:after {
        width: 100%;
    }
`;

export const BottomNav = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
`;

