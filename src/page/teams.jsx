import React from "react";
import Navbar from "../components/Navbar";
import { Footer } from "../components/Footer";

import { TopContainer, BackgroundContainer, TeamsContainer } from "../pageStyles/teams";

import "../pageStyles/teams.js";


const Teamspage = () => {
    return (
        <>
            <TopContainer>
                <BackgroundContainer>
                    <TeamsContainer>

                    </TeamsContainer>
                </BackgroundContainer>
            </TopContainer>
            <Navbar />
            <Footer />
        </>
    );
};

export default Teamspage;