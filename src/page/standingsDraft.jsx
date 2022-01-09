import React from "react";
import Navbar from "../components/Navbar";
import { Footer } from "../components/Footer";
import { BackgroundContainer, TeamsContainer, TeamsInnerContainer, TopContainer, NavigationDiv } from "../pageStyles/standingsDraft";

import "../pageStyles/standings.css";

/* import teamIMG1 from "../assets/illustrations/teamIMG1.png";
import teamIMG2 from "../assets/illustrations/teamIMG2.png";
import teamIMG3 from "../assets/illustrations/teamIMG3.png";
import teamIMG4 from "../assets/illustrations/teamIMG4.png";
import teamIMG5 from "../assets/illustrations/teamIMG5.png";
import teamIMG6 from "../assets/illustrations/teamIMG6.png";
import teamIMG7 from "../assets/illustrations/teamIMG7.png";
import teamIMG8 from "../assets/illustrations/teamIMG8.png";
import teamIMG9 from "../assets/illustrations/teamIMG9.png";
import teamIMG10 from "../assets/illustrations/teamIMG10.png";
import teamIMG11 from "../assets/illustrations/teamIMG11.png";
import teamIMG12 from "../assets/illustrations/teamIMG12.png";

import sdcIcon from "../assets/illustrations/sdcIconSmall.png"; */

const StandingsDraft = () => {
    return (
        <>
            <Navbar />
                <TopContainer>
                    <BackgroundContainer>
                        <TeamsContainer>
                            <TeamsInnerContainer>
                                <NavigationDiv>

                                </NavigationDiv>
                            </TeamsInnerContainer>
                        </TeamsContainer>
                    </BackgroundContainer>
                </TopContainer>

            <Footer />
        </>
    );
};

export default StandingsDraft;