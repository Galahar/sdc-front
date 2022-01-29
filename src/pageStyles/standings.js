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

export const ContentFilter = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    break-inside: avoid;
    overflow-x: hidden;
    background-color: rgba(55, 55, 55, 0.6);
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
    width: 140px;
    height: 961px;
    background-color: #23292E;
    outline: 1px solid black;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
`;

export const SDCIconContainer = styled.div`
    width: 100%;
    height: 267px;
    border-bottom: 1px solid white;
    background-color: black;
`;

export const SDCIconImageContainer = styled.div`
    width: 100%;
    height: 100px;
    align-items: center;
    justify-content: center;
`;

export const CaptainLabelContainer = styled.div`
    width: 100%;
    height: 34px;
    border-bottom: 1px solid white;
    background-color: black;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const CaptainLabelText = styled.div`
    font-size: 20px;
    font-weight: 600;
    color: white;
`;

export const ScheduleDatesContainer = styled.div`
    width: 100%;
    height: 52px;
    background-color: black;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const ScheduleDatesText = styled.div`
    font-size: 15px;
    font-weight: 600;
    color: white;
`;

export const TotalContainer = styled.div`
    width: 100%;
    height: 52px;
    background-color: black;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const TotalText = styled.div`
    font-size: 20px;
    font-weight: 600;
    color: white;
`;

export const TeamName = styled.div`
    width: 100%;
    height: 137px;
`;


export const TeamNameTextContainer = styled.div`
    width: 100%;
    height: 32px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    border-radius: 25px;
    margin-top: 50px;
    margin-left: 5px;
`;

export const TeamNameText = styled.p`
    font-size: 15px;
    font-weight: 600;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    color: black;
    overflow-wrap: break-word;
`;

export const TeamImageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 160px;
    outline: 1px solid white;
    margin-top: 55px;
`;

export const TeamCaptains = styled.div`
    width: 100%;
    height: 35px;
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
    height: 50px;
    /* background-color: #22FC3F; */
    background-color: rgb(35, 41, 46);
    border-bottom: 2px solid white;
`;

export const SC2 = styled.div`
    width: 100%;
    height: 50px;
    /* background-color: #BEE6CE; */
    background-color: rgb(35, 41, 46);
    border-bottom: 2px solid white;
`;

export const SC3 = styled.div`
    width: 100%;
    height: 50px;
    /* background-color: #F8AD9D; */
    background-color: rgb(35, 41, 46);
    border-bottom: 2px solid white;
`;

export const SC4 = styled.div`
    width: 100%;
    height: 50px;
    /* background-color: #ea5348; */
    background-color: rgb(35, 41, 46);
    border-bottom: 2px solid white;
`;


export const MarginLargeResize = styled.div`
    width: 100%;
    height: 200px;
`;