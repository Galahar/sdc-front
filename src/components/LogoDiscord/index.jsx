import React from "react";
import styled from "styled-components";
import DiscLogo from "../../assets/illustrations/Discord-Logo+Wordmark-White.png";
import "./Logo.css";

const IconContainer = styled.div`
    display: flex;
    flex-direction: row;
    padding: 0 25px;
    padding-top: 10px;
`;

export function DiscIcon(props) {
    return (
        <IconContainer>

            <a target="_blank" rel="noreferrer" href="https://discord.com/invite/jUMzGUs">
                <img className="img-resizeDisc" src={DiscLogo} alt="Seasonal Draft Championship Logo"></img>
            </a>

        </IconContainer>
    );
};