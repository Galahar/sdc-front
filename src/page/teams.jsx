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
import teamIMG1 from "../assets/illustrations/ClassyInters.png";
import teamIMG2 from "../assets/illustrations/Discord_Kitten_Enjoyers.png";
import teamIMG3 from "../assets/illustrations/Fury.png";
import teamIMG4 from "../assets/illustrations/Legion.jpg";
import teamIMG5 from "../assets/illustrations/Doofenshmirtz Evil Inc.png";
import teamIMG6 from "../assets/illustrations/Gigachads.png";
import teamIMG7 from "../assets/illustrations/The Chimera Ants.png";
import teamIMG8 from "../assets/illustrations/mighty ducks.png";
import teamIMG9 from "../assets/illustrations/The J Hat Pirates.png";
import teamIMG10 from "../assets/illustrations/North American Diving Club.jpg";
import teamIMG11 from "../assets/illustrations/seafood gumbo.jpg";
import teamIMG12 from "../assets/illustrations/The_French_Domination.png";
import teamIMG13 from "../assets/illustrations/Team Aqua.jpg";
import teamIMG14 from "../assets/illustrations/TIPS TINY PECKERS.png";


const Teamspage = () => {
    return (
        <>
            <TopContainer>
                <BackgroundContainer>
                    <TeamsContainer>
                        <TeamsInnerContainer>
                            <ITC className="itcLoadIn">
                                <TeamNameITCTextContainer style={{ backgroundImage: "linear-gradient(#FF7B00, #FFA24B)" }}>
                                    <TeamNameITCText>
                                        Classy Inters
                                    </TeamNameITCText>
                                </TeamNameITCTextContainer>
                                <ITCTeamImageContainer>
                                <TextImageMarginer />
                                    <img className="img-resizeTeam" src={teamIMG1} alt="Team Logo"></img>
                                </ITCTeamImageContainer>
                                <TextImageMarginer />
                                <CaptainViceCaptainText>
                                    Captain (C): Kadel
                                </CaptainViceCaptainText>
{/*                                 <CaptainViceCaptainText>
                                    Vice Captain (VC): Hermy
                                </CaptainViceCaptainText> */}
                            </ITC>
                            <ITC className="itcLoadIn">
                                <TeamNameITCTextContainer style={{ backgroundImage: "linear-gradient(#92ECFF, #B9F3FF)" }}>
                                    <TeamNameITCText>
                                        Discord Kitten
                                    </TeamNameITCText>
                                </TeamNameITCTextContainer>
                                <ITCTeamImageContainer>
                                <TextImageMarginer />
                                    <img className="img-resizeTeam" src={teamIMG2} alt="Team Logo"></img>
                                </ITCTeamImageContainer>
                                <TextImageMarginer />
                                <CaptainViceCaptainText>
                                    Captain (C): ZoranosLoL
                                </CaptainViceCaptainText>
{/*                                 <CaptainViceCaptainText>
                                    Vice Captain (VC): banana ooÿoo 
                                </CaptainViceCaptainText> */}
                            </ITC>
                            <ITC className="itcLoadIn">
                                <TeamNameITCTextContainer style={{ backgroundImage: "linear-gradient(#FFF889, #FFFBB4)" }}>
                                    <TeamNameITCText>
                                        Night Furys
                                    </TeamNameITCText>
                                </TeamNameITCTextContainer>
                                <ITCTeamImageContainer>
                                <TextImageMarginer />
                                    <img className="img-resizeTeam" src={teamIMG3} alt="Team Logo"></img>
                                </ITCTeamImageContainer>
                                <TextImageMarginer />
                                <CaptainViceCaptainText>
                                    Captain (C): The Duh
                                </CaptainViceCaptainText>
{/*                                 <CaptainViceCaptainText>
                                    Vice Captain (VC): Payneless
                                </CaptainViceCaptainText> */}
                            </ITC>
                            <ITC className="itcLoadIn">
                                <TeamNameITCTextContainer style={{ backgroundImage: "linear-gradient(#018579, #00C2B0)" }}>
                                    <TeamNameITCText>
                                        NLegion
                                    </TeamNameITCText>
                                </TeamNameITCTextContainer>
                                <ITCTeamImageContainer>
                                <TextImageMarginer />
                                    <img className="img-resizeTeam" src={teamIMG4} alt="Team Logo"></img>
                                </ITCTeamImageContainer>
                                <TextImageMarginer />
                                <CaptainViceCaptainText>
                                    Captain (C): LC Bane
                                </CaptainViceCaptainText>
{/*                                 <CaptainViceCaptainText>
                                    Vice Captain (VC): Prestoman
                                </CaptainViceCaptainText> */}
                            </ITC>
                            <ITC className="itcLoadIn">
                                <TeamNameITCTextContainer style={{ backgroundImage: "linear-gradient(#FE99DF, #FFBBEA)" }}>
                                    <TeamNameITCText>
                                        Doofenshmirtz Evil
                                    </TeamNameITCText>
                                </TeamNameITCTextContainer>
                                <ITCTeamImageContainer>
                                <TextImageMarginer />
                                    <img className="img-resizeTeam" src={teamIMG5} alt="Team Logo"></img>
                                </ITCTeamImageContainer>
                                <TextImageMarginer />
                                <CaptainViceCaptainText>
                                    Captain (C): Patrick Jones
                                </CaptainViceCaptainText>
{/*                                 <CaptainViceCaptainText>
                                    Vice Captain (VC): MoreSleep
                                </CaptainViceCaptainText> */}
                            </ITC>
                            <ITC className="itcLoadIn">
                                <TeamNameITCTextContainer style={{ backgroundImage: "linear-gradient(#634389, #AF93D0)" }}>
                                    <TeamNameITCText>
                                        Gigachads
                                    </TeamNameITCText>
                                </TeamNameITCTextContainer>
                                <ITCTeamImageContainer>
                                <TextImageMarginer />
                                    <img className="img-resizeTeam" src={teamIMG6} alt="Team Logo"></img>
                                </ITCTeamImageContainer>
                                <TextImageMarginer />
                                <CaptainViceCaptainText>
                                    Captain (C): Brizz
                                </CaptainViceCaptainText>
{/*                                 <CaptainViceCaptainText>
                                    Vice Captain (VC): nDivine
                                </CaptainViceCaptainText> */}
                            </ITC>
                            <ITC className="itcLoadIn">
                                <TeamNameITCTextContainer style={{ backgroundImage: "linear-gradient(#8CCC42, #87D58A)" }}>
                                    <TeamNameITCText>
                                        The Chimera Ants
                                    </TeamNameITCText>
                                </TeamNameITCTextContainer>
                                <ITCTeamImageContainer>
                                <TextImageMarginer />
                                    <img className="img-resizeTeam" src={teamIMG7} alt="Team Logo"></img>
                                </ITCTeamImageContainer>
                                <TextImageMarginer />
                                <CaptainViceCaptainText>
                                    Captain (C): Tonguey
                                </CaptainViceCaptainText>
{/*                                 <CaptainViceCaptainText>
                                    Vice Captain (VC): Seaboyer09
                                </CaptainViceCaptainText> */}
                            </ITC>
                            <ITC className="itcLoadIn">
                                <TeamNameITCTextContainer style={{ backgroundImage: "linear-gradient(#2C5881, #679BCB)" }}>
                                    <TeamNameITCText>
                                        Mighty Ducks
                                    </TeamNameITCText>
                                </TeamNameITCTextContainer>
                                <ITCTeamImageContainer>
                                <TextImageMarginer />
                                    <img className="img-resizeTeam" src={teamIMG8} alt="Team Logo"></img>
                                </ITCTeamImageContainer>
                                <TextImageMarginer />
                                <CaptainViceCaptainText>
                                    Captain (C): Mattsey
                                </CaptainViceCaptainText>
{/*                                 <CaptainViceCaptainText>
                                    Vice Captain (VC): Heecher
                                </CaptainViceCaptainText> */}
                            </ITC>
                            <ITC className="itcLoadIn">
                                <TeamNameITCTextContainer style={{ backgroundImage: "linear-gradient(#CF3768, #D77695)" }}>
                                    <TeamNameITCText>
                                        The J Hat Pirates
                                    </TeamNameITCText>
                                </TeamNameITCTextContainer>
                                <ITCTeamImageContainer>
                                <TextImageMarginer />
                                    <img className="img-resizeTeam" src={teamIMG9} alt="Team Logo"></img>
                                </ITCTeamImageContainer>
                                <TextImageMarginer />
                                <CaptainViceCaptainText>
                                    Captain (C): Tony Baboni
                                </CaptainViceCaptainText>
{/*                                 <CaptainViceCaptainText>
                                    Vice Captain (VC): Tonguey
                                </CaptainViceCaptainText> */}
                            </ITC>
                            <ITC className="itcLoadIn">
                                <TeamNameITCTextContainer style={{ backgroundImage: "linear-gradient(#01DBED, #01DBED)" }}>
                                    <TeamNameITCText>
                                        North American Diving Club
                                    </TeamNameITCText>
                                </TeamNameITCTextContainer>
                                <ITCTeamImageContainer>
                                <TextImageMarginer />
                                    <img className="img-resizeTeam" src={teamIMG10} alt="Team Logo"></img>
                                </ITCTeamImageContainer>
                                <TextImageMarginer />
                                <CaptainViceCaptainText>
                                    Captain (C): Senna Main Role
                                </CaptainViceCaptainText>
{/*                                 <CaptainViceCaptainText>
                                    Vice Captain (VC): 	xPhoenixGirl
                                </CaptainViceCaptainText> */}
                            </ITC>
                            <ITC className="itcLoadIn">
                                <TeamNameITCTextContainer style={{ backgroundImage: "linear-gradient(#99FFB5, #BEFFCF)" }}>
                                    <TeamNameITCText>
                                        Seafood Gumbo
                                    </TeamNameITCText>
                                </TeamNameITCTextContainer>
                                <ITCTeamImageContainer>
                                <TextImageMarginer />
                                    <img className="img-resizeTeam" src={teamIMG11} alt="Team Logo"></img>
                                </ITCTeamImageContainer>
                                <TextImageMarginer />
                                <CaptainViceCaptainText>
                                    Captain (C): UwU Headpats
                                </CaptainViceCaptainText>
{/*                                 <CaptainViceCaptainText>
                                    Vice Captain (VC): 	xPhoenixGirl
                                </CaptainViceCaptainText> */}
                            </ITC>
                            <ITC className="itcLoadIn">
                                <TeamNameITCTextContainer style={{ backgroundImage: "linear-gradient(#8B5F3F, #B08769)" }}>
                                    <TeamNameITCText>
                                        The French Domination
                                    </TeamNameITCText>
                                </TeamNameITCTextContainer>
                                <ITCTeamImageContainer>
                                <TextImageMarginer />
                                    <img className="img-resizeTeam" src={teamIMG12} alt="Team Logo"></img>
                                </ITCTeamImageContainer>
                                <TextImageMarginer />
                                <CaptainViceCaptainText>
                                    Captain (C): Mr Raven Cat
                                </CaptainViceCaptainText>
{/*                                 <CaptainViceCaptainText>
                                    Vice Captain (VC): 	xPhoenixGirl
                                </CaptainViceCaptainText> */}
                            </ITC>
                            <ITC className="itcLoadIn">
                                <TeamNameITCTextContainer style={{ backgroundImage: "linear-gradient(#2196F3, #96D1FF)" }}>
                                    <TeamNameITCText>
                                        Team Aqua
                                    </TeamNameITCText>
                                </TeamNameITCTextContainer>
                                <ITCTeamImageContainer>
                                <TextImageMarginer />
                                    <img className="img-resizeTeam" src={teamIMG13} alt="Team Logo"></img>
                                </ITCTeamImageContainer>
                                <TextImageMarginer />
                                <CaptainViceCaptainText>
                                    Captain (C): Sir Ratcha
                                </CaptainViceCaptainText>
{/*                                 <CaptainViceCaptainText>
                                    Vice Captain (VC): 	xPhoenixGirl
                                </CaptainViceCaptainText> */}
                            </ITC>
                            <ITC className="itcLoadIn">
                                <TeamNameITCTextContainer style={{ backgroundImage: "linear-gradient(#FF3C3C, #FF9090)" }}>
                                    <TeamNameITCText>
                                        Tips Tiny Pecker
                                    </TeamNameITCText>
                                </TeamNameITCTextContainer>
                                <ITCTeamImageContainer>
                                <TextImageMarginer />
                                    <img className="img-resizeTeam" src={teamIMG14} alt="Team Logo"></img>
                                </ITCTeamImageContainer>
                                <TextImageMarginer />
                                <CaptainViceCaptainText>
                                    Captain (C): Nico Mid
                                </CaptainViceCaptainText>
{/*                                 <CaptainViceCaptainText>
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