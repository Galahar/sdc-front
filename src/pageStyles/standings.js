import styled from "styled-components";
import { theme } from "../themes.js"; 

export const BackgroundContainer = styled.div`
    width: 100%;
    height: 100%;
    background-color: ${theme.primaryLight};
    display: flex;
    flex-direction: row;
    align-items: center;
    break-inside: avoid;
`;

export const TopContainer = styled.div`
/*     width: 100%;
    height: 110vh;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-color: ${theme.primary}; */
`;

export const StandingsContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 140px;
	padding-bottom: 150px;
`;

export const SDCIconContainer = styled.div`
    width: 100%;
    height: 297px;
    border-bottom: 1px solid white;
    background-color: black;
`;

export const SDCIconImageContainer = styled.div`
    width: 100%;
    height: 100px;
    align-items: center;
    justify-content: center;
`;

export const LabelContainer = styled.div`
    width: 768px;
    min-height: 34px;
    background-color: ${theme.primary};
    display: flex;
    flex-direction: row;
	cursor: context-menu;
	@media screen and (max-width: 768px) {
        width: 100%;
    }
`;

export const Label1 = styled.div`
	width: 40%;
	padding-left: 15px;
    min-height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
	font-size: 20px;
    font-weight: 600;
	color: ${theme.highlightOrange};
	background-color: ${theme.mediumBlue};
`;

export const Labels = styled.div`
	width: 20%;
    min-height: 100%;
    display: flex;
    flex-direction: column;
	align-items: center;
    justify-content: center;
	text-align: center;
	font-size: 20px;
    font-weight: 600;
	color: ${theme.highlightOrange};
	background-color: ${theme.mediumBlue};
`;

export const TeamRowContainer = styled.div`
    width: 768px;
    min-height: 34px;
    border-bottom: 2px solid ${theme.mediumBlue};
    background-color: ${theme.primary};
    display: flex;
    flex-direction: row;
	@media screen and (max-width: 768px) {
        width: 100%;
    }
`;

export const TeamNameText = styled.div`
	width: 40%;
	padding-left: 15px;
    min-height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
	font-size: 20px;
    font-weight: 600;
	border-left: 3px inset ${theme.mediumBlue};
	border-right: 3px inset ${theme.mediumBlue};
`;

/* ScoreContainers */
export const SC = styled.div`
    width: 20%;
    min-height: 100%;
    display: flex;
    flex-direction: column;
	align-items: center;
    justify-content: center;
	font-size: 20px;
    font-weight: 600;
	border-right: 3px inset ${theme.mediumBlue};
`;