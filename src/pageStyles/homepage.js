import styled from "styled-components";
import { theme } from "../themes.js";
import { Element } from "react-scroll";

/* import coolLeague2Image from "../assets/illustrations/coolLeague2.jpg"; */
/* import Ruined2 from "../assets/illustrations/Ruined2.jpeg"; */
import homepageImage from "../assets/illustrations/background1.jpg";
import backgroundImage from "../assets/illustrations/homepageContentIMG.jpg";
import LearnButton from "../components/Button/learnindex";

import background3 from "../assets/illustrations/background3.png"

export const BackgroundFilter = styled.div`
    width: 100%;
    height: 100%;
    background-color: rgba(55, 55, 55, 0.5);
    display: flex;
    flex-direction: column;
    align-items: center;
    break-inside: avoid;
`;

/* const pictureArray = [coolLeague1Image, coolLeague2Image, sgImage, eliseImage, ahriImage];
const randomIndexPicture = Math.floor(Math.random() * pictureArray.length);
const pictureSelected = pictureArray[randomIndexPicture]; */

/* The code above is for maybe doing random pictures later, but the one selected below looks the coolest for now */

export const TopContainer = styled.div`
    width: 100%;
    height: 110vh;
    background-image: url(${homepageImage});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-color: ${theme.primary};
`;

export const TextContainer = styled.div`
    width: 50%;
    height: 58%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 140px;
    letter-spacing: .5em;
    /* outline: 5px solid green; */
    @media screen and (max-width: 650px) {
        margin-top: 30px;
    }
`;

/* export const TitleText = styled.h1`
    font-size: 10vh;
    white-space: nowrap;
    margin-top: 0;
    margin-bottom: 0;
    color: ${theme.lightBlue};
    text-shadow: 3px 3px 0 black, 1px 1px 0 black, 2px 2px 0 black;
    @media screen and (max-width: 1024px) {
        display: none;
    }
`; */

export const TitleText = styled.h1`
    height: 85px;
    font-size: 90px;
    letter-spacing: 5px;
    white-space: nowrap;
    text-transform: uppercase;
    color: ${theme.bright};
    font-family: 'Ubuntu', sans-serif;
    text-shadow: 3px 3px 0 white, 1px 1px 0 white, 2px 2px 0 white;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 950px;
    @media screen and (max-width: 1380px) {
        font-size: 60px;
        margin-left: -125px;
    }
    @media screen and (max-width: 850px) {
        width: 400px;
        font-size: 35px;
        margin-left: 10px;
    }
`;


export const TitleTextResponsive = styled.h1`
    font-size: 10vh;
    white-space: nowrap;
    margin-top: 0;
    margin-bottom: 0;
    color: ${theme.lightBlue};
    text-shadow: 3px 3px 0 black, 1px 1px 0 black, 2px 2px 0 black;
    @media screen and (min-width: 1024px) {
        display: none;
    }
    @media screen and (max-width: 650px) {
        font-size: 5.5vh;
    }
`;

/* export const SeasonText = styled.h2`
    font-size: 11vh;
    white-space: nowrap;
    color: #FFF;
    @media screen and (max-width: 650px) {
        font-size: 6vh;
    }
`; */


export const SeasonText = styled.h1`
    font-size: 120px;
    letter-spacing: 10px;
    white-space: nowrap;
    color: ${theme.text};
    padding-left: 150px;
    margin-top: -25px;
    font-family: 'Permanent Marker', cursive;
    @media screen and (max-width: 1380px) {
        font-size: 50px;
        margin-left: 30px;
    }
    @media screen and (max-width: 850px) {
        padding-left: 25px;
    }
`;


/* export const MoreInfoContainer = styled.div`
    font-size: 2.7vh;
    text-transform: uppercase;
    font-weight: 600;
    color: ${theme.lightBlue};
    text-shadow: 1px 1px 0 black, 1px 1px 0 black, 2px 2px 0 black;
    @media screen and (max-width: 650px) {
        margin-bottom: 0px;
    }
`;

export const DownArrowContainer = styled.div`
    @media screen and (max-height: 600px) {
        display: none;
    } 
`; */
export const MoreInfoContainer = styled.div`
    width: 100%;
    height: 50px;
    margin-top: -40px;
    text-wrap: nowrap;
    @media screen and (max-width: 1380px) {
        margin-top: 0px;
        margin-left: -100px;
    }
    @media screen and (max-width: 850px) {
        margin-left: -225px;
    }
    @media screen and (max-height: 780px) {
        display: none;
    }
`;

