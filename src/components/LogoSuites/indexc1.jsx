import React from "react";
import styled from "styled-components";
import C1Logo from "../../assets/illustrations/Suits_C1.png";
import "./LogoSuites.css";

const IconContainer = styled.div`
    display: flex;
    flex-direction: row;
`;

export function C1Icon(props) {
    return (
        <IconContainer>
            <img className="img-resizeSuites" src={C1Logo} alt="C1 Card Suites Logo"></img>
        </IconContainer>
    );
};