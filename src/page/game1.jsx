import React from "react";
import { BackgroundFilter, TopContainer, ContentContainer, TournamentDiv } from "../pageStyles/game1.js";
import Navbar from "../components/Navbar";
import { Footer } from "../components/Footer";
import Button from "../components/ButtonSingup/index.jsx";

import { Link } from 'react-router-dom';


const game1 = () => {
    return (
        <>
            <Navbar />
            <TopContainer>
                <BackgroundFilter>
                    <ContentContainer className="loadInAnim">
                        {/* If Singups closed, below component disspear */}
                        <Link to={{ pathname: "https://challonge.com/tournaments/signup/gx60vXhSXP" }} target="_blank" className="none" >
                            <Button>
                                Sign Up
                            </Button>
                        </Link>
                        <TournamentDiv>
                            <iframe src="https://challonge.com/iviykxdb/module" width="100%" height="500" frameborder="0" scrolling="auto" allowtransparency="true"></iframe>
                        </TournamentDiv>
                    </ContentContainer>
                </BackgroundFilter>
            </TopContainer>
            <Footer />
        </>
    );
};

export default game1;