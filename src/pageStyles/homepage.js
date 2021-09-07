import styled from "styled-components";
import { theme } from "../themes.js";

import coolLeague1Image from "../assets/illustrations/coolLeague1.jpg";
import coolLeague2Image from "../assets/illustrations/coolLeague2.jpg";
import sgImage from "../assets/illustrations/sgImage.jpg";
import eliseImage from "../assets/illustrations/elise1.jpg";
import ahriImage from "../assets/illustrations/ahri1.jpg";

export const BackgroundFilter = styled.div`
    width: 100%;
    height: 100%;
    background-color: rgba(55, 55, 55, 0.6);
    display: flex;
    flex-direction: column;
    align-items: center;
    break-inside: avoid;
`;

const pictureArray = [coolLeague1Image, coolLeague2Image, sgImage, eliseImage, ahriImage];
const randomIndexPicture = Math.floor(Math.random() * pictureArray.length);
const pictureSelected = pictureArray[randomIndexPicture];

export const TopContainer = styled.div`
    width: 100%;
    height: 100vh;
    background-image: url(${pictureSelected});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-color: ${theme.primary};
`;

export const ContentContainer = styled.div`
    width: 100%;
    height: 100%;

`;
