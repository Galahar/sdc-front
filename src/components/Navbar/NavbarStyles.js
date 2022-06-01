import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../themes.js";

export const Nav = styled.nav`
    overflow: hidden;
    position: fixed;
    width: 100%;
    z-index: 9999;
    top: 0;
    transition: all 0.35s ease-in-out;
    :hover {
        transition: all 0.5s ease-in-out;
        background-color: ${theme.summer};
        /*box-shadow: 0 1px 40px -8px rgb(0 0 0 / 50%);*/
	}
`;

export const NavMobile = styled.div`
    display: flex;
    position: fixed;
    z-index: 9999;
    top: 0;
    width: 100%;
    height: 100px;
    background-color: ${theme.summer};
    display: none;
    @media screen and (max-width: 1024px) {
        animation: fadeInAnimation ease 0.5s;
        animation-iteration-count: 1;
        animation-fill-mode: forwards;
        display: block;
    }
    
`;

export const NavMobileTwo = styled.div`
    display: flex;
    position: fixed;
    z-index: 9999;
    top: 100px;
    width: 100%;
    height: 100px;
    background-color: ${theme.summer};
    display: none;
    @media screen and (max-width: 1024px) {
        animation: fadeInAnimation ease 0.5s;
        animation-iteration-count: 1;
        animation-fill-mode: forwards;
        display: block;
    }
    left: 0px;
`;

export const NavMobileThree = styled.div`
    display: flex;
    position: fixed;
    z-index: 9999;
    top: 200px;
    width: 100%;
    height: 100px;
    background-color: ${theme.summer};
    display: none;
    @media screen and (max-width: 1024px) {
        animation: fadeInAnimation ease 0.5s;
        animation-iteration-count: 1;
        animation-fill-mode: forwards;
        display: block;
    }
    left: 0px;
`;

export const NavMenu = styled.div`
    display: flex;
    height: 80px;
    flex-direction: column;
    align-items: center;
    @media screen and (max-width: 1024px) {
        display: none;
    }
    :hover {
        transition: all 0.5s ease-in-out;
        background-color: ${theme.summer};
        /*box-shadow: 0 1px 40px -8px rgb(0 0 0 / 50%);*/
	}
`;

export const NavMenuMobile = styled.div`
    display: flex;
    background-color: ${theme.summer};
    height: 100px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
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
        border-bottom: 6px solid #fcbf49;
        transition: width .5s ease, background-color .5s ease;
    }

    :hover:after {
        width: 100%;
    }
`;

export const NavLinkMobile = styled(Link)`
    height: 30px;
    width: 80px;
    color: ${theme.textColor};
    text-transform: uppercase;
    text-align: center;
    text-decoration: none;
    font-size: 15px;
    font-weight: 600;
    letter-spacing: .08em;
    padding: 0 20px;
    padding-top: 10px;

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
