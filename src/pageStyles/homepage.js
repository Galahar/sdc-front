import styled from "styled-components";
import { theme } from "../themes.js";
import { Element } from "react-scroll";



/* import coolLeague1Image from "../assets/illustrations/coolLeague1.jpg"; */
import coolLeague2Image from "../assets/illustrations/coolLeague2.jpg";
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

export const ContentContainer = styled(Element)`
    width: 100%;
    height: 1000px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: black;
    
`;

export const ContentTextContainer = styled.div`
    width: 80%;
    height: 65%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    letter-spacing: .3em;
    outline: 2px solid red;
`;

export const ContentText = styled.h3`
    font-size: 2.8vh;
    color: #FFF;
    position: relative;
    word-wrap: break-word;
    text-align: center;
    white-space: nowrap;
    overflow: visible;
    bottom: 50px;
`;