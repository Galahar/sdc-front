import React from "react";
import Navbar from "../components/Navbar";
import { Footer } from "../components/Footer";
import { BackgroundContainer, TopContainer, StandingsContainer, StandingsImageContainer } from "../pageStyles/standings";
import StandingsImage from "../assets/illustrations/standings.png" 

const Standingspage = () => {
    return (
        <>
            <BackgroundContainer>
                <TopContainer>
                    <StandingsContainer>
                        <StandingsImageContainer>
                            <img src={StandingsImage} alt="Standings"></img>
                        </StandingsImageContainer>
                    </StandingsContainer>
                </TopContainer>
            </BackgroundContainer>
            <Navbar />
            <Footer />
        </>
    );
};

export default Standingspage;