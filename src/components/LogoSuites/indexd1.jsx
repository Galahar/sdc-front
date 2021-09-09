import React from "react";
import styled from "styled-components";
import D1Logo from "../../assets/illustrations/Suits_D1.png";
import "./LogoSuites.css";

const IconContainer = styled.div`
    display: flex;
    flex-direction: row;
`;

export function D1Icon(props) {
    return (
        <IconContainer>
            <img className="img-resizeSuites" src={D1Logo} alt="C1 Card Suites Logo"></img>
        </IconContainer>
    );
};