import React from "react";
import Navbar from "../components/Navbar";
import { Footer } from "../components/Footer";
import { BackgroundContainer, TopContainer, TeamsContainer, TeamsInnerContainer, 
    ITC, TeamName, TeamNameText, TeamNameTextContainer, TeamImageContainer, 
    TeamCaptains, TeamCaptainsText, SC1, SC2, SC3, ScoreContainerText } from "../pageStyles/standings";

import teamIMG1 from "../assets/illustrations/teamIMG1.png";
import "../pageStyles/standings.css";

const Standingspage = () => {
    return (
        <>
            <TopContainer>
                <BackgroundContainer>
                    <TeamsContainer>
                        <TeamsInnerContainer className="itcLoadIn">
                            <ITC>

                            </ITC>
                            <ITC>
                                <TeamName>
                                    <TeamNameTextContainer>
                                        <TeamNameText>
                                            FEED TILT COME
                                        </TeamNameText>
                                    </TeamNameTextContainer>
                                    <TeamImageContainer>
                                        <img className="img-resizeTeamsss" src={teamIMG1} alt="Team Logo"></img>
                                    </TeamImageContainer >
                                    <TeamCaptains>
                                        <TeamCaptainsText>
                                            Captain (C): Mixture
                                        </TeamCaptainsText>
                                    </TeamCaptains>
                                    <TeamCaptains>
                                        <TeamCaptainsText>
                                            Vice Captain (VC): Jasco
                                        </TeamCaptainsText>
                                    </TeamCaptains>
                                    <SC1>
                                        <span style={{ fontWeight: '600', color: 'black', fontSize: '35px', marginLeft: '10px'}}> 
                                        3 - 0</span>
                                    </SC1>
                                    <SC2>
                                        <span style={{ fontWeight: '600', color: 'black', fontSize: '35px', marginLeft: '10px'}}> 
                                        2 - 1</span>
                                    </SC2>
                                    <SC3>
                                        <span style={{ fontWeight: '600', color: 'black', fontSize: '35px', marginLeft: '10px'}}> 
                                        1 - 2</span>
                                    </SC3>
                                    <SC1>
                                        <span style={{ fontWeight: '600', color: 'black', fontSize: '35px', marginLeft: '10px'}}> 
                                        3 - 0</span>
                                    </SC1>
                                    <SC1>
                                        <span style={{ fontWeight: '600', color: 'black', fontSize: '35px', marginLeft: '10px'}}> 
                                        3 - 0</span>
                                    </SC1>
                                    <SC2>
                                        <span style={{ fontWeight: '600', color: 'black', fontSize: '35px', marginLeft: '10px'}}> 
                                        2 - 1</span>
                                    </SC2>
                                    <SC3>
                                        <span style={{ fontWeight: '600', color: 'black', fontSize: '35px', marginLeft: '10px'}}> 
                                        1 - 2</span>
                                    </SC3>
                                    <SC2>
                                        <span style={{ fontWeight: '600', color: 'black', fontSize: '35px', marginLeft: '10px'}}> 
                                        2 - 1</span>
                                    </SC2>
                                    <SC2>
                                        <span style={{ fontWeight: '600', color: 'black', fontSize: '35px', marginLeft: '10px'}}> 
                                        2 - 1</span>
                                    </SC2>
                                    <SC1>
                                        <span style={{ fontWeight: '600', color: 'black', fontSize: '35px', marginLeft: '10px'}}> 
                                        3 - 0</span>
                                    </SC1>
                                    <SC2>
                                        <span style={{ fontWeight: '600', color: 'black', fontSize: '35px', marginLeft: '10px'}}> 
                                        2 - 1</span>
                                    </SC2>
                                </TeamName>
                            </ITC>
                            <ITC>
                                
                            </ITC>
                            <ITC>
                                
                            </ITC>
                            <ITC>

                            </ITC>
                            <ITC>
                                
                            </ITC>
                            <ITC>
                                
                            </ITC>
{/*                             <ITC>
                                
                            </ITC>
                            <ITC>

                            </ITC>
                            <ITC>
                                
                            </ITC>
                            <ITC>
                                
                            </ITC>
                            <ITC>
                                
                            </ITC>
                            <ITC>
                                
                            </ITC> */}
                        </TeamsInnerContainer>
                    </TeamsContainer>
                </BackgroundContainer>
            </TopContainer>
            <Navbar />
            <Footer />
        </>
    );
};

export default Standingspage;