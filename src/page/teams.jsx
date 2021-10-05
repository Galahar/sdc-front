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
import teamIMG1 from "../assets/illustrations/teamIMG1.png";
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
                                        FEED TILT COME
                                    </TeamNameITCText>
                                </TeamNameITCTextContainer>
                                <ITCTeamImageContainer>
                                <TextImageMarginer />
                                    <img className="img-resizeTeam" src={teamIMG1} alt="Team Logo"></img>
                                </ITCTeamImageContainer>
                                <TextImageMarginer />
                                <CaptainViceCaptainText>
                                    Captain (C): Mixture
                                </CaptainViceCaptainText>
                                <CaptainViceCaptainText>
                                    Vice Captain (VC): Jasco
                                </CaptainViceCaptainText>
                            </ITC>
                            <ITC className="itcLoadIn">
                                <TeamNameITCTextContainer style={{ backgroundImage: "linear-gradient(#8ccc42, #B8EA7E)" }}>
                                    <TeamNameITCText>
                                        11 Sad Men
                                    </TeamNameITCText>
                                </TeamNameITCTextContainer>
                                <ITCTeamImageContainer>
                                <TextImageMarginer />
                                    <img className="img-resizeTeam" src={teamIMG2} alt="Team Logo"></img>
                                </ITCTeamImageContainer>
                                <TextImageMarginer />
                                <CaptainViceCaptainText>
                                    Captain (C): Henny
                                </CaptainViceCaptainText>
                                <CaptainViceCaptainText>
                                    Vice Captain (VC): Blitzjin
                                </CaptainViceCaptainText>
                            </ITC>
                            <ITC className="itcLoadIn">
                                <TeamNameITCTextContainer style={{ backgroundImage: "linear-gradient(#634389, #9079AB)" }}>
                                    <TeamNameITCText>
                                        OCEAN'S ELEVEN
                                    </TeamNameITCText>
                                </TeamNameITCTextContainer>
                                <ITCTeamImageContainer>
                                <TextImageMarginer />
                                    <img className="img-resizeTeam" src={teamIMG3} alt="Team Logo"></img>
                                </ITCTeamImageContainer>
                                <TextImageMarginer />
                                <CaptainViceCaptainText>
                                    Captain (C): Patrick
                                </CaptainViceCaptainText>
                                <CaptainViceCaptainText>
                                    Vice Captain (VC): Loanrie
                                </CaptainViceCaptainText>
                            </ITC>
                            <ITC className="itcLoadIn">
                                <TeamNameITCTextContainer style={{ backgroundImage: "linear-gradient(#2c5881, #678BAD)" }}>
                                    <TeamNameITCText>
                                        Karasuno
                                    </TeamNameITCText>
                                </TeamNameITCTextContainer>
                                <ITCTeamImageContainer>
                                <TextImageMarginer />
                                    <img className="img-resizeTeam" src={teamIMG4} alt="Team Logo"></img>
                                </ITCTeamImageContainer>
                                <TextImageMarginer />
                                <CaptainViceCaptainText>
                                    Captain (C): Mattsey
                                </CaptainViceCaptainText>
                                <CaptainViceCaptainText>
                                    Vice Captain (VC): Shredman
                                </CaptainViceCaptainText>
                            </ITC>
                            <ITC className="itcLoadIn">
                                <TeamNameITCTextContainer style={{ backgroundImage: "linear-gradient(#2196f3, #60B1F0)" }}>
                                    <TeamNameITCText>
                                        Bad Ending
                                    </TeamNameITCText>
                                </TeamNameITCTextContainer>
                                <ITCTeamImageContainer>
                                <TextImageMarginer />
                                    <img className="img-resizeTeam" src={teamIMG5} alt="Team Logo"></img>
                                </ITCTeamImageContainer>
                                <TextImageMarginer />
                                <CaptainViceCaptainText>
                                    Captain (C): QQ
                                </CaptainViceCaptainText>
                                <CaptainViceCaptainText>
                                    Vice Captain (VC): Wakapanda
                                </CaptainViceCaptainText>
                            </ITC>
                            <ITC className="itcLoadIn">
                                <TeamNameITCTextContainer style={{ backgroundImage: "linear-gradient(#cf3768, #E57FA0)" }}>
                                    <TeamNameITCText>
                                        The Hunter Association
                                    </TeamNameITCText>
                                </TeamNameITCTextContainer>
                                <ITCTeamImageContainer>
                                <TextImageMarginer />
                                    <img className="img-resizeTeam" src={teamIMG6} alt="Team Logo"></img>
                                </ITCTeamImageContainer>
                                <TextImageMarginer />
                                <CaptainViceCaptainText>
                                    Captain (C): Tonguey
                                </CaptainViceCaptainText>
                                <CaptainViceCaptainText>
                                    Vice Captain (VC): Dubz
                                </CaptainViceCaptainText>
                            </ITC>
                            <ITC className="itcLoadIn">
                                <TeamNameITCTextContainer style={{ backgroundImage: "linear-gradient(#4cb051, #87D58A)" }}>
                                    <TeamNameITCText>
                                        Underdogs 2.0
                                    </TeamNameITCText>
                                </TeamNameITCTextContainer>
                                <ITCTeamImageContainer>
                                <TextImageMarginer />
                                    <img className="img-resizeTeam" src={teamIMG7} alt="Team Logo"></img>
                                </ITCTeamImageContainer>
                                <TextImageMarginer />
                                <CaptainViceCaptainText>
                                    Captain (C): Rifle
                                </CaptainViceCaptainText>
                                <CaptainViceCaptainText>
                                    Vice Captain (VC): Kami
                                </CaptainViceCaptainText>
                            </ITC>
                            <ITC className="itcLoadIn">
                                <TeamNameITCTextContainer style={{ backgroundImage: "linear-gradient(#01dbed, #85F6FF)" }}>
                                    <TeamNameITCText>
                                        ENLIGHTENED
                                    </TeamNameITCText>
                                </TeamNameITCTextContainer>
                                <ITCTeamImageContainer>
                                <TextImageMarginer />
                                    <img className="img-resizeTeam" src={teamIMG8} alt="Team Logo"></img>
                                </ITCTeamImageContainer>
                                <TextImageMarginer />
                                <CaptainViceCaptainText>
                                    Captain (C): Grayfawx
                                </CaptainViceCaptainText>
                                <CaptainViceCaptainText>
                                    Vice Captain (VC): Silverhammer
                                </CaptainViceCaptainText>
                            </ITC>
                            <ITC className="itcLoadIn">
                                <TeamNameITCTextContainer style={{ backgroundImage: "linear-gradient(#018579, #4AE0D2)" }}>
                                    <TeamNameITCText>
                                        Return of the Mormons
                                    </TeamNameITCText>
                                </TeamNameITCTextContainer>
                                <ITCTeamImageContainer>
                                <TextImageMarginer />
                                    <img className="img-resizeTeam" src={teamIMG9} alt="Team Logo"></img>
                                </ITCTeamImageContainer>
                                <TextImageMarginer />
                                <CaptainViceCaptainText>
                                    Captain (C): Jaedon
                                </CaptainViceCaptainText>
                                <CaptainViceCaptainText>
                                    Vice Captain (VC): Zoranos
                                </CaptainViceCaptainText>
                            </ITC>
                            <ITC className="itcLoadIn">
                                <TeamNameITCTextContainer style={{ backgroundImage: "linear-gradient(#ff7b00, #FFBE81)" }}>
                                    <TeamNameITCText>
                                        CULT
                                    </TeamNameITCText>
                                </TeamNameITCTextContainer>
                                <ITCTeamImageContainer>
                                <TextImageMarginer />
                                    <img className="img-resizeTeam" src={teamIMG10} alt="Team Logo"></img>
                                </ITCTeamImageContainer>
                                <TextImageMarginer />
                                <CaptainViceCaptainText>
                                    Captain (C): Bane
                                </CaptainViceCaptainText>
                                <CaptainViceCaptainText>
                                    Vice Captain (VC): MrDucky13
                                </CaptainViceCaptainText>
                            </ITC>
                            <ITC className="itcLoadIn">
                                <TeamNameITCTextContainer style={{ backgroundImage: "linear-gradient(#fec106, #FFBE81)" }}>
                                    <TeamNameITCText>
                                        FINAL BOSS
                                    </TeamNameITCText>
                                </TeamNameITCTextContainer>
                                <ITCTeamImageContainer>
                                <TextImageMarginer />
                                    <img className="img-resizeTeam" src={teamIMG11} alt="Team Logo"></img>
                                </ITCTeamImageContainer>
                                <TextImageMarginer />
                                <CaptainViceCaptainText>
                                    Captain (C): XZWolf
                                </CaptainViceCaptainText>
                                <CaptainViceCaptainText>
                                    Vice Captain (VC): Jwebb
                                </CaptainViceCaptainText>
                            </ITC>
                            <ITC className="itcLoadIn">
                                <TeamNameITCTextContainer style={{ backgroundImage: "linear-gradient(#8b5f3f, #C69978)" }}>
                                    <TeamNameITCText>
                                        MTG Convention Connoiseurs
                                    </TeamNameITCText>
                                </TeamNameITCTextContainer>
                                <ITCTeamImageContainer>
                                <TextImageMarginer />
                                    <img className="img-resizeTeam" src={teamIMG12} alt="Team Logo"></img>
                                </ITCTeamImageContainer>
                                <TextImageMarginer />
                                <CaptainViceCaptainText>
                                    Captain (C): Sunscorched
                                </CaptainViceCaptainText>
                                <CaptainViceCaptainText>
                                    Vice Captain (VC): Seaboyer
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