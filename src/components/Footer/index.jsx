import React from "react";
import styled from "styled-components";
import { theme } from "../../themes.js";
import { SDCIcon } from "../Logo";
import { DiscIcon } from "../LogoDiscord/index.jsx";
import { Link } from "react-router-dom";

const FooterContainer = styled.div`
    width: 100%;
    height: 125px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: ${theme.primary};
    position: relative;
`;

const FooterLinksContainer = styled.div`
    width: 35%;
    height: 90%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
`;

const FooterLinks = styled.div`
    width: 30%;
    height: 30%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-weight: 600;
    font-size: 18px;
`;

export const NavLinks = styled(Link)`
    font-weight: 600;
    font-size: 18px;
    color: #fff;
    text-decoration: none;
`;

export function Footer(props) {
    return (
        <FooterContainer>
            <SDCIcon />
            <FooterLinksContainer>
                <FooterLinks>
                    <NavLinks to="/live">
                        Live
                    </NavLinks>
                </FooterLinks>
                <FooterLinks>
                    Schedule
                </FooterLinks>
                <FooterLinks>
                    Teams
                </FooterLinks>
                <FooterLinks>
                    Standings
                </FooterLinks>
                <FooterLinks>
                    Statistics
                </FooterLinks>
                <FooterLinks>
                    About us
                </FooterLinks>
            </FooterLinksContainer>
            <DiscIcon />
        </FooterContainer>
    );
}