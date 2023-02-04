import styled from "styled-components";
import { theme } from "../themes.js";

export const BackgroundContainer = styled.div`
    width: 100%;
    height: 100%;
    background-color: #141D24;
    display: flex;
    flex-direction: column;
    align-items: center;
    break-inside: avoid;
`;

export const ScheduleContainer = styled.div`
    width: 1470px;
    height: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 140px;
	margin-bottom: 140px;
    letter-spacing: .3em;
	@media screen and (max-width: 1500px) {
        width: 95%;
    }
	@media screen and (max-width: 768px) {
        width: 100%;
    }
`;

export const HeaderTextContainer = styled.div`
	width: 100%;
    min-height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
	
	@media screen and (max-width: 768px) {
        min-height: 50px;
    }
`;

export const TitleText = styled.h1`
	width: 45%;
    font-size: 30px;
	display: flex;
    align-items: start;
	text-align: center;
    justify-content: center;
    flex-direction: row;
    margin-top: 0;
    margin-bottom: 0;
    color: ${theme.textColor};
    text-shadow: 2px 2px 0 black, 1px 1px 0 black, 2px 2px 0 black;
    overflow-wrap: anywhere;
	cursor: context-menu;
	@media screen and (max-width: 768px) {
        font-size: 20px;
    }
`;

export const ScheduleVersusContainer = styled.div`
    width: 100%;
    height: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${theme.primary};
	border-top: 5px solid ${theme.mediumBlue};
	border-right: 5px solid ${theme.mediumBlue};
    border-left: 5px solid ${theme.mediumBlue};
`;



/* Schedule Versus Team Inner Container */
export const SVTIN = styled.div`
    width: 100%;
    min-height: 60px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    font-weight: 600;
    border-bottom: 5px solid ${theme.mediumBlue};
    @media screen and (max-width: 768px) {
        flex-direction: column;
		border-bottom: 0px solid ${theme.mediumBlue};
    }
`;

/* Individual Day and Team Containers */

export const IDATC = styled.div`
    width: 100%;
    min-height: 80px;
    font-size: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
	:hover {
		cursor: pointer;
		background-color: ${theme.lightBlue};
        transition: all 0.5s ease-in-out;
	}
`;

export const IDC = styled.div`
    min-width: 200px;
    min-height: 80px;
    font-size: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
	cursor: context-menu;
	background-color: ${theme.darkBlue};
	    @media screen and (max-width: 768px) {
        flex-direction: column;
		min-width: 100%;
    }
`;

export const IDATCBlueMarginer = styled.div`
    min-width: 2px;
    min-height: 80px;
    background-color: ${theme.lightBlue};
    @media screen and (max-width: 768px) {
        min-width: 100%;
        min-height: 2px;
    }
`;

export const IDATCText = styled.p`
    font-size: 15px;
    display: flex;
    align-items: center;
	text-align: center;
    justify-content: center;
    flex-direction: row;
    letter-spacing: .09em;
`;

export const IDCTitle = styled.p`
	font-size: 18px;
	font-weight: 700;
    display: flex;
    align-items: center;
	text-align: center;
    justify-content: center;
    flex-direction: row;
    letter-spacing: .09em;
	color: ${theme.textColor};
	cursor: context-menu;
`;

