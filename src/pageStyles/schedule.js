import styled from "styled-components";
import Ruined1 from "../assets/illustrations/Ruined1.jpeg";
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
    height: 150vh;
    background-image: url(${Ruined1});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-color: ${theme.primary};
`;

export const ScheduleContainer = styled.div`
    width: 80%;
    height: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 140px;
    letter-spacing: .3em;
    outline: 5px solid green;
    gap: 50px;
`;

export const HeaderTextContainer = styled.div`
    width: 60%;
    height: 8%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid red;
`;

export const TitleText = styled.h1`
    font-size: 30px;
    white-space: nowrap;
    margin-top: 0;
    margin-bottom: 0;
    color: #f2d492;
    text-shadow: 2px 2px 0 black, 1px 1px 0 black, 2px 2px 0 black;
`;

export const ScheduleVersusContainer = styled.div`
    width: 90%;
    height: 8%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #BAA7B0;
    border-radius: 4px;
    border: 5px solid hsl(0, 0%, 40%);
    padding: 5px;
    background: hsl(0, 0%, 20%);
`;

/* Schedule Versus Team Inner Container */
export const SVTIN = styled.div`
    width: 20%;
    height: 50%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    outline: 1px solid orange;
`;
