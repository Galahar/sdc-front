import styled from "styled-components";
import { theme } from "../themes";

import homepageImage from "../assets/illustrations/coolLeague1.jpg"

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
    height: 1200px;
    background-image: url(${homepageImage});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-color: ${theme.primary};
`;

export const ContentContainer = styled.div`
    width: 50%;
    height: 1200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const SeriesContainer = styled.div`
    width: 500px;
    height: 900px;
    background-color: ${theme.primary};
    border-top: 3px solid ${theme.border};
    display: flex;
    flex-direction: column;
    margin-top: 300px;
    margin-bottom: 300px;
    opacity: 0.9;
`;

export const UpcomingContainer = styled.div`
    height: 80px;
    display: flex;
    align-items: end;
    padding-bottom: 10px;
    justify-content: left;
    padding-left: 10px;
    font-family: 'Roboto', sans-serif;
    letter-spacing: 1px;
    text-align: center;
    font-size: 14px;
    border-bottom: 3px solid ${theme.border};
`;

export const SeriesDiv = styled.div`
    width: 100%;
    height: 150px;
    display: flex;
    flex-direction: row;
    transition: all 220ms ease-in-out;
/*     cursor: pointer;
    &:hover {
        background-color: ${theme.primarylight};
    }
    padding-bottom: 10px; */
`;

export const SeriesImage = styled.div`
    width: 200px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const SeriesInfo = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
`;

export const SeriesName = styled.div`
    width: 100%;
    height: 80px;
    display: flex;
    align-items: end;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 15px;
`;

export const SeriesDateTime = styled.div`
    width: 100%;
    height: 80px;
    display: flex;
    font-family: 'Ubuntu', sans-serif;
    font-size: 15px;
    font-weight: 900;
    color: ${theme.text};
    letter-spacing: 1px;
    text-wrap: nowrap;
`;

export const SeriesSignup = styled.div`
    width: 100%;
    height: 80px;
    display: flex;
    align-items: start;
    font-family: 'Ubuntu', sans-serif;
    font-size: 15px;
    font-weight: 900;
`;

export const ViewAllContainer = styled.div`
    height: 100px;
    display: flex;
    align-items: end;
    margin-top: 50px;
    padding-bottom: 10px;
    justify-content: left;
    padding-left: 10px;
    font-weight: 00;
    font-family: 'Roboto', sans-serif;
    letter-spacing: 1px;
    text-align: center;
    font-size: 14px;
    transition: all 220ms ease-in-out;
/*     cursor: pointer;
    &:hover {
        background-color: ${theme.primarylight};
    } */
`;