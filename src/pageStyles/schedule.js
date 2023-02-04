import styled from "styled-components";
import Ruined1 from "../assets/illustrations/Ruined1.jpeg";
import { theme } from "../themes.js";
import { NavLink as Link } from "react-router-dom";

export const BackgroundContainer = styled.div`
    width: 100%;
    height: 100%;
    background-color: ${theme.primaryLight};
    display: flex;
    flex-direction: column;
    align-items: center;
    break-inside: avoid;
`;

export const TopContainer = styled.div`
/*     width: 100%;
    min-height: 500px;
	display: flex;
	flex-direction: column;
    background-image: url(${Ruined1});
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-color: ${theme.primary}; */
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
    gap: 50px;
	@media screen and (max-width: 1500px) {
        width: 95%;
    }
	@media screen and (max-width: 768px) {
        width: 100%;
    }
`;

export const HeaderTextContainer = styled.div`
    width: 100%;
    height: 8%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const TitleText = styled.h1`
    font-size: 35px;
	display: flex;
    align-items: center;
	text-align: center;
    justify-content: center;
    flex-direction: row;
    margin-top: -40px;
    margin-bottom: 0;
    color: ${theme.titleTextColor};
    text-shadow: 2px 2px 0 black, 1px 1px 0 black, 2px 2px 0 black;
    overflow: hidden;
	cursor: context-menu;
`;

export const DateText = styled.h1`
    font-size: 20px;
	display: flex;
    align-items: center;
	text-align: center;
    justify-content: center;
    flex-direction: row;
    margin-top: 0;
    margin-bottom: 0;
    color: ${theme.titleTextColor};
    text-shadow: 2px 2px 0 black, 1px 1px 0 black, 2px 2px 0 black;
    overflow: hidden;
	cursor: context-menu;
`;

export const FilterText = styled.h1`
    font-size: 30px;
	display: flex;
    align-items: center;
	text-align: center;
    justify-content: center;
    flex-direction: row;
    margin-top: -40px;
    color: ${theme.titleTextColor};
    text-shadow: 2px 2px 0 black, 1px 1px 0 black, 2px 2px 0 black;
    overflow: hidden;
	cursor: context-menu;
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
    border-left: 5px solid ${theme.mediumBlue};
	border-right: 5px solid ${theme.mediumBlue};
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

export const IDATC = styled(Link)`
    width: 100%;
    min-height: 80px;
    font-size: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
	color: ${theme.textColor};
	text-decoration: none;
	text-align: center;
	:hover {
		cursor: pointer;
		background-color: ${theme.lightishBlue};
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
    background-color: ${theme.lightishBlue};
    @media screen and (max-width: 768px) {
        min-width: 100%;
        min-height: 2px;
    }
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

