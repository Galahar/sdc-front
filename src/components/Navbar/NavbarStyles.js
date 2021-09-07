import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../themes.js";

export const Nav = styled.nav`
    background-color: ${theme.primary};
    overflow: hidden;
    border-bottom: 2px solid #4B462F;
    position: fixed;
    width: 100%;
`;

export const NavMenu = styled.div`
    display: flex;
    height: 78px;
    flex-direction: column;
    align-items: center;
`;

export const NavLink = styled(Link)`
    height: 43px;
    color: ${theme.textColor};
    text-transform: uppercase;
    text-align: center;
    text-decoration: none;
    font-size: 17px;
    font-weight: 600;
    letter-spacing: .08em;
    padding: 0 20px;
    padding-top: 30px;
    border-bottom: 3px solid transparent;
    :hover {
        border-bottom: 3px solid ${theme.highlightPrimary};
	}
    &.active {
        border-bottom: 3px solid ${theme.highlightPrimary};
    }
`;

export const BottomNav = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
`;

