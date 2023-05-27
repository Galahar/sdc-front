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
import teamIMG1 from "../assets/illustrations/season15teams/t1.png";
import teamIMG2 from "../assets/illustrations/season15teams/t2.png";
import teamIMG3 from "../assets/illustrations/season15teams/t3.jpg";
import teamIMG4 from "../assets/illustrations/season15teams/t4.png";
import teamIMG5 from "../assets/illustrations/season15teams/t5.png";
import teamIMG6 from "../assets/illustrations/season15teams/t6.png";
import teamIMG7 from "../assets/illustrations/season15teams/t7.png";
import teamIMG8 from "../assets/illustrations/season15teams/t8.png";
import teamIMG9 from "../assets/illustrations/season15teams/t9.png";
import teamIMG10 from "../assets/illustrations/season15teams/t10.jpg";
import teamIMG11 from "../assets/illustrations/season15teams/t11.png";
import teamIMG12 from "../assets/illustrations/season15teams/t12.png";

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
                                        Finding Jesus
                                    </TeamNameITCText>
                                </TeamNameITCTextContainer>
                                <ITCTeamImageContainer>
                                <TextImageMarginer />
                                    <img className="img-resizeTeam" src={teamIMG1} alt="Team Logo"></img>
                                </ITCTeamImageContainer>
                                <TextImageMarginer />
                                <CaptainViceCaptainText>
                                    Captain (C): Tony Baboni
                                </CaptainViceCaptainText>
                                {/* <CaptainViceCaptainText>
                                    Vice Captain (VC): Hermy
                                </CaptainViceCaptainText> */}
                            </ITC>
                            <ITC className="itcLoadIn">
                                <TeamNameITCTextContainer style={{ backgroundImage: "linear-gradient(#8ccc42, #B8EA7E)" }}>
                                    <TeamNameITCText>
                                        Get Blended
                                    </TeamNameITCText>
                                </TeamNameITCTextContainer>
                                <ITCTeamImageContainer>
                                <TextImageMarginer />
                                    <img className="img-resizeTeam" src={teamIMG2} alt="Team Logo"></img>
                                </ITCTeamImageContainer>
                                <TextImageMarginer />
                                <CaptainViceCaptainText>
                                    Captain (C): Blender
                                </CaptainViceCaptainText>
                                {/* <CaptainViceCaptainText>
                                    Vice Captain (VC): banana ooÿoo 
                                </CaptainViceCaptainText> */}
                            </ITC>
                            <ITC className="itcLoadIn">
                                <TeamNameITCTextContainer style={{ backgroundImage: "linear-gradient(#634389, #9079AB)" }}>
                                    <TeamNameITCText>
                                        Bugcat Poof
                                    </TeamNameITCText>
                                </TeamNameITCTextContainer>
                                <ITCTeamImageContainer>
                                <TextImageMarginer />
                                    <img className="img-resizeTeam" src={teamIMG3} alt="Team Logo"></img>
                                </ITCTeamImageContainer>
                                <TextImageMarginer />
                                <CaptainViceCaptainText>
                                    Captain (C): Hyun
                                </CaptainViceCaptainText>
                                {/* <CaptainViceCaptainText>
                                    Vice Captain (VC): Payneless
                                </CaptainViceCaptainText> */}
                            </ITC>
                            <ITC className="itcLoadIn">
                                <TeamNameITCTextContainer style={{ backgroundImage: "linear-gradient(#2c5881, #678BAD)" }}>
                                    <TeamNameITCText>
                                        Lakuna's Legion
                                    </TeamNameITCText>
                                </TeamNameITCTextContainer>
                                <ITCTeamImageContainer>
                                <TextImageMarginer />
                                    <img className="img-resizeTeam" src={teamIMG4} alt="Team Logo"></img>
                                </ITCTeamImageContainer>
                                <TextImageMarginer />
                                <CaptainViceCaptainText>
                                    Captain (C): Lakuna
                                </CaptainViceCaptainText>
                                {/* <CaptainViceCaptainText>
                                    Vice Captain (VC): Prestoman
                                </CaptainViceCaptainText> */}
                            </ITC>
                            <ITC className="itcLoadIn">
                                <TeamNameITCTextContainer style={{ backgroundImage: "linear-gradient(#2196f3, #60B1F0)" }}>
                                    <TeamNameITCText>
                                        Untitled Goose Team
                                    </TeamNameITCText>
                                </TeamNameITCTextContainer>
                                <ITCTeamImageContainer>
                                <TextImageMarginer />
                                    <img className="img-resizeTeam" src={teamIMG5} alt="Team Logo"></img>
                                </ITCTeamImageContainer>
                                <TextImageMarginer />
                                <CaptainViceCaptainText>
                                    Captain (C): Sunscorched
                                </CaptainViceCaptainText>
                                {/* <CaptainViceCaptainText>
                                    Vice Captain (VC): MoreSleep
                                </CaptainViceCaptainText> */}
                            </ITC>
                            <ITC className="itcLoadIn">
                                <TeamNameITCTextContainer style={{ backgroundImage: "linear-gradient(#cf3768, #E57FA0)" }}>
                                    <TeamNameITCText>
                                        Rift Goblins
                                    </TeamNameITCText>
                                </TeamNameITCTextContainer>
                                <ITCTeamImageContainer>
                                <TextImageMarginer />
                                    <img className="img-resizeTeam" src={teamIMG6} alt="Team Logo"></img>
                                </ITCTeamImageContainer>
                                <TextImageMarginer />
                                <CaptainViceCaptainText>
                                    Captain (C): CadeCBC
                                </CaptainViceCaptainText>
                                {/* <CaptainViceCaptainText>
                                    Vice Captain (VC): nDivine
                                </CaptainViceCaptainText> */}
                            </ITC>
                            <ITC className="itcLoadIn">
                                <TeamNameITCTextContainer style={{ backgroundImage: "linear-gradient(#4cb051, #87D58A)" }}>
                                    <TeamNameITCText>
                                        The Weather Channel
                                    </TeamNameITCText>
                                </TeamNameITCTextContainer>
                                <ITCTeamImageContainer>
                                <TextImageMarginer />
                                    <img className="img-resizeTeam" src={teamIMG7} alt="Team Logo"></img>
                                </ITCTeamImageContainer>
                                <TextImageMarginer />
                                <CaptainViceCaptainText>
                                    Captain (C): Jim Cantore
                                </CaptainViceCaptainText>
                                {/* <CaptainViceCaptainText>
                                    Vice Captain (VC): Seaboyer09
                                </CaptainViceCaptainText> */}
                            </ITC>
                            <ITC className="itcLoadIn">
                                <TeamNameITCTextContainer style={{ backgroundImage: "linear-gradient(#01dbed, #85F6FF)" }}>
                                    <TeamNameITCText>
                                        Bing Chilling
                                    </TeamNameITCText>
                                </TeamNameITCTextContainer>
                                <ITCTeamImageContainer>
                                <TextImageMarginer />
                                    <img className="img-resizeTeam" src={teamIMG8} alt="Team Logo"></img>
                                </ITCTeamImageContainer>
                                <TextImageMarginer />
                                <CaptainViceCaptainText>
                                    Captain (C): Rebecca
                                </CaptainViceCaptainText>
                                {/* <CaptainViceCaptainText>
                                    Vice Captain (VC): Heecher
                                </CaptainViceCaptainText> */}
                            </ITC>
                            <ITC className="itcLoadIn">
                                <TeamNameITCTextContainer style={{ backgroundImage: "linear-gradient(#018579, #4AE0D2)" }}>
                                    <TeamNameITCText>
                                        The Hash-Slinging Slashers
                                    </TeamNameITCText>
                                </TeamNameITCTextContainer>
                                <ITCTeamImageContainer>
                                <TextImageMarginer />
                                    <img className="img-resizeTeam" src={teamIMG9} alt="Team Logo"></img>
                                </ITCTeamImageContainer>
                                <TextImageMarginer />
                                <CaptainViceCaptainText>
                                    Captain (C): Shayden
                                </CaptainViceCaptainText>
                                {/* <CaptainViceCaptainText>
                                    Vice Captain (VC): Tonguey
                                </CaptainViceCaptainText> */}
                            </ITC>
                            <ITC className="itcLoadIn">
                                <TeamNameITCTextContainer style={{ backgroundImage: "linear-gradient(#ff7b00, #FFBE81)" }}>
                                    <TeamNameITCText>
                                        Team Magma
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
                                {/* <CaptainViceCaptainText>
                                    Vice Captain (VC): 	xPhoenixGirl
                                </CaptainViceCaptainText> */}
                            </ITC>
                            <ITC className="itcLoadIn">
                                <TeamNameITCTextContainer style={{ backgroundImage: "linear-gradient(#ff7b00, #FFBE81)" }}>
                                    <TeamNameITCText>
                                        Chef Boyardee
                                    </TeamNameITCText>
                                </TeamNameITCTextContainer>
                                <ITCTeamImageContainer>
                                <TextImageMarginer />
                                    <img className="img-resizeTeam" src={teamIMG11} alt="Team Logo"></img>
                                </ITCTeamImageContainer>
                                <TextImageMarginer />
                                <CaptainViceCaptainText>
                                    Captain (C): I Fear Nobody
                                </CaptainViceCaptainText>
                                {/* <CaptainViceCaptainText>
                                    Vice Captain (VC): 	xPhoenixGirl
                                </CaptainViceCaptainText> */}
                            </ITC>
                            <ITC className="itcLoadIn">
                                <TeamNameITCTextContainer style={{ backgroundImage: "linear-gradient(#ff7b00, #FFBE81)" }}>
                                    <TeamNameITCText>
                                        The Scouts
                                    </TeamNameITCText>
                                </TeamNameITCTextContainer>
                                <ITCTeamImageContainer>
                                <TextImageMarginer />
                                    <img className="img-resizeTeam" src={teamIMG12} alt="Team Logo"></img>
                                </ITCTeamImageContainer>
                                <TextImageMarginer />
                                <CaptainViceCaptainText>
                                    Captain (C): Princeton
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