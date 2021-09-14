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
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 140px;
`;

export const TeamsInnerContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding-bottom: 150px;
    flex-wrap: wrap;
    gap: 50px;
`;

export const TeamRowContainer = styled.div`
    width: 90%;
    height: 35%;
    outline: 2px solid blue;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: left;
`;

/* Abbreviation IndividualTeamContainer */
export const ITC = styled.div`
    width: 250px;
    height: 280px;
    background-color: #23292E;
    outline: 1px solid black;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
`;

export const TeamNameITCTextContainer = styled.div`
    width: 230px;
    height: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 25px;
    margin-top: 25px;
`;

export const TeamNameITCText = styled.p`
    font-size: 16px;
    font-weight: 600;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: black;
`;

export const TextImageMarginer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 106%;
    height: 20px;
`;

export const ITCTeamImageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 115px;
`;

export const CaptainViceCaptainText = styled.div`
    font-size: 16px;
    font-weight: normal;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    color: white;
`;
