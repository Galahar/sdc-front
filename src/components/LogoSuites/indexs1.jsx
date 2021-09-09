import React from "react";
import styled from "styled-components";
import S1Logo from "../../assets/illustrations/Suits_S1.png";
import "./LogoSuites.css";

const IconContainer = styled.div`
    display: flex;
    flex-direction: row;
`;

export function S1Icon(props) {
    return (
        <IconContainer>
            <img className="img-resizeSuites" src={S1Logo} alt="C1 Card Suites Logo"></img>
        </IconContainer>
    );
};