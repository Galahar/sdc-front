import React from "react";
import { BackgroundFilter, TopContainer, ContentContainer, TournamentDiv } from "../pageStyles/game3.js";
import Navbar from "../components/Navbar";
import { Footer } from "../components/Footer";
import Button from "../components/ButtonSingup/index.jsx";

import { Link } from 'react-router-dom';

const game3 = () => {
    return (
        <>
            <Navbar />
            <TopContainer>
                <BackgroundFilter>
                    <ContentContainer className="loadInAnim">
                        {/* If Singups closed, below component disspear */}
                        <Link to={{ pathname: "https://challonge.com/tournaments/signup/sRc6qQo5bP" }} target="_blank" className="none" >
                            <Button>
                                Sign Up
                            </Button>
                        </Link>
                        <TournamentDiv>
                            <iframe src="https://challonge.com/cwm1w8qb/module" width="100%" height="500" frameborder="0" scrolling="auto" allowtransparency="true"></iframe>
                        </TournamentDiv>
                    </ContentContainer>
                </BackgroundFilter>
            </TopContainer>
            <Footer />
        </>
    );
};

export default game3;