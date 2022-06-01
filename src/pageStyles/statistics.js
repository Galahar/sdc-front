import styled from "styled-components";
import Ruined2 from "../assets/illustrations/coveBK.jpg";
import { theme } from "../themes.js"; 
import { Link } from "react-router-dom";

export const BackgroundContainer = styled.div`
    width: 100%;
    height: 100%;
    background-color: rgba(55, 55, 55, 0.6);
    display: flex;
    flex-direction: column;
    align-items: center;
    break-inside: avoid;
    overflow-x: hidden;
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

export const StatisticsContainer = styled.div`
    width: 80%;
    height: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 260px;
    margin-left: 0px;
    @media screen and (max-width: 800px) {
        margin-left: 40px;
    }
`;  

export const StatisticsLinkContainer = styled.div`
    width: 80%;
    height: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
`;

export const StatsLinkHeader = styled.h2`
    color: #f2d492;
    text-transform: uppercase;
    text-align: center;
    text-decoration: none;
    font-size: 30px;
    font-weight: 600;
    letter-spacing: .08em;
`;

export const StatsLinkNormal = styled.p`
    color: #f2d492;
    text-transform: uppercase;
    text-align: center;
    text-decoration: none;
    font-size: 23px;
    font-weight: 600;
    letter-spacing: .08em;
`;

export const StatsLink = styled(Link)`
    color: #f2d492;
    text-transform: uppercase;
    text-align: center;
    text-decoration: none;
    font-size: 23px;
    font-weight: 600;
    letter-spacing: .08em;
    :after {
        content: "";
        display: block;
        position: relative;
        width: 0% ;
        padding-top: 15px;
        border-bottom: 5px solid #A379C9;
        transition: width .5s ease, background-color .5s ease;
    }

    :hover:after {
        width: 100%;
    }
`;

export const GoogleSheetsContainer = styled.div`
    width: 90%;
    height: 800px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-left: 50px;
    margin-top: 150px;
    outline: 10px solid black;
    background-color: gray;
    @media screen and (max-width: 768px) {
        display: none;
    }
`;  

export const GoogleSheetsContainerMobile = styled.div`
    width: 80%;
    height: 800px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-left: 50px;
    margin-top: 150px;
    outline: 10px solid black;
    background-color: gray;
    @media screen and (min-width: 768px) {
        display: none;
    }
`;  

export const BottomMargin = styled.div`
    width: 90%;
    height: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-left: 50px;
    margin-top: 0px;
`;  


