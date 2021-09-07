import React from "react";
import styled from "styled-components";
import sdcIcon from "../../assets/illustrations/sdcIconSmall.png";
import { Link } from "react-router-dom";
import "./Logo.css";

const IconContainer = styled.div`
    display: flex;
    flex-direction: row;
    padding: 0 25px;
    padding-top: 10px;
`;

export function SDCIcon(props) {
    return (
        <IconContainer>
            <Link to="/">
                <img className="img-resize" src={sdcIcon} alt="Seasonal Draft Championship Logo"></img>
            </Link>
        </IconContainer>
    );
};