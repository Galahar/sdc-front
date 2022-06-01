import styled from "styled-components";
import { theme } from "../themes.js";
import { Element } from "react-scroll";

import coveBK from "../assets/illustrations/coveBK.jpg";
import summerIMG from "../assets/illustrations/summerBK.jpg";

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
    height: 105vh;
    background-image: url(${summerIMG});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-color: ${theme.primary};
`;

export const TextContainer = styled.div`
    width: 50%;
    height: 65%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 140px;
    letter-spacing: .3em;
    /* outline: 5px solid green; */
    @media screen and (max-width: 650px) {
        margin-top: 30px;
    }
`;

export const TitleText = styled.h1`
    font-size: 10vh;
    white-space: nowrap;
    margin-top: 0;
    margin-bottom: 0;
    color: #a2d2ff;
    text-shadow: 2px 2px 0 black, 1px 1px 0 black, 2px 2px 0 black;
    @media screen and (max-width: 1024px) {
        display: none;
    }
`;

export const TitleTextResponsive = styled.h1`
    font-size: 10vh;
    white-space: nowrap;
    margin-top: 0;
    margin-bottom: 0;
    color: #f2d492;
    text-shadow: 3px 3px 0 black, 1px 1px 0 black, 2px 2px 0 black;
    @media screen and (min-width: 1024px) {
        display: none;
    }
    @media screen and (max-width: 650px) {
        font-size: 6vh;
    }
`;

export const SeasonText = styled.h2`
    font-size: 10vh;
    white-space: nowrap;
    color: #CAF0F8;
    @media screen and (max-width: 650px) {
        font-size: 6vh;
    }
`;

export const MoreInfoContainer = styled.div`
    font-size: 2.7vh;
    text-transform: uppercase;
    font-weight: 600;
    color: #FFF;
    text-shadow: 1px 1px 0 black, 1px 1px 0 black, 2px 2px 0 black;
    @media screen and (max-width: 650px) {
        margin-bottom: 0px;
    }
`;

export const DownArrowContainer = styled.div`
    @media screen and (max-height: 800px) {
        display: none;
    }
    bottom: 25px;
    left: 50%;
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

export const ContentContainer = styled(Element)`
    width: 100%;
    height: 1500px;
    display: flex;
    flex-direction: row;
    background-color: #27252D;
    justify-content: center;
    align-items: center;
    overflow-x: hidden;
    background-image: url(${coveBK});
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

