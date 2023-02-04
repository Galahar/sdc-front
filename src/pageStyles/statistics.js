import styled from "styled-components";
import backgroundImage from "../assets/illustrations/homepageContentIMG.jpg";
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
    background-image: url(${backgroundImage});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-color: ${theme.primary};
`;

export const StatisticsContainer = styled.div`
    width: 100%;
    height: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 200px;
    ${'' /* margin-top: 250px; */}
    margin-left: 0px;
    @media screen and (max-width: 1000px) {
        height: 300px;
    }
`;  

export const StatisticsLinkContainer = styled.div`
    width: 80%;
    height: 800px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
`;

export const StatsLinkHeader = styled.h2`
    color: #5CD1FF;
    text-transform: uppercase;
    text-align: center;
    text-decoration: none;
    font-size: 30px;
    font-weight: 600;
    letter-spacing: .08em;
`;

export const StatsLinkNormal = styled.p`
    color: #fff;
    text-align: center;
    text-decoration: none;
    font-size: 23px;
    font-weight: 600;
    letter-spacing: .08em;
`;

export const StatsLinkLink= styled.p`
    color: #fff;
    text-align: center;
    text-decoration: none;
    font-size: 25px;
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
    width: 95%;
    height: 600px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-left: 48px;
    ${'' /* margin-top: 150px; */}
    margin-top: 120px;
    ${'' /* outline: 10px solid rgb(247, 179, 24); */}
    background-color:rgb(0,0,0,0.4) ;
    @media screen and (max-width: 768px) {
        display: none;
    }
`;  

export const GoogleSheetsContainerMobile = styled.div`
    width: 80%;
    height: 600px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-left: 50px;
    margin-top: 150px;
    ${'' /* outline: 10px solid black; */}
    background-color:rgb(0,0,0,0.4) ;
    ${'' /* background-color: gray; */}
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


