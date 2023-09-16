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
import teamIMG1 from "../assets/illustrations/season16teams/t1.jpg";
import teamIMG2 from "../assets/illustrations/season16teams/t2.jpg";
import teamIMG3 from "../assets/illustrations/season16teams/t3.jpg";
import teamIMG4 from "../assets/illustrations/season16teams/t4.png";
import teamIMG5 from "../assets/illustrations/season16teams/t5.jpg";
import teamIMG6 from "../assets/illustrations/season16teams/t6.jpg";
import teamIMG7 from "../assets/illustrations/season16teams/t7.jpg";
import teamIMG8 from "../assets/illustrations/season16teams/t8.jpg";
import teamIMG9 from "../assets/illustrations/season16teams/t9.jpg";
import teamIMG10 from "../assets/illustrations/season16teams/t10.jpg";
import teamIMG11 from "../assets/illustrations/season16teams/t11.jpg";
import teamIMG12 from "../assets/illustrations/season16teams/t12.png";

const Teamspage = () => {
    return (
        <>
            <TopContainer>
                <BackgroundContainer>
                    <TeamsContainer>
                        <TeamsInnerContainer>
                            <ITC className="itcLoadIn">
                                <TeamNameITCTextContainer style={{ backgroundImage: "linear-gradient(#FF10C6, #ffb7ee)" }}>
                                    <TeamNameITCText>
                                        Archangels
                                    </TeamNameITCText>
                                </TeamNameITCTextContainer>
                                <ITCTeamImageContainer>
                                <TextImageMarginer />
                                    <img className="img-resizeTeam" src={teamIMG1} alt="Team Logo"></img>
                                </ITCTeamImageContainer>
                                <TextImageMarginer />
                                <CaptainViceCaptainText>
                                    Captain (C): Lakuna
                                </CaptainViceCaptainText>
                                {/* <CaptainViceCaptainText>
                                    Vice Captain (VC): Hermy
                                </CaptainViceCaptainText> */}
                            </ITC>
                            <ITC className="itcLoadIn">
                                <TeamNameITCTextContainer style={{ backgroundImage: "linear-gradient(#8ccc42, #B8EA7E)" }}>
                                    <TeamNameITCText>
                                        Guangdong Tigers
                                    </TeamNameITCText>
                                </TeamNameITCTextContainer>
                                <ITCTeamImageContainer>
                                <TextImageMarginer />
                                    <img className="img-resizeTeam" src={teamIMG2} alt="Team Logo"></img>
                                </ITCTeamImageContainer>
                                <TextImageMarginer />
                                <CaptainViceCaptainText>
                                    Captain (C): I Fear Nobody
                                </CaptainViceCaptainText>
                                {/* <CaptainViceCaptainText>
                                    Vice Captain (VC): banana ooÿoo 
                                </CaptainViceCaptainText> */}
                            </ITC>
                            <ITC className="itcLoadIn">
                                <TeamNameITCTextContainer style={{ backgroundImage: "linear-gradient(#634389, #9079AB)" }}>
                                    <TeamNameITCText>
                                        Border Wall Construction
                                    </TeamNameITCText>
                                </TeamNameITCTextContainer>
                                <ITCTeamImageContainer>
                                <TextImageMarginer />
                                    <img className="img-resizeTeam" src={teamIMG3} alt="Team Logo"></img>
                                </ITCTeamImageContainer>
                                <TextImageMarginer />
                                <CaptainViceCaptainText>
                                    Captain (C): Skub
                                </CaptainViceCaptainText>
                                {/* <CaptainViceCaptainText>
                                    Vice Captain (VC): Payneless
                                </CaptainViceCaptainText> */}
                            </ITC>
                            <ITC className="itcLoadIn">
                                <TeamNameITCTextContainer style={{ backgroundImage: "linear-gradient(#2c5881, #678BAD)" }}>
                                    <TeamNameITCText>
                                        Shen-nanigans
                                    </TeamNameITCText>
                                </TeamNameITCTextContainer>
                                <ITCTeamImageContainer>
                                <TextImageMarginer />
                                    <img className="img-resizeTeam" src={teamIMG4} alt="Team Logo"></img>
                                </ITCTeamImageContainer>
                                <TextImageMarginer />
                                <CaptainViceCaptainText>
                                    Captain (C): Senor Paco The Taco
                                </CaptainViceCaptainText>
                                {/* <CaptainViceCaptainText>
                                    Vice Captain (VC): Prestoman
                                </CaptainViceCaptainText> */}
                            </ITC>
                            <ITC className="itcLoadIn">
                                <TeamNameITCTextContainer style={{ backgroundImage: "linear-gradient(#2196f3, #60B1F0)" }}>
                                    <TeamNameITCText>
                                        Intshallah
                                    </TeamNameITCText>
                                </TeamNameITCTextContainer>
                                <ITCTeamImageContainer>
                                <TextImageMarginer />
                                    <img className="img-resizeTeam" src={teamIMG5} alt="Team Logo"></img>
                                </ITCTeamImageContainer>
                                <TextImageMarginer />
                                <CaptainViceCaptainText>
                                    Captain (C): Yols
                                </CaptainViceCaptainText>
                                {/* <CaptainViceCaptainText>
                                    Vice Captain (VC): MoreSleep
                                </CaptainViceCaptainText> */}
                            </ITC>
                            <ITC className="itcLoadIn">
                                <TeamNameITCTextContainer style={{ backgroundImage: "linear-gradient(#cf3768, #E57FA0)" }}>
                                    <TeamNameITCText>
                                        Virtucon Industries
                                    </TeamNameITCText>
                                </TeamNameITCTextContainer>
                                <ITCTeamImageContainer>
                                <TextImageMarginer />
                                    <img className="img-resizeTeam" src={teamIMG6} alt="Team Logo"></img>
                                </ITCTeamImageContainer>
                                <TextImageMarginer />
                                <CaptainViceCaptainText>
                                    Captain (C): Shredman3
                                </CaptainViceCaptainText>
                                {/* <CaptainViceCaptainText>
                                    Vice Captain (VC): nDivine
                                </CaptainViceCaptainText> */}
                            </ITC>
                            <ITC className="itcLoadIn">
                                <TeamNameITCTextContainer style={{ backgroundImage: "linear-gradient(#4cb051, #87D58A)" }}>
                                    <TeamNameITCText>
                                        Final Boss
                                    </TeamNameITCText>
                                </TeamNameITCTextContainer>
                                <ITCTeamImageContainer>
                                <TextImageMarginer />
                                    <img className="img-resizeTeam" src={teamIMG7} alt="Team Logo"></img>
                                </ITCTeamImageContainer>
                                <TextImageMarginer />
                                <CaptainViceCaptainText>
                                    Captain (C): Hierarchs
                                </CaptainViceCaptainText>
                                {/* <CaptainViceCaptainText>
                                    Vice Captain (VC): Seaboyer09
                                </CaptainViceCaptainText> */}
                            </ITC>
                            <ITC className="itcLoadIn">
                                <TeamNameITCTextContainer style={{ backgroundImage: "linear-gradient(#01dbed, #85F6FF)" }}>
                                    <TeamNameITCText>
                                        Booty Plunderers
                                    </TeamNameITCText>
                                </TeamNameITCTextContainer>
                                <ITCTeamImageContainer>
                                <TextImageMarginer />
                                    <img className="img-resizeTeam" src={teamIMG8} alt="Team Logo"></img>
                                </ITCTeamImageContainer>
                                <TextImageMarginer />
                                <CaptainViceCaptainText>
                                    Captain (C): Yarg
                                </CaptainViceCaptainText>
                                {/* <CaptainViceCaptainText>
                                    Vice Captain (VC): Heecher
                                </CaptainViceCaptainText> */}
                            </ITC>
                            <ITC className="itcLoadIn">
                                <TeamNameITCTextContainer style={{ backgroundImage: "linear-gradient(#018579, #4AE0D2)" }}>
                                    <TeamNameITCText>
                                        The Black Pearl
                                    </TeamNameITCText>
                                </TeamNameITCTextContainer>
                                <ITCTeamImageContainer>
                                <TextImageMarginer />
                                    <img className="img-resizeTeam" src={teamIMG9} alt="Team Logo"></img>
                                </ITCTeamImageContainer>
                                <TextImageMarginer />
                                <CaptainViceCaptainText>
                                    Captain (C): Tonguey
                                </CaptainViceCaptainText>
                                {/* <CaptainViceCaptainText>
                                    Vice Captain (VC): Tonguey
                                </CaptainViceCaptainText> */}
                            </ITC>
                            <ITC className="itcLoadIn">
                                <TeamNameITCTextContainer style={{ backgroundImage: "linear-gradient(#ff7b00, #FFBE81)" }}>
                                    <TeamNameITCText>
                                        DIVINE LIGHT SEVERED
                                    </TeamNameITCText>
                                </TeamNameITCTextContainer>
                                <ITCTeamImageContainer>
                                <TextImageMarginer />
                                    <img className="img-resizeTeam" src={teamIMG10} alt="Team Logo"></img>
                                </ITCTeamImageContainer>
                                <TextImageMarginer />
                                <CaptainViceCaptainText>
                                    Captain (C): Revnon
                                </CaptainViceCaptainText>
                                {/* <CaptainViceCaptainText>
                                    Vice Captain (VC): 	xPhoenixGirl
                                </CaptainViceCaptainText> */}
                            </ITC>
                            <ITC className="itcLoadIn">
                                <TeamNameITCTextContainer style={{ backgroundImage: "linear-gradient(#e03c36, #ec9f9f)" }}>
                                    <TeamNameITCText>
                                        Blahaj Baysharks
                                    </TeamNameITCText>
                                </TeamNameITCTextContainer>
                                <ITCTeamImageContainer>
                                <TextImageMarginer />
                                    <img className="img-resizeTeam" src={teamIMG11} alt="Team Logo"></img>
                                </ITCTeamImageContainer>
                                <TextImageMarginer />
                                <CaptainViceCaptainText>
                                    Captain (C): Rebecca
                                </CaptainViceCaptainText>
                                {/* <CaptainViceCaptainText>
                                    Vice Captain (VC): 	xPhoenixGirl
                                </CaptainViceCaptainText> */}
                            </ITC>
                            <ITC className="itcLoadIn">
                                <TeamNameITCTextContainer style={{ backgroundImage: "linear-gradient(#47fd5f, #b9f7c3)" }}>
                                    <TeamNameITCText>
                                        Caniacs
                                    </TeamNameITCText>
                                </TeamNameITCTextContainer>
                                <ITCTeamImageContainer>
                                <TextImageMarginer />
                                    <img className="img-resizeTeam" src={teamIMG12} alt="Team Logo"></img>
                                </ITCTeamImageContainer>
                                <TextImageMarginer />
                                <CaptainViceCaptainText>
                                    Captain (C): Daeda
                                </CaptainViceCaptainText>
                                {/* <CaptainViceCaptainText>
                                    Vice Captain (VC): 	xPhoenixGirl
                                </CaptainViceCaptainText> */}
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