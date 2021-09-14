import styled from "styled-components";
import { theme } from "../themes.js";
import { Element } from "react-scroll";



/* import coolLeague1Image from "../assets/illustrations/coolLeague1.jpg"; */
import coolLeague2Image from "../assets/illustrations/coolLeague2.jpg";
import Ruined2 from "../assets/illustrations/Ruined2.jpeg";
/* import sgImage from "../assets/illustrations/sgImage.jpg";
import eliseImage from "../assets/illustrations/elise1.jpg";
import ahriImage from "../assets/illustrations/ahri1.jpg"; */

export const BackgroundFilter = styled.div`
    width: 100%;
    height: 100%;
    background-color: rgba(55, 55, 55, 0.6);
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
    height: 100vh;
    background-image: url(${coolLeague2Image});
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
`;

export const TitleText = styled.h1`
    font-size: 10vh;
    white-space: nowrap;
    margin-top: 0;
    margin-bottom: 0;
    color: #f2d492;
    text-shadow: 3px 3px 0 black, 1px 1px 0 black, 2px 2px 0 black;
`;

export const SeasonText = styled.h2`
    font-size: 10vh;
    white-space: nowrap;
    color: #FFF;
`;

export const MoreInfoContainer = styled.div`
  font-size: 2.7vh;
  text-transform: uppercase;
  font-weight: 600;
  color: #FFF;
  text-shadow: 1px 1px 0 black, 1px 1px 0 black, 2px 2px 0 black;
`;

export const DownArrowContainer = styled.div`
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
    height: 1000px;
    display: flex;
    flex-wrap: wrap;
    background-color: #27252D;
    justify-content: center;
    align-items: center;
    overflow-x: hidden;
    background-image: url(${Ruined2});
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
`;
/* old color above for border-bottom 1C6EA4 */

export const ContentText = styled.p`
    position: relative;
    left: 90px;
        font-size: .8vh;
        font-size: .8vw;
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
    /* border: 20px double red; */
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
`;