export const DownArrowContainer = styled.div`
    width: 100%;
    height: 120px;
    @media screen and (max-width: 1380px) {
        margin-left: -100px;
    }
    @media screen and (max-height: 780px) {
        display: none;
    }
    @media screen and (max-width: 850px) {
        margin-left: -225px;
    }
`;

/* export const ContentContainer = styled(Element)`
    width: 100%;
    height: 1000px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: #0F151A;
    
`; */

export const ContentFilter = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    break-inside: avoid;
    overflow-x: hidden;
    background-color: rgba(55, 55, 55, 0.6);
`;

/* export const ContentContainer = styled(Element)`
    width: 100%;
    height: 1500px;
    display: flex;
    flex-direction: row;
    background-color: #27252D;
    justify-content: center;
    align-items: center;
    overflow-x: hidden;
    background-image: url(${backgroundImage});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-color: ${theme.primary};
`; */

export const ContentContainer = styled.div`
    width: 100%;
    height: 100%;
    margin-top: 80px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

export const ContentDIV = styled.div`
    width: 100%;
    height: 1500px;
    display: flex;
    flex-direction: row;
    background-color: #27252D;
    justify-content: center;
    align-items: center;
    overflow-x: hidden;
    background-image: url(${background3});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-color: ${theme.primary};
`;



export const ContentTextContainer = styled.div`
    width: 40%;
    height: 65%;
    padding-left: 50;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    letter-spacing: .1em;
    border-top: 13px ridge #0AADFF;
    border-bottom: 13px ridge #0AADFF;
    @media screen and (max-width: 1024px) {
        display: none;
    }
`;

export const VideoContainer = styled.div`
    position: relative;
    @media screen and (max-width: 1400px) {
        right: 50px;
    }
    @media screen and (max-width: 1260px) {
        right: 50px;
    }
    @media screen and (max-width: 1150px) {
        display: none;
    }

`;

export const VideoContainerSmall = styled.div`
    position: relative;
    right: 40px;
    @media screen and (min-width: 1150px) {
        display: none;
    }

`;

export const VideoContainerMobile = styled.div`
    width: 10%;
    height: 15%;
    margin-top: 50px;
    margin-right: 310px;
    @media screen and (min-width: 1024px) {
        display: none;
    }
`;

/* old color above for border-bottom 1C6EA4 */

export const ContentText = styled.p`
    position: relative;
    padding-bottom: 50px;
    left: 90px;
    font-size: 11px;
    @media screen and (max-width: 1400px) {
        left: 50px;
        font-size: 14px;
    }
    @media screen and (max-width: 1260px) {
        font-size: 10px;
    }
    @media screen and (max-width: 1024px) {
        display: none;
    }
`;


export const InfoContainer = styled.div`
    width: 40%;
    height: 80%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    border-left: 20px ridge #1C6EA4;
    @media screen and (max-width: 1024px) {
        margin-right: 280px;
        border-left: none;
    }
`;

export const InfoContent = styled.div`
    width: 45%;
    height: 24%;
/*     background-color: grey;
    border-top: 2px solid #1C6EA4; */
`;

export const InfoText = styled.div`
    position: relative;
    top: 20px;
    left: 10px;
    align-items: center;
    justify-content: center;
    white-space: nowrap;
    line-height: 1.5;
    @media screen and (max-width: 650px) {
        left: 40px;
    }
`;

export const InfoTextTwo = styled.div`
    position: relative;
    top: 20px;
    left: 10px;
    align-items: center;
    justify-content: center;
    white-space: nowrap;
    line-height: 1.5;
    @media screen and (max-width: 650px) {
        left: -30px;
    }
`;

export const TitleDiv = styled.div`
    width: 100%;
    height: 100%;
    padding-top: 45px;
    @media screen and (max-width: 1380px) {
        width: 50%;
    }
`;

export const SeriesContainer = styled.div`
    width: 500px;
    height: 740px;
    background-color: ${theme.primary};
    border-top: 3px solid ${theme.border};
    display: flex;
    flex-direction: column;
    margin-top: 80px;
    @media screen and (max-width: 1200px) {
        display: none;
    }
`;

export const UpcomingContainer = styled.div`
    height: 60px;
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
    height: 100px;
    display: flex;
    flex-direction: row;
    transition: all 220ms ease-in-out;
    cursor: pointer;
    &:hover {
        background-color: ${theme.primarylight};
    }
    padding-bottom: 10px;
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
    align-items: end;
    font-family: 'Ubuntu', sans-serif;
    font-size: 15px;
    font-weight: 900;
`;

export const ViewAllContainer = styled.div`
    height: 60px;
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
    cursor: pointer;
    &:hover {
        background-color: ${theme.primarylight};
    }
`;