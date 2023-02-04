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
import teamIMG1 from "../assets/illustrations/season14teams/team1.jpg";
import teamIMG2 from "../assets/illustrations/season14teams/team2.png";
import teamIMG3 from "../assets/illustrations/season14teams/team3.png";
import teamIMG4 from "../assets/illustrations/season14teams/team4.png";
import teamIMG5 from "../assets/illustrations/season14teams/team5.png";
import teamIMG6 from "../assets/illustrations/season14teams/team6.jpg";
import teamIMG7 from "../assets/illustrations/season14teams/team7.png";
import teamIMG8 from "../assets/illustrations/season14teams/team8.png";
import teamIMG9 from "../assets/illustrations/season14teams/team9.jpg";
import teamIMG10 from "../assets/illustrations/season14teams/team10.png";


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
                                        The Trashmen
                                    </TeamNameITCText>
                                </TeamNameITCTextContainer>
                                <ITCTeamImageContainer>
                                <TextImageMarginer />
                                    <img className="img-resizeTeam" src={teamIMG1} alt="Team Logo"></img>
                                </ITCTeamImageContainer>
                                <TextImageMarginer />
                                <CaptainViceCaptainText>
                                    Captain (C): Local catgirl
                                </CaptainViceCaptainText>
                                {/* <CaptainViceCaptainText>
                                    Vice Captain (VC): Hermy
                                </CaptainViceCaptainText> */}
                            </ITC>
                            <ITC className="itcLoadIn">
                                <TeamNameITCTextContainer style={{ backgroundImage: "linear-gradient(#8ccc42, #B8EA7E)" }}>
                                    <TeamNameITCText>
                                        Bandits
                                    </TeamNameITCText>
                                </TeamNameITCTextContainer>
                                <ITCTeamImageContainer>
                                <TextImageMarginer />
                                    <img className="img-resizeTeam" src={teamIMG2} alt="Team Logo"></img>
                                </ITCTeamImageContainer>
                                <TextImageMarginer />
                                <CaptainViceCaptainText>
                                    Captain (C): banged by makima
                                </CaptainViceCaptainText>
                                {/* <CaptainViceCaptainText>
                                    Vice Captain (VC): banana ooÿoo 
                                </CaptainViceCaptainText> */}
                            </ITC>
                            <ITC className="itcLoadIn">
                                <TeamNameITCTextContainer style={{ backgroundImage: "linear-gradient(#634389, #9079AB)" }}>
                                    <TeamNameITCText>
                                        NMe
                                    </TeamNameITCText>
                                </TeamNameITCTextContainer>
                                <ITCTeamImageContainer>
                                <TextImageMarginer />
                                    <img className="img-resizeTeam" src={teamIMG3} alt="Team Logo"></img>
                                </ITCTeamImageContainer>
                                <TextImageMarginer />
                                <CaptainViceCaptainText>
                                    Captain (C): for a good time
                                </CaptainViceCaptainText>
                                {/* <CaptainViceCaptainText>
                                    Vice Captain (VC): Payneless
                                </CaptainViceCaptainText> */}
                            </ITC>
                            <ITC className="itcLoadIn">
                                <TeamNameITCTextContainer style={{ backgroundImage: "linear-gradient(#2c5881, #678BAD)" }}>
                                    <TeamNameITCText>
                                        Sweaty Gamers
                                    </TeamNameITCText>
                                </TeamNameITCTextContainer>
                                <ITCTeamImageContainer>
                                <TextImageMarginer />
                                    <img className="img-resizeTeam" src={teamIMG4} alt="Team Logo"></img>
                                </ITCTeamImageContainer>
                                <TextImageMarginer />
                                <CaptainViceCaptainText>
                                    Captain (C): Sennamain Role
                                </CaptainViceCaptainText>
                                {/* <CaptainViceCaptainText>
                                    Vice Captain (VC): Prestoman
                                </CaptainViceCaptainText> */}
                            </ITC>
                            <ITC className="itcLoadIn">
                                <TeamNameITCTextContainer style={{ backgroundImage: "linear-gradient(#2196f3, #60B1F0)" }}>
                                    <TeamNameITCText>
                                        Phantom Thieves
                                    </TeamNameITCText>
                                </TeamNameITCTextContainer>
                                <ITCTeamImageContainer>
                                <TextImageMarginer />
                                    <img className="img-resizeTeam" src={teamIMG5} alt="Team Logo"></img>
                                </ITCTeamImageContainer>
                                <TextImageMarginer />
                                <CaptainViceCaptainText>
                                    Captain (C): Benass
                                </CaptainViceCaptainText>
                                {/* <CaptainViceCaptainText>
                                    Vice Captain (VC): MoreSleep
                                </CaptainViceCaptainText> */}
                            </ITC>
                            <ITC className="itcLoadIn">
                                <TeamNameITCTextContainer style={{ backgroundImage: "linear-gradient(#cf3768, #E57FA0)" }}>
                                    <TeamNameITCText>
                                        PerkBall
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
                                {/* <CaptainViceCaptainText>
                                    Vice Captain (VC): nDivine
                                </CaptainViceCaptainText> */}
                            </ITC>
                            <ITC className="itcLoadIn">
                                <TeamNameITCTextContainer style={{ backgroundImage: "linear-gradient(#4cb051, #87D58A)" }}>
                                    <TeamNameITCText>
                                        Statisticians
                                    </TeamNameITCText>
                                </TeamNameITCTextContainer>
                                <ITCTeamImageContainer>
                                <TextImageMarginer />
                                    <img className="img-resizeTeam" src={teamIMG7} alt="Team Logo"></img>
                                </ITCTeamImageContainer>
                                <TextImageMarginer />
                                <CaptainViceCaptainText>
                                    Captain (C): The Thirteen
                                </CaptainViceCaptainText>
                                {/* <CaptainViceCaptainText>
                                    Vice Captain (VC): Seaboyer09
                                </CaptainViceCaptainText> */}
                            </ITC>
                            <ITC className="itcLoadIn">
                                <TeamNameITCTextContainer style={{ backgroundImage: "linear-gradient(#01dbed, #85F6FF)" }}>
                                    <TeamNameITCText>
                                        Kara
                                    </TeamNameITCText>
                                </TeamNameITCTextContainer>
                                <ITCTeamImageContainer>
                                <TextImageMarginer />
                                    <img className="img-resizeTeam" src={teamIMG8} alt="Team Logo"></img>
                                </ITCTeamImageContainer>
                                <TextImageMarginer />
                                <CaptainViceCaptainText>
                                    Captain (C): Crucifix
                                </CaptainViceCaptainText>
                                {/* <CaptainViceCaptainText>
                                    Vice Captain (VC): Heecher
                                </CaptainViceCaptainText> */}
                            </ITC>
                            <ITC className="itcLoadIn">
                                <TeamNameITCTextContainer style={{ backgroundImage: "linear-gradient(#018579, #4AE0D2)" }}>
                                    <TeamNameITCText>
                                        Totally Spies!
                                    </TeamNameITCText>
                                </TeamNameITCTextContainer>
                                <ITCTeamImageContainer>
                                <TextImageMarginer />
                                    <img className="img-resizeTeam" src={teamIMG9} alt="Team Logo"></img>
                                </ITCTeamImageContainer>
                                <TextImageMarginer />
                                <CaptainViceCaptainText>
                                    Captain (C): Patrickjones
                                </CaptainViceCaptainText>
                                {/* <CaptainViceCaptainText>
                                    Vice Captain (VC): Tonguey
                                </CaptainViceCaptainText> */}
                            </ITC>
                            <ITC className="itcLoadIn">
                                <TeamNameITCTextContainer style={{ backgroundImage: "linear-gradient(#ff7b00, #FFBE81)" }}>
                                    <TeamNameITCText>
                                        Better Brothers
                                    </TeamNameITCText>
                                </TeamNameITCTextContainer>
                                <ITCTeamImageContainer>
                                <TextImageMarginer />
                                    <img className="img-resizeTeam" src={teamIMG10} alt="Team Logo"></img>
                                </ITCTeamImageContainer>
                                <TextImageMarginer />
                                <CaptainViceCaptainText>
                                    Captain (C): Lakuna
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