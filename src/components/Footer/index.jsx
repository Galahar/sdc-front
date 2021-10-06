import React from "react";
import styled from "styled-components";
import { theme } from "../../themes.js";
import { DiscIcon } from "../LogoDiscord/index.jsx";
import { Link } from "react-router-dom";

const FooterContainer = styled.div`
    width: 100%;
    min-height: 250px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${theme.primary};
    position: relative;
    @media screen and (max-width: 1024px) {
        min-height: 400px;
    }
`;

const FooterLinksContainer = styled.div`
    width: 50%;
    height: 60%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 50px;
    @media screen and (max-width: 1024px) {
        width: 30%;
        flex-direction: column;
    }
`;

const FooterLink = styled(Link)`
    color: ${theme.textColor};
    text-transform: uppercase;
    text-align: center;
    text-decoration: none;
    font-size: 20px;
    font-weight: 600;
    letter-spacing: .08em;
    padding: 0 20px;
    padding-top: 20px;
    @media screen and (max-width: 1024px) {
        font-size: 17px;
    }
`;

const FooterMargin = styled.div`
    width: 30%;
    height: 10px;
    @media screen and (min-width: 1024px) {
        height: 10px;
    }
`;

export function Footer(props) {
    return (
        <FooterContainer>
            <FooterLinksContainer>
                <FooterLink to='/live' activeStyle>
                    Home
                </FooterLink>
                <FooterLink to='/live' activeStyle>
                    Live
                </FooterLink>
                <FooterLink to='/schedule' activeStyle>
                    Schedule
                </FooterLink>
            </FooterLinksContainer>
            <DiscIcon />
            <FooterMargin />
            <FooterLinksContainer>
                <FooterLink to='/teams' activeStyle>
                    Teams
                </FooterLink>
                <FooterLink to='/standings' activeStyle>
                    Standings
                </FooterLink>
                <FooterLink to='/statistics' activeStyle>
                    Statistics
                </FooterLink>
            </FooterLinksContainer>
        </FooterContainer>
    );
}