import styled from "styled-components";
import Ruined2 from "../assets/illustrations/Ruined2.jpeg";
import { theme } from "../themes.js"; 

export const BackgroundContainer = styled.div`
    width: 100%;
    height: 100%;
    background-color: rgba(55, 55, 55, 0.6);
    display: flex;
    flex-direction: column;
    align-items: center;
    break-inside: avoid;
`;

export const TopContainer = styled.div`
    width: 100%;
    height: 100%;
    background-image: url(${Ruined2});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-color: ${theme.primary};
`;

export const TeamsContainer = styled.div`
    width: 80%;
    height: 1000px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 140px;
`;
