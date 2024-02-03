import homepageImage from "../assets/illustrations/coolLeague2.jpg"
import styled from "styled-components";
import { theme } from "../themes";

export const BackgroundFilter = styled.div`
    width: 100%;
    height: 100%;
    background-color: rgba(55, 55, 55, 0.5);
    display: flex;
    flex-direction: column;
    align-items: center;
    break-inside: avoid;
`;

export const TopContainer = styled.div`
    width: 100%;
    height: 110vh;
    background-image: url(${homepageImage});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-color: ${theme.primary};
`;

export const ContentContainer = styled.div`
    width: 50%;
    height: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 200px;
`;

export const TournamentDiv = styled.div`
    width: 500px;
    height: 300px;
    background-color: ${theme.primary};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    text-align: center;
    font-size: 25px;
    font-family: 'Ubuntu', sans-serif;
    padding-top: 50px;
    border-style: outset;
    border-width: 5px;
    margin-bottom: 0px;
    border-color: ${theme.bright};
`;