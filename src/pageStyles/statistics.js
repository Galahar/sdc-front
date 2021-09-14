import styled from "styled-components";
import Ruined2 from "../assets/illustrations/Ruined2.jpeg";
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
`;

export const TopContainer = styled.div`
    width: 100%;
    height: 100vh;
    background-image: url(${Ruined2});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-color: ${theme.primary};
    outline: 1px solid red;
`;

export const StatisticsContainer = styled.div`
    width: 80%;
    height: 650px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 0px;
    margin-left: 170px;
`;  

export const StatisticsLinkContainer = styled.div`
    width: 80%;
    height: 600px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const StatsLink = styled(Link)`
    height: 43px;
    color: #f2d492;
    text-transform: uppercase;
    text-align: center;
    text-decoration: none;
    font-size: 40px;
    font-weight: 600;
    letter-spacing: .08em;
    padding: 0 20px;
    padding-top: 27px;

    :after {
        content: "";
        display: block;
        position: relative;
        width: 0% ;
        padding-top: 18px;
        border-bottom: 6px solid #A379C9;
        transition: width .5s ease, background-color .5s ease;
    }

    :hover:after {
        width: 100%;
    }
`;