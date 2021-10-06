import React from "react";
import Navbar from "../components/Navbar";
import { Footer } from "../components/Footer";
import { BackgroundContainer, TopContainer, TeamsContainer, TeamsInnerContainer, 
    ITC, TeamName, TeamNameText, TeamNameTextContainer, TeamImageContainer, 
    TeamCaptains, TeamCaptainsText, SC1, SC2, SC3, SC4, 
    SDCIconContainer, SDCIconImageContainer, CaptainLabelContainer, 
    CaptainLabelText, ScheduleDatesContainer, 
    ScheduleDatesText, TotalContainer, TotalText, MarginLargeResize } from "../pageStyles/standings";

import "../pageStyles/standings.css";

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

import sdcIcon from "../assets/illustrations/sdcIconSmall.png";


const Standingspage = () => {
    return (
        <>
            <TopContainer>
                <BackgroundContainer>
                    <TeamsContainer>
                        <TeamsInnerContainer className="itcLoadIn">
                            <ITC>
                                <SDCIconContainer>
                                    <SDCIconImageContainer>
                                        <img className="iconResize" src={sdcIcon} alt="Seasonal Draft Championship Logo"></img>
                                    </SDCIconImageContainer>
                                </SDCIconContainer>
                                <CaptainLabelContainer>
                                    <CaptainLabelText>
                                        CAPTAIN
                                    </CaptainLabelText>
                                </CaptainLabelContainer>
                                <CaptainLabelContainer>
                                    <CaptainLabelText>
                                        VICE
                                    </CaptainLabelText>
                                </CaptainLabelContainer>
                                <ScheduleDatesContainer>
                                    <ScheduleDatesText>
                                        DAY ONE (AUGUST 28)
                                    </ScheduleDatesText>
                                </ScheduleDatesContainer>
                                <ScheduleDatesContainer>
                                    <ScheduleDatesText>
                                        DAY TWO (AUGUST 29)
                                    </ScheduleDatesText>
                                </ScheduleDatesContainer>
                                <ScheduleDatesContainer>
                                    <ScheduleDatesText>
                                        DAY THREE (SEPT 4)
                                    </ScheduleDatesText>
                                </ScheduleDatesContainer>
                                <ScheduleDatesContainer>
                                    <ScheduleDatesText>
                                        DAY FOUR (SEPT 5)
                                    </ScheduleDatesText>
                                </ScheduleDatesContainer>
                                <ScheduleDatesContainer>
                                    <ScheduleDatesText>
                                        DAY FIVE (SEPT 11)
                                    </ScheduleDatesText>
                                </ScheduleDatesContainer>
                                <ScheduleDatesContainer>
                                    <ScheduleDatesText>
                                        DAY SIX (SEPT 12)
                                    </ScheduleDatesText>
                                </ScheduleDatesContainer>
                                <ScheduleDatesContainer>
                                    <ScheduleDatesText>
                                        DAY SEVEN (SEPT 18)
                                    </ScheduleDatesText>
                                </ScheduleDatesContainer>
                                <ScheduleDatesContainer>
                                    <ScheduleDatesText>
                                        DAY EIGHT (SEPT 19)
                                    </ScheduleDatesText>
                                </ScheduleDatesContainer>
                                <ScheduleDatesContainer>
                                    <ScheduleDatesText>
                                        DAY NINE (SEPT 25)
                                    </ScheduleDatesText>
                                </ScheduleDatesContainer>
                                <ScheduleDatesContainer>
                                    <ScheduleDatesText>
                                        DAY TEN (SEPT 26)
                                    </ScheduleDatesText>
                                </ScheduleDatesContainer>
                                <ScheduleDatesContainer>
                                    <ScheduleDatesText>
                                        DAY ELEVEN (OCT 2)
                                    </ScheduleDatesText>
                                </ScheduleDatesContainer>
                                <TotalContainer>
                                    <TotalText>
                                        TOTAL
                                    </TotalText>
                                </TotalContainer>
                            </ITC>
                            <ITC>
                                <TeamName style={{ backgroundColor: "#ff3c3c"}}>
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
                                            (C): Mixture
                                        </TeamCaptainsText>
                                    </TeamCaptains>
                                    <TeamCaptains>
                                        <TeamCaptainsText>
                                            (VC): Jasco
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
                                    <SC1 style={{ backgroundColor: 'black'}}>
                                        <span style={{ fontWeight: '600', color: 'white', fontSize: '28px', marginLeft: '10px'}}> 
                                        24 - 9</span>
                                    </SC1>
                                </TeamName>
                            </ITC>
                            <ITC>
                                <TeamName style={{ backgroundColor: "#8ccc42"}}>
                                    <TeamNameTextContainer>
                                        <TeamNameText>
                                            11 Sad Men
                                        </TeamNameText>
                                    </TeamNameTextContainer>
                                    <TeamImageContainer>
                                        <img className="img-resizeTeamsss" src={teamIMG2} alt="Team Logo"></img>
                                    </TeamImageContainer >
                                    <TeamCaptains>
                                        <TeamCaptainsText>
                                            (C): Henny
                                        </TeamCaptainsText>
                                    </TeamCaptains>
                                    <TeamCaptains>
                                        <TeamCaptainsText>
                                            (VC): Jasco
                                        </TeamCaptainsText>
                                    </TeamCaptains>
                                    <SC2>
                                        <span style={{ fontWeight: '600', color: 'black', fontSize: '35px', marginLeft: '10px'}}> 
                                        2 - 1</span>
                                    </SC2>
                                    <SC1>
                                        <span style={{ fontWeight: '600', color: 'black', fontSize: '35px', marginLeft: '10px'}}> 
                                        3 - 0</span>
                                    </SC1>
                                    <SC1>
                                        <span style={{ fontWeight: '600', color: 'black', fontSize: '35px', marginLeft: '10px'}}> 
                                        3 - 0</span>
                                    </SC1>
                                    <SC3>
                                        <span style={{ fontWeight: '600', color: 'black', fontSize: '35px', marginLeft: '10px'}}> 
                                        1 - 2</span>
                                    </SC3>
                                    <SC3>
                                        <span style={{ fontWeight: '600', color: 'black', fontSize: '35px', marginLeft: '10px'}}> 
                                        1 - 2</span>
                                    </SC3>
                                    <SC3>
                                        <span style={{ fontWeight: '600', color: 'black', fontSize: '35px', marginLeft: '10px'}}> 
                                        1 - 2</span>
                                    </SC3>
                                    <SC4>
                                        <span style={{ fontWeight: '600', color: 'black', fontSize: '35px', marginLeft: '10px'}}> 
                                        0 - 3</span>
                                    </SC4>
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
                                    <SC3>
                                        <span style={{ fontWeight: '600', color: 'black', fontSize: '35px', marginLeft: '10px'}}> 
                                        1 - 2</span>
                                    </SC3>
                                    <SC1 style={{ backgroundColor: 'black'}}>
                                        <span style={{ fontWeight: '600', color: 'white', fontSize: '28px', marginLeft: '10px'}}> 
                                        24 - 9</span>
                                    </SC1>
                                </TeamName>
                            </ITC>
                            <ITC>
                                <TeamName style={{ backgroundColor: "#634389"}}>
                                    <TeamNameTextContainer>
                                        <TeamNameText>
                                            OCEAN'S ELEVEN
                                        </TeamNameText>
                                    </TeamNameTextContainer>
                                    <TeamImageContainer>
                                        <img className="img-resizeTeamsss" src={teamIMG3} alt="Team Logo"></img>
                                    </TeamImageContainer >
                                    <TeamCaptains>
                                        <TeamCaptainsText>
                                            (C): Patrick
                                        </TeamCaptainsText>
                                    </TeamCaptains>
                                    <TeamCaptains>
                                        <TeamCaptainsText>
                                            (VC): Loanrie
                                        </TeamCaptainsText>
                                    </TeamCaptains>
                                    <SC3>
                                        <span style={{ fontWeight: '600', color: 'black', fontSize: '35px', marginLeft: '10px'}}> 
                                        1 - 2</span>
                                    </SC3>
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
                                    <SC3>
                                        <span style={{ fontWeight: '600', color: 'black', fontSize: '35px', marginLeft: '10px'}}> 
                                        1 - 2</span>
                                    </SC3>
                                    <SC4>
                                        <span style={{ fontWeight: '600', color: 'black', fontSize: '35px', marginLeft: '10px'}}> 
                                        0 - 3</span>
                                    </SC4>
                                    <SC2>
                                        <span style={{ fontWeight: '600', color: 'black', fontSize: '35px', marginLeft: '10px'}}> 
                                        2 - 1</span>
                                    </SC2>
                                    <SC3>
                                        <span style={{ fontWeight: '600', color: 'black', fontSize: '35px', marginLeft: '10px'}}> 
                                        1 - 2</span>
                                    </SC3>
                                    <SC3>
                                        <span style={{ fontWeight: '600', color: 'black', fontSize: '35px', marginLeft: '10px'}}> 
                                        1 - 2</span>
                                    </SC3>
                                    <SC2>
                                        <span style={{ fontWeight: '600', color: 'black', fontSize: '35px', marginLeft: '10px'}}> 
                                        2 - 1</span>
                                    </SC2>
                                    <SC1>
                                        <span style={{ fontWeight: '600', color: 'black', fontSize: '35px', marginLeft: '10px'}}> 
                                        3 - 0</span>
                                    </SC1>
                                    <SC1 style={{ backgroundColor: 'black'}}>
                                        <span style={{ fontWeight: '600', color: 'white', fontSize: '28px', marginLeft: '10px'}}> 
                                        16 - 17</span>
                                    </SC1>
                                </TeamName>
                            </ITC>
                            <ITC>
                                <TeamName style={{ backgroundColor: "#2c5881"}}>
                                    <TeamNameTextContainer>
                                        <TeamNameText>
                                            Karasuno
                                        </TeamNameText>
                                    </TeamNameTextContainer>
                                    <TeamImageContainer>
                                        <img className="img-resizeTeamsss" src={teamIMG4} alt="Team Logo"></img>
                                    </TeamImageContainer >
                                    <TeamCaptains>
                                        <TeamCaptainsText>
                                            (C): Mattsey
                                        </TeamCaptainsText>
                                    </TeamCaptains>
                                    <TeamCaptains>
                                        <TeamCaptainsText style={{ fontSize: '13px' }}>
                                            (VC): Shredman3
                                        </TeamCaptainsText>
                                    </TeamCaptains>
                                    <SC1>
                                        <span style={{ fontWeight: '600', color: 'black', fontSize: '35px', marginLeft: '10px'}}> 
                                        3 - 0</span>
                                    </SC1>
                                    <SC4>
                                        <span style={{ fontWeight: '600', color: 'black', fontSize: '35px', marginLeft: '10px'}}> 
                                        0 - 3</span>
                                    </SC4>
                                    <SC2>
                                        <span style={{ fontWeight: '600', color: 'black', fontSize: '35px', marginLeft: '10px'}}> 
                                        2 - 1</span>
                                    </SC2>
                                    <SC1>
                                        <span style={{ fontWeight: '600', color: 'black', fontSize: '35px', marginLeft: '10px'}}> 
                                        3 - 0</span>
                                    </SC1>
                                    <SC4>
                                        <span style={{ fontWeight: '600', color: 'black', fontSize: '35px', marginLeft: '10px'}}> 
                                        0 - 3</span>
                                    </SC4>
                                    <SC3>
                                        <span style={{ fontWeight: '600', color: 'black', fontSize: '35px', marginLeft: '10px'}}> 
                                        1 - 2</span>
                                    </SC3>
                                    <SC1>
                                        <span style={{ fontWeight: '600', color: 'black', fontSize: '35px', marginLeft: '10px'}}> 
                                        3 - 0</span>
                                    </SC1>
                                    <SC3>
                                        <span style={{ fontWeight: '600', color: 'black', fontSize: '35px', marginLeft: '10px'}}> 
                                        1 - 2</span>
                                    </SC3>
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
                                    <SC1 style={{ backgroundColor: 'black'}}>
                                        <span style={{ fontWeight: '600', color: 'white', fontSize: '28px', marginLeft: '10px'}}> 
                                        19 - 14</span>
                                    </SC1>
                                </TeamName>
                            </ITC>
                            <ITC>
                                <TeamName style={{ backgroundColor: "#2196f3"}}>
                                    <TeamNameTextContainer>
                                        <TeamNameText>
                                            Bad Ending
                                        </TeamNameText>
                                    </TeamNameTextContainer>
                                    <TeamImageContainer>
                                        <img className="img-resizeTeamsss" src={teamIMG5} alt="Team Logo"></img>
                                    </TeamImageContainer >
                                    <TeamCaptains>
                                        <TeamCaptainsText>
                                            (C): QQ
                                        </TeamCaptainsText>
                                    </TeamCaptains>
                                    <TeamCaptains>
                                        <TeamCaptainsText style={{ fontSize: '12px' }}>
                                            (VC): Wakapanda
                                        </TeamCaptainsText>
                                    </TeamCaptains>
                                    <SC4>
                                        <span style={{ fontWeight: '600', color: 'black', fontSize: '35px', marginLeft: '10px'}}> 
                                        0 - 3</span>
                                    </SC4>
                                    <SC4>
                                        <span style={{ fontWeight: '600', color: 'black', fontSize: '35px', marginLeft: '10px'}}> 
                                        0 - 3</span>
                                    </SC4>
                                    <SC3>
                                        <span style={{ fontWeight: '600', color: 'black', fontSize: '35px', marginLeft: '10px'}}> 
                                        1 - 2</span>
                                    </SC3>
                                    <SC4>
                                        <span style={{ fontWeight: '600', color: 'black', fontSize: '35px', marginLeft: '10px'}}> 
                                        0 - 3</span>
                                    </SC4>
                                    <SC2>
                                        <span style={{ fontWeight: '600', color: 'black', fontSize: '35px', marginLeft: '10px'}}> 
                                        2 - 1</span>
                                    </SC2>
                                    <SC3>
                                        <span style={{ fontWeight: '600', color: 'black', fontSize: '35px', marginLeft: '10px'}}> 
                                        1 - 2</span>
                                    </SC3>
                                    <SC3>
                                        <span style={{ fontWeight: '600', color: 'black', fontSize: '35px', marginLeft: '10px'}}> 
                                        1 - 2</span>
                                    </SC3>
                                    <SC4>
                                        <span style={{ fontWeight: '600', color: 'black', fontSize: '35px', marginLeft: '10px'}}> 
                                        0 - 3</span>
                                    </SC4>
                                    <SC1>
                                        <span style={{ fontWeight: '600', color: 'black', fontSize: '35px', marginLeft: '10px'}}> 
                                        3 - 0</span>
                                    </SC1>
                                    <SC2>
                                        <span style={{ fontWeight: '600', color: 'black', fontSize: '35px', marginLeft: '10px'}}> 
                                        2 - 1</span>
                                    </SC2>
                                    <SC4>
                                        <span style={{ fontWeight: '600', color: 'black', fontSize: '35px', marginLeft: '10px'}}> 
                                        0 - 3</span>
                                    </SC4>
                                    <SC1 style={{ backgroundColor: 'black'}}>
                                        <span style={{ fontWeight: '600', color: 'white', fontSize: '28px', marginLeft: '10px'}}> 
                                        10 - 23</span>
                                    </SC1>
                                </TeamName>
                            </ITC>
                            <ITC>
                                <TeamName style={{ backgroundColor: "#cf3768"}}>
                                    <TeamNameTextContainer>
                                        <TeamNameText>
                                            The Hunter Association
                                        </TeamNameText>
                                    </TeamNameTextContainer>
                                    <TeamImageContainer>
                                        <img className="img-resizeTeamsss" src={teamIMG6} alt="Team Logo"></img>
                                    </TeamImageContainer >
                                    <TeamCaptains>
                                        <TeamCaptainsText>
                                            (C): Tonguey
                                        </TeamCaptainsText>
                                    </TeamCaptains>
                                    <TeamCaptains>
                                        <TeamCaptainsText>
                                            (VC): Dubz
                                        </TeamCaptainsText>
                                    </TeamCaptains>
                                    <SC3>
                                        <span style={{ fontWeight: '600', color: 'black', fontSize: '35px', marginLeft: '10px'}}> 
                                        1 - 2</span>
                                    </SC3>
                                    <SC1>
                                        <span style={{ fontWeight: '600', color: 'black', fontSize: '35px', marginLeft: '10px'}}> 
                                        3 - 0</span>
                                    </SC1>
                                    <SC3>
                                        <span style={{ fontWeight: '600', color: 'black', fontSize: '35px', marginLeft: '10px'}}> 
                                        1 - 2</span>
                                    </SC3>
                                    <SC3>
                                        <span style={{ fontWeight: '600', color: 'black', fontSize: '35px', marginLeft: '10px'}}> 
                                        1 - 2</span>
                                    </SC3>
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
                                    <SC1>
                                        <span style={{ fontWeight: '600', color: 'black', fontSize: '35px', marginLeft: '10px'}}> 
                                        3 - 0</span>
                                    </SC1>
                                    <SC1>
                                        <span style={{ fontWeight: '600', color: 'black', fontSize: '35px', marginLeft: '10px'}}> 
                                        3 - 0</span>
                                    </SC1>
                                    <SC4>
                                        <span style={{ fontWeight: '600', color: 'black', fontSize: '35px', marginLeft: '10px'}}> 
                                        0 - 3</span>
                                    </SC4>
                                    <SC1>
                                        <span style={{ fontWeight: '600', color: 'black', fontSize: '35px', marginLeft: '10px'}}> 
                                        3 - 0</span>
                                    </SC1>
                                    <SC1 style={{ backgroundColor: 'black'}}>
                                        <span style={{ fontWeight: '600', color: 'white', fontSize: '28px', marginLeft: '10px'}}> 
                                        22 - 11</span>
                                    </SC1>
                                </TeamName>
                            </ITC>
                            <ITC>
                                <TeamName style={{ backgroundColor: "#4cb051"}}>
                                    <TeamNameTextContainer>
                                        <TeamNameText style={{ fontSize: '14px' }}>
                                            Underdogs 2.0
                                        </TeamNameText>
                                    </TeamNameTextContainer>
                                    <TeamImageContainer>
                                        <img className="img-resizeTeamsss" src={teamIMG7} alt="Team Logo"></img>
                                    </TeamImageContainer >
                                    <TeamCaptains>
                                        <TeamCaptainsText>
                                            (C): Rifle
                                        </TeamCaptainsText>
                                    </TeamCaptains>
                                    <TeamCaptains>
                                        <TeamCaptainsText>
                                            (VC): Kami
                                        </TeamCaptainsText>
                                    </TeamCaptains>
                                    <SC3>
                                        <span style={{ fontWeight: '600', color: 'black', fontSize: '35px', marginLeft: '10px'}}> 
                                        1 - 2</span>
                                    </SC3>
                                    <SC3>
                                        <span style={{ fontWeight: '600', color: 'black', fontSize: '35px', marginLeft: '10px'}}> 
                                        1 - 2</span>
                                    </SC3>
                                    <SC4>
                                        <span style={{ fontWeight: '600', color: 'black', fontSize: '35px', marginLeft: '10px'}}> 
                                        0 - 3</span>
                                    </SC4>
                                    <SC3>
                                        <span style={{ fontWeight: '600', color: 'black', fontSize: '35px', marginLeft: '10px'}}> 
                                        1 - 2</span>
                                    </SC3>
                                    <SC3>
                                        <span style={{ fontWeight: '600', color: 'black', fontSize: '35px', marginLeft: '10px'}}> 
                                        1 - 2</span>
                                    </SC3>
                                    <SC3>
                                        <span style={{ fontWeight: '600', color: 'black', fontSize: '35px', marginLeft: '10px'}}> 
                                        1 - 2</span>
                                    </SC3>
                                    <SC3>
                                        <span style={{ fontWeight: '600', color: 'black', fontSize: '35px', marginLeft: '10px'}}> 
                                        1 - 2</span>
                                    </SC3>
                                    <SC4>
                                        <span style={{ fontWeight: '600', color: 'black', fontSize: '35px', marginLeft: '10px'}}> 
                                        0 - 3</span>
                                    </SC4>
                                    <SC3>
                                        <span style={{ fontWeight: '600', color: 'black', fontSize: '35px', marginLeft: '10px'}}> 
                                        1 - 2</span>
                                    </SC3>
                                    <SC4>
                                        <span style={{ fontWeight: '600', color: 'black', fontSize: '35px', marginLeft: '10px'}}> 
                                        0 - 3</span>
                                    </SC4>
                                    <SC4>
                                        <span style={{ fontWeight: '600', color: 'black', fontSize: '35px', marginLeft: '10px'}}> 
                                        0 - 3</span>
                                    </SC4>
                                    <SC1 style={{ backgroundColor: 'black'}}>
                                        <span style={{ fontWeight: '600', color: 'white', fontSize: '28px', marginLeft: '10px'}}> 
                                        7 - 26</span>
                                    </SC1>
                                </TeamName>
                            </ITC>
                            <ITC>
                                <TeamName style={{ backgroundColor: "#01dbed"}}>
                                    <TeamNameTextContainer>
                                        <TeamNameText style={{ fontSize: '14px'}}>
                                            ENLIGHTENED
                                        </TeamNameText>
                                    </TeamNameTextContainer>
                                    <TeamImageContainer>
                                        <img className="img-resizeTeamsss" src={teamIMG8} alt="Team Logo"></img>
                                    </TeamImageContainer >
                                    <TeamCaptains>
                                        <TeamCaptainsText>
                                            (C): Grayfawx
                                        </TeamCaptainsText>
                                    </TeamCaptains>
                                    <TeamCaptains>
                                        <TeamCaptainsText style={{ fontSize: '11px' }}>
                                            (VC): Silverhammer
                                        </TeamCaptainsText>
                                    </TeamCaptains>
                                    <SC2>
                                        <span style={{ fontWeight: '600', color: 'black', fontSize: '35px', marginLeft: '10px'}}> 
                                        2 - 1</span>
                                    </SC2>
                                    <SC2>
                                        <span style={{ fontWeight: '600', color: 'black', fontSize: '35px', marginLeft: '10px'}}> 
                                        2 - 1</span>
                                    </SC2>
                                    <SC2>
                                        <span style={{ fontWeight: '600', color: 'black', fontSize: '35px', marginLeft: '10px'}}> 
                                        2 - 1</span>
                                    </SC2>
                                    <SC4>
                                        <span style={{ fontWeight: '600', color: 'black', fontSize: '35px', marginLeft: '10px'}}> 
                                        0 - 3</span>
                                    </SC4>
                                    <SC2>
                                        <span style={{ fontWeight: '600', color: 'black', fontSize: '35px', marginLeft: '10px'}}> 
                                        2 - 1</span>
                                    </SC2>
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
                                    <SC4>
                                        <span style={{ fontWeight: '600', color: 'black', fontSize: '35px', marginLeft: '10px'}}> 
                                        0 - 3</span>
                                    </SC4>
                                    <SC4>
                                        <span style={{ fontWeight: '600', color: 'black', fontSize: '35px', marginLeft: '10px'}}> 
                                        3 - 0</span>
                                    </SC4>
                                    <SC3>
                                        <span style={{ fontWeight: '600', color: 'black', fontSize: '35px', marginLeft: '10px'}}> 
                                        1 - 2</span>
                                    </SC3>
                                    <SC1 style={{ backgroundColor: 'black'}}>
                                        <span style={{ fontWeight: '600', color: 'white', fontSize: '28px', marginLeft: '10px'}}> 
                                        20 - 13</span>
                                    </SC1>
                                </TeamName>
                            </ITC>
                            <ITC>
                                <TeamName style={{ backgroundColor: "#018579"}}>
                                    <TeamNameTextContainer>
                                        <TeamNameText>
                                            Return of the Mormons
                                        </TeamNameText>
                                    </TeamNameTextContainer>
                                    <TeamImageContainer>
                                        <img className="img-resizeTeamsss" src={teamIMG9} alt="Team Logo"></img>
                                    </TeamImageContainer >
                                    <TeamCaptains>
                                        <TeamCaptainsText>
                                            (C): Jaedon
                                        </TeamCaptainsText>
                                    </TeamCaptains>
                                    <TeamCaptains>
                                        <TeamCaptainsText>
                                            (VC): Zoranos
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
                                    <SC1>
                                        <span style={{ fontWeight: '600', color: 'black', fontSize: '35px', marginLeft: '10px'}}> 
                                        3 - 0</span>
                                    </SC1>
                                    <SC2>
                                        <span style={{ fontWeight: '600', color: 'black', fontSize: '35px', marginLeft: '10px'}}> 
                                        2 - 1</span>
                                    </SC2>
                                    <SC2>
                                        <span style={{ fontWeight: '600', color: 'black', fontSize: '35px', marginLeft: '10px'}}> 
                                        2 - 1</span>
                                    </SC2>
                                    <SC4>
                                        <span style={{ fontWeight: '600', color: 'black', fontSize: '35px', marginLeft: '10px'}}> 
                                        0 - 3</span>
                                    </SC4>
                                    <SC4>
                                        <span style={{ fontWeight: '600', color: 'black', fontSize: '35px', marginLeft: '10px'}}> 
                                        0 - 3</span>
                                    </SC4>
                                    <SC3>
                                        <span style={{ fontWeight: '600', color: 'black', fontSize: '35px', marginLeft: '10px'}}> 
                                        1 - 2</span>
                                    </SC3>
                                    <SC3>
                                        <span style={{ fontWeight: '600', color: 'black', fontSize: '35px', marginLeft: '10px'}}> 
                                        1 - 2</span>
                                    </SC3>
                                    <SC3>
                                        <span style={{ fontWeight: '600', color: 'black', fontSize: '35px', marginLeft: '10px'}}> 
                                        1 - 2</span>
                                    </SC3>
                                    <SC4>
                                        <span style={{ fontWeight: '600', color: 'black', fontSize: '35px', marginLeft: '10px'}}> 
                                        0 - 3</span>
                                    </SC4>
                                    <SC1 style={{ backgroundColor: 'black'}}>
                                        <span style={{ fontWeight: '600', color: 'white', fontSize: '28px', marginLeft: '10px'}}> 
                                        15 - 18</span>
                                    </SC1>
                                </TeamName>
                            </ITC>
                            <ITC>
                                <TeamName style={{ backgroundColor: "#ff7b00"}}>
                                    <TeamNameTextContainer>
                                        <TeamNameText>
                                            CULT
                                        </TeamNameText>
                                    </TeamNameTextContainer>
                                    <TeamImageContainer>
                                        <img className="img-resizeTeamsss" src={teamIMG10} alt="Team Logo"></img>
                                    </TeamImageContainer >
                                    <TeamCaptains>
                                        <TeamCaptainsText>
                                            (C): Bane
                                        </TeamCaptainsText>
                                    </TeamCaptains>
                                    <TeamCaptains>
                                        <TeamCaptainsText style={{ fontSize: '13px' }}>
                                            (VC): MrDucky13
                                        </TeamCaptainsText>
                                    </TeamCaptains>
                                    <SC4>
                                        <span style={{ fontWeight: '600', color: 'black', fontSize: '35px', marginLeft: '10px'}}> 
                                        0 - 3</span>
                                    </SC4>
                                    <SC3>
                                        <span style={{ fontWeight: '600', color: 'black', fontSize: '35px', marginLeft: '10px'}}> 
                                        1 - 2</span>
                                    </SC3>
                                    <SC3>
                                        <span style={{ fontWeight: '600', color: 'black', fontSize: '35px', marginLeft: '10px'}}> 
                                        1 - 2</span>
                                    </SC3>
                                    <SC3>
                                        <span style={{ fontWeight: '600', color: 'black', fontSize: '35px', marginLeft: '10px'}}> 
                                        1 - 2</span>
                                    </SC3>
                                    <SC3>
                                        <span style={{ fontWeight: '600', color: 'black', fontSize: '35px', marginLeft: '10px'}}> 
                                        1 - 2</span>
                                    </SC3>
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
                                    <SC2>
                                        <span style={{ fontWeight: '600', color: 'black', fontSize: '35px', marginLeft: '10px'}}> 
                                        2 - 1</span>
                                    </SC2>
                                    <SC3>
                                        <span style={{ fontWeight: '600', color: 'black', fontSize: '35px', marginLeft: '10px'}}> 
                                        1 - 2</span>
                                    </SC3>
                                    <SC4>
                                        <span style={{ fontWeight: '600', color: 'black', fontSize: '35px', marginLeft: '10px'}}> 
                                        0 - 3</span>
                                    </SC4>
                                    <SC1 style={{ backgroundColor: 'black'}}>
                                        <span style={{ fontWeight: '600', color: 'white', fontSize: '28px', marginLeft: '10px'}}> 
                                        13 - 20</span>
                                    </SC1>
                                </TeamName>
                            </ITC>
                            <ITC>
                                <TeamName style={{ backgroundColor: "#fec106"}}>
                                    <TeamNameTextContainer>
                                        <TeamNameText>
                                            FINAL BOSS
                                        </TeamNameText>
                                    </TeamNameTextContainer>
                                    <TeamImageContainer>
                                        <img className="img-resizeTeamsss" src={teamIMG11} alt="Team Logo"></img>
                                    </TeamImageContainer >
                                    <TeamCaptains>
                                        <TeamCaptainsText>
                                            (C): XZWolf
                                        </TeamCaptainsText>
                                    </TeamCaptains>
                                    <TeamCaptains>
                                        <TeamCaptainsText>
                                            (VC): Jwebb
                                        </TeamCaptainsText>
                                    </TeamCaptains>
                                    <SC4>
                                        <span style={{ fontWeight: '600', color: 'black', fontSize: '35px', marginLeft: '10px'}}> 
                                        0 - 3</span>
                                    </SC4>
                                    <SC2>
                                        <span style={{ fontWeight: '600', color: 'black', fontSize: '35px', marginLeft: '10px'}}> 
                                        3 - 0</span>
                                    </SC2>
                                    <SC4>
                                        <span style={{ fontWeight: '600', color: 'black', fontSize: '35px', marginLeft: '10px'}}> 
                                        0 - 3</span>
                                    </SC4>
                                    <SC2>
                                        <span style={{ fontWeight: '600', color: 'black', fontSize: '35px', marginLeft: '10px'}}> 
                                        2 - 1</span>
                                    </SC2>
                                    <SC2>
                                        <span style={{ fontWeight: '600', color: 'black', fontSize: '35px', marginLeft: '10px'}}> 
                                        2 - 1</span>
                                    </SC2>
                                    <SC2>
                                        <span style={{ fontWeight: '600', color: 'black', fontSize: '35px', marginLeft: '10px'}}> 
                                        2 - 1</span>
                                    </SC2>
                                    <SC2>
                                        <span style={{ fontWeight: '600', color: 'black', fontSize: '35px', marginLeft: '10px'}}> 
                                        2 - 1</span>
                                    </SC2>
                                    <SC3>
                                        <span style={{ fontWeight: '600', color: 'black', fontSize: '35px', marginLeft: '10px'}}> 
                                        1 - 2</span>
                                    </SC3>
                                    <SC4>
                                        <span style={{ fontWeight: '600', color: 'black', fontSize: '35px', marginLeft: '10px'}}> 
                                        0 - 3</span>
                                    </SC4>
                                    <SC2>
                                        <span style={{ fontWeight: '600', color: 'black', fontSize: '35px', marginLeft: '10px'}}> 
                                        2 - 1</span>
                                    </SC2>
                                    <SC2>
                                        <span style={{ fontWeight: '600', color: 'black', fontSize: '35px', marginLeft: '10px'}}> 
                                        2 - 1</span>
                                    </SC2>
                                    <SC1 style={{ backgroundColor: 'black'}}>
                                        <span style={{ fontWeight: '600', color: 'white', fontSize: '28px', marginLeft: '10px'}}> 
                                        16 - 17</span>
                                    </SC1>
                                </TeamName>
                            </ITC>
                            <ITC>
                                <TeamName style={{ backgroundColor: "#8b5f3f"}}>
                                    <TeamNameTextContainer>
                                        <TeamNameText>
                                            MTG Convention Connosieurs
                                        </TeamNameText>
                                    </TeamNameTextContainer>
                                    <TeamImageContainer>
                                        <img className="img-resizeTeamsss" src={teamIMG12} alt="Team Logo"></img>
                                    </TeamImageContainer >
                                    <TeamCaptains>
                                        <TeamCaptainsText style={{ fontSize: '13px' }}>
                                            (C): Sunscorched
                                        </TeamCaptainsText>
                                    </TeamCaptains>
                                    <TeamCaptains>
                                        <TeamCaptainsText>
                                            (VC): Seaboyer
                                        </TeamCaptainsText>
                                    </TeamCaptains>
                                    <SC2>
                                        <span style={{ fontWeight: '600', color: 'black', fontSize: '35px', marginLeft: '10px'}}> 
                                        2 - 1</span>
                                    </SC2>
                                    <SC4>
                                        <span style={{ fontWeight: '600', color: 'black', fontSize: '35px', marginLeft: '10px'}}> 
                                        0 - 3</span>
                                    </SC4>
                                    <SC2>
                                        <span style={{ fontWeight: '600', color: 'black', fontSize: '35px', marginLeft: '10px'}}> 
                                        2 - 1</span>
                                    </SC2>
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
                                    <SC2>
                                        <span style={{ fontWeight: '600', color: 'black', fontSize: '35px', marginLeft: '10px'}}> 
                                        2 - 1</span>
                                    </SC2>
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
                                    <SC1 style={{ backgroundColor: 'black'}}>
                                        <span style={{ fontWeight: '600', color: 'white', fontSize: '28px', marginLeft: '10px'}}> 
                                        19 - 14</span>
                                    </SC1>
                                </TeamName>
                            </ITC>
                        </TeamsInnerContainer>
                    </TeamsContainer>
                    <MarginLargeResize />
                </BackgroundContainer>
            </TopContainer>
            <Navbar />
            <Footer />
        </>
    );
};

export default Standingspage;