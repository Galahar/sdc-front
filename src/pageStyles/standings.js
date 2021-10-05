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
    width: 90%;
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
`;

export const ITC = styled.div`
    width: 100px;
    height: 905px;
    background-color: #23292E;
    outline: 1px solid white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
`;

export const TeamName = styled.div`
    width: 100%;
    height: 18%;
    background-color: #ff3c3c;
`;

export const TeamNameTextContainer = styled.div`
    width: 100%;
    height: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 25px;
    margin-top: 50px;
    margin-left: 5px;
`;

export const TeamNameText = styled.p`
    font-size: 20px;
    font-weight: 600;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: black;
`;

export const TeamImageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 115px;
    outline: 1px solid white;
    margin-top: 55px;
`;

export const TeamCaptains = styled.div`
    width: 100%;
    height: 30%;
    background-color: black;
    border-bottom: 1px solid white;
`;

export const TeamCaptainsText = styled.div`
    font-size: 15px;
    font-weight: 600;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: white;
`;

/* ScoreContainers */
export const SC1 = styled.div`
    width: 100%;
    height: 30%;
    background-color: #0AFF95;
    border-bottom: 2px solid white;
`;

export const SC2 = styled.div`
    width: 100%;
    height: 30%;
    background-color: #BEE6CE;
`;

export const SC3 = styled.div`
    width: 100%;
    height: 30%;
    background-color: #F8AD9D;
`;

export const SC4 = styled.div`
    width: 100%;
    height: 30%;
    background-color: #0AFF95;
`;

export const ScoreContainerText = styled.p`
    font-weight: 600;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: black;
`;

