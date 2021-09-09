import React from "react";
import styled from "styled-components";
import H1Logo from "../../assets/illustrations/Suits_H1.png";
import "./LogoSuites.css";

const IconContainer = styled.div`
    display: flex;
    flex-direction: row;
`;

export function H1Icon(props) {
    return (
        <IconContainer>
            <img className="img-resizeSuites" src={H1Logo} alt="C1 Card Suites Logo"></img>
        </IconContainer>
    );
};