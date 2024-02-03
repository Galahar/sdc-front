import React from "react";
import { BackgroundFilter, TopContainer, ContentContainer, TournamentDiv } from "../pageStyles/loginpage.js";
import Navbar from "../components/Navbar";
import { Footer } from "../components/Footer";

import "../pageStyles/loginpage.css";

const loginpage = () => {
    return (
        <>
            <Navbar />
            <TopContainer>
                <BackgroundFilter>
                    <ContentContainer>
                        <TournamentDiv>
                        <div className="padding">
                            <label for="username">Username: </label>
                            <input type="text" id="username" name="username" />
                        </div>
                        <div className="paddingpw">
                            <label for="pass">Password: </label>
                            <input type="password" id="pass" name="password" minlength="8" required />
                        </div>
                        <input className="margin" type="submit" value="Sign in" />

                        </TournamentDiv>
                    </ContentContainer>
                </BackgroundFilter>
            </TopContainer>
            <Footer />
        </>
    );
};

export default loginpage;