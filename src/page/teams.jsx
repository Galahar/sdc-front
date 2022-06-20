import React from "react";
import Navbar from "../components/Navbar";
import { Footer } from "../components/Footer";

import { TopContainer, BackgroundContainer, TeamsContainer, TeamsInnerContainer, 
    ITC, 
    ITCTeamImageContainer,
    TeamNameITCText,
    TeamNameITCTextContainer,
    TextImageMarginer,
    CaptainViceCaptainText} from "../pageStyles/teams";

import "../pageStyles/teams.js";
import "../pageStyles/teams.css";
import teamIMG1 from "../assets/illustrations/team1.png";
import teamIMG2 from "../assets/illustrations/team2.png";
import teamIMG3 from "../assets/illustrations/team3.png";
import teamIMG4 from "../assets/illustrations/team4.png";
import teamIMG5 from "../assets/illustrations/team5.png";
import teamIMG6 from "../assets/illustrations/team6.png";
import teamIMG7 from "../assets/illustrations/team7.png";
import teamIMG8 from "../assets/illustrations/team8.png";
import teamIMG9 from "../assets/illustrations/team9.jpg";
import teamIMG10 from "../assets/illustrations/Team10.png";


const Teamspage = () => {
    return (
        <>
            <TopContainer>
                <BackgroundContainer>
                    <TeamsContainer>
                        <TeamsInnerContainer>
                            <ITC className="itcLoadIn">
                                <TeamNameITCTextContainer style={{ backgroundImage: "linear-gradient(#ff3c3c, #F97373)" }}>
                                    <TeamNameITCText>
                                        Veibae Simps
                                    </TeamNameITCText>
                                </TeamNameITCTextContainer>
                                <ITCTeamImageContainer>
                                <TextImageMarginer />
                                    <img className="img-resizeTeam" src={teamIMG1} alt="Team Logo"></img>
                                </ITCTeamImageContainer>
                                <TextImageMarginer />
                                <CaptainViceCaptainText>
                                    Captain (C): Aidon
                                </CaptainViceCaptainText>
                                <CaptainViceCaptainText>
                                    Vice Captain (VC): Hermy
                                </CaptainViceCaptainText>
                            </ITC>
                            <ITC className="itcLoadIn">
                                <TeamNameITCTextContainer style={{ backgroundImage: "linear-gradient(#8ccc42, #B8EA7E)" }}>
                                    <TeamNameITCText>
                                        High Five, Daisy!
                                    </TeamNameITCText>
                                </TeamNameITCTextContainer>
                                <ITCTeamImageContainer>
                                <TextImageMarginer />
                                    <img className="img-resizeTeam" src={teamIMG2} alt="Team Logo"></img>
                                </ITCTeamImageContainer>
                                <TextImageMarginer />
                                <CaptainViceCaptainText>
                                    Captain (C): blossøm
                                </CaptainViceCaptainText>
                                <CaptainViceCaptainText>
                                    Vice Captain (VC): banana ooÿoo 
                                </CaptainViceCaptainText>
                            </ITC>
                            <ITC className="itcLoadIn">
                                <TeamNameITCTextContainer style={{ backgroundImage: "linear-gradient(#634389, #9079AB)" }}>
                                    <TeamNameITCText>
                                        Cobra Kai
                                    </TeamNameITCText>
                                </TeamNameITCTextContainer>
                                <ITCTeamImageContainer>
                                <TextImageMarginer />
                                    <img className="img-resizeTeam" src={teamIMG3} alt="Team Logo"></img>
                                </ITCTeamImageContainer>
                                <TextImageMarginer />
                                <CaptainViceCaptainText>
                                    Captain (C): Mattsey
                                </CaptainViceCaptainText>
                                <CaptainViceCaptainText>
                                    Vice Captain (VC): Payneless
                                </CaptainViceCaptainText>
                            </ITC>
                            <ITC className="itcLoadIn">
                                <TeamNameITCTextContainer style={{ backgroundImage: "linear-gradient(#2c5881, #678BAD)" }}>
                                    <TeamNameITCText>
                                        NCOG
                                    </TeamNameITCText>
                                </TeamNameITCTextContainer>
                                <ITCTeamImageContainer>
                                <TextImageMarginer />
                                    <img className="img-resizeTeam" src={teamIMG4} alt="Team Logo"></img>
                                </ITCTeamImageContainer>
                                <TextImageMarginer />
                                <CaptainViceCaptainText>
                                    Captain (C): Łukê
                                </CaptainViceCaptainText>
                                <CaptainViceCaptainText>
                                    Vice Captain (VC): Prestoman
                                </CaptainViceCaptainText>
                            </ITC>
                            <ITC className="itcLoadIn">
                                <TeamNameITCTextContainer style={{ backgroundImage: "linear-gradient(#2196f3, #60B1F0)" }}>
                                    <TeamNameITCText>
                                        Sussygons
                                    </TeamNameITCText>
                                </TeamNameITCTextContainer>
                                <ITCTeamImageContainer>
                                <TextImageMarginer />
                                    <img className="img-resizeTeam" src={teamIMG5} alt="Team Logo"></img>
                                </ITCTeamImageContainer>
                                <TextImageMarginer />
                                <CaptainViceCaptainText>
                                    Captain (C): Jasco
                                </CaptainViceCaptainText>
                                <CaptainViceCaptainText>
                                    Vice Captain (VC): MoreSleep
                                </CaptainViceCaptainText>
                            </ITC>
                            <ITC className="itcLoadIn">
                                <TeamNameITCTextContainer style={{ backgroundImage: "linear-gradient(#cf3768, #E57FA0)" }}>
                                    <TeamNameITCText>
                                        Team Astral
                                    </TeamNameITCText>
                                </TeamNameITCTextContainer>
                                <ITCTeamImageContainer>
                                <TextImageMarginer />
                                    <img className="img-resizeTeam" src={teamIMG6} alt="Team Logo"></img>
                                </ITCTeamImageContainer>
                                <TextImageMarginer />
                                <CaptainViceCaptainText>
                                    Captain (C): Crucifix
                                </CaptainViceCaptainText>
                                <CaptainViceCaptainText>
                                    Vice Captain (VC): nDivine
                                </CaptainViceCaptainText>
                            </ITC>
                            <ITC className="itcLoadIn">
                                <TeamNameITCTextContainer style={{ backgroundImage: "linear-gradient(#4cb051, #87D58A)" }}>
                                    <TeamNameITCText>
                                        THE CHAOS EMERALDS
                                    </TeamNameITCText>
                                </TeamNameITCTextContainer>
                                <ITCTeamImageContainer>
                                <TextImageMarginer />
                                    <img className="img-resizeTeam" src={teamIMG7} alt="Team Logo"></img>
                                </ITCTeamImageContainer>
                                <TextImageMarginer />
                                <CaptainViceCaptainText>
                                    Captain (C): Sunscorched
                                </CaptainViceCaptainText>
                                <CaptainViceCaptainText>
                                    Vice Captain (VC): Seaboyer09
                                </CaptainViceCaptainText>
                            </ITC>
                            <ITC className="itcLoadIn">
                                <TeamNameITCTextContainer style={{ backgroundImage: "linear-gradient(#01dbed, #85F6FF)" }}>
                                    <TeamNameITCText>
                                        FAIRY TAIL
                                    </TeamNameITCText>
                                </TeamNameITCTextContainer>
                                <ITCTeamImageContainer>
                                <TextImageMarginer />
                                    <img className="img-resizeTeam" src={teamIMG8} alt="Team Logo"></img>
                                </ITCTeamImageContainer>
                                <TextImageMarginer />
                                <CaptainViceCaptainText>
                                    Captain (C): ChrisTeeAnn
                                </CaptainViceCaptainText>
                                <CaptainViceCaptainText>
                                    Vice Captain (VC): Heecher
                                </CaptainViceCaptainText>
                            </ITC>
                            <ITC className="itcLoadIn">
                                <TeamNameITCTextContainer style={{ backgroundImage: "linear-gradient(#018579, #4AE0D2)" }}>
                                    <TeamNameITCText>
                                        Sleep Call Warriors
                                    </TeamNameITCText>
                                </TeamNameITCTextContainer>
                                <ITCTeamImageContainer>
                                <TextImageMarginer />
                                    <img className="img-resizeTeam" src={teamIMG9} alt="Team Logo"></img>
                                </ITCTeamImageContainer>
                                <TextImageMarginer />
                                <CaptainViceCaptainText>
                                    Captain (C): ZoranosLoL
                                </CaptainViceCaptainText>
                                <CaptainViceCaptainText>
                                    Vice Captain (VC): Tonguey
                                </CaptainViceCaptainText>
                            </ITC>
                            <ITC className="itcLoadIn">
                                <TeamNameITCTextContainer style={{ backgroundImage: "linear-gradient(#ff7b00, #FFBE81)" }}>
                                    <TeamNameITCText>
                                        The Sound 11
                                    </TeamNameITCText>
                                </TeamNameITCTextContainer>
                                <ITCTeamImageContainer>
                                <TextImageMarginer />
                                    <img className="img-resizeTeam" src={teamIMG10} alt="Team Logo"></img>
                                </ITCTeamImageContainer>
                                <TextImageMarginer />
                                <CaptainViceCaptainText>
                                    Captain (C): Sir Ratcha
                                </CaptainViceCaptainText>
                                <CaptainViceCaptainText>
                                    Vice Captain (VC): 	xPhoenixGirl
                                </CaptainViceCaptainText>
                            </ITC>
                        </TeamsInnerContainer>
                    </TeamsContainer>
                </BackgroundContainer>
            </TopContainer>
            <Navbar />
            <Footer />
        </>
    );
};

export default Teamspage;