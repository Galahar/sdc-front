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
    height: 100%;
    background-image: url(${Ruined1});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-color: ${theme.primary};
`;

export const TopMarginer = styled.div`
    width: 100%;
    height: 100px;
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
    gap: 50px;
`;

export const HeaderTextContainer = styled.div`
    width: 60%;
    height: 8%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const TitleText = styled.h1`
    font-size: 30px;
    white-space: nowrap;
    margin-top: 0;
    margin-bottom: 0;
    color: #f2d492;
    text-shadow: 2px 2px 0 black, 1px 1px 0 black, 2px 2px 0 black;
    overflow: hidden;
`;

export const ScheduleVersusContainer = styled.div`
    width: 100%;
    height: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #BAA7B0;
    border-radius: 4px;
    border: 5px solid hsl(0, 0%, 40%);
    padding: 3px;
    background: hsl(0, 0%, 20%);
    gap: 15px;
`;



/* Schedule Versus Team Inner Container */
export const SVTIN = styled.div`
    width: 100%;
    height: 10%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    font-weight: 600;
`;

/* Individual Day and Team Containers */

export const IDATC = styled.div`
    width: 100%;
    height: 100%;
    font-size: 15px;
    display: flex;
    align-items: center;
    justify-content: left;
    flex-direction: row;
`;

export const IDATCBlueMarginer = styled.div`
    min-width: 0.2%;
    min-height: 60px;
    background-color: #1B998B;
`;

export const IDATCText = styled.p`
    font-size: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    padding-left: 10px;
    letter-spacing: .09em;
`;

