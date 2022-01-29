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
                                            Veibae Simps
                                        </TeamNameText>
                                    </TeamNameTextContainer>
                                    <TeamImageContainer>
                                        <img className="img-resizeTeamsss" src={teamIMG1} alt="Team Logo"></img>
                                    </TeamImageContainer >
                                    <TeamCaptains>
                                        <TeamCaptainsText>
                                            (C): Aidonn
                                        </TeamCaptainsText>
                                    </TeamCaptains>
                                    <TeamCaptains>
                                        <TeamCaptainsText>
                                            (VC): Hermy
                                        </TeamCaptainsText>
                                    </TeamCaptains>
                                    <SC1>
                                        <span style={{ fontWeight: '600', color: 'black', fontSize: '35px', marginLeft: '10px'}}> 
                                        </span>
                                    </SC1>
                                    <SC2>
                                        <span style={{ fontWeight: '600', color: 'black', fontSize: '35px', marginLeft: '10px'}}> 
                                        </span>
                                    </SC2>
                                    <SC3>
                                        <span style={{ fontWeight: '600', color: 'black', fontSize: '35px', marginLeft: '10px'}}> 
                                        </span>
                                    </SC3>
                                    <SC1>
                                        <span style={{ fontWeight: '600', color: 'black', fontSize: '35px', marginLeft: '10px'}}> 
                                        </span>
                                    </SC1>
                                    <SC1>
                                        <span style={{ fontWeight: '600', color: 'black', fontSize: '35px', marginLeft: '10px'}}> 
                                        </span>
                                    </SC1>
                                    <SC2>
                                        <span style={{ fontWeight: '600', color: 'black', fontSize: '35px', marginLeft: '10px'}}> 
                                        </span>
                                    </SC2>
                                    <SC3>
                                        <span style={{ fontWeight: '600', color: 'black', fontSize: '35px', marginLeft: '10px'}}> 
                                        </span>
                                    </SC3>
                                    <SC2>
                                        <span style={{ fontWeight: '600', color: 'black', fontSize: '35px', marginLeft: '10px'}}> 
                                        </span>
                                    </SC2>
                                    <SC2>
                                        <span style={{ fontWeight: '600', color: 'black', fontSize: '35px', marginLeft: '10px'}}> 
                                        </span>
                                    </SC2>
                                    <SC1>
                                        <span style={{ fontWeight: '600', color: 'black', fontSize: '35px', marginLeft: '10px'}}> 
                                        </span>
                                    </SC1>
                                    <SC2>
                                        <span style={{ fontWeight: '600', color: 'black', fontSize: '35px', marginLeft: '10px'}}> 
                                        </span>
                                    </SC2>
                                    <SC1 style={{ backgroundColor: 'black'}}>
                                        <span style={{ fontWeight: '600', color: 'white', fontSize: '28px', marginLeft: '10px'}}> 
                                        0 - 0</span>
                                    </SC1>
                                </TeamName>
                            </ITC>
                            <ITC>
                                <TeamName style={{ backgroundColor: "#8ccc42"}}>
                                    <TeamNameTextContainer>
                                        <TeamNameText>
                                            High Five, Daisy!
                                        </TeamNameText>
                                    </TeamNameTextContainer>
                                    <TeamImageContainer>
                                        <img className="img-resizeTeamsss" src={teamIMG2} alt="Team Logo"></img>
                                    </TeamImageContainer >
                                    <TeamCaptains>
                                        <TeamCaptainsText>
                                            (C): blossøm
                                        </TeamCaptainsText>
                                    </TeamCaptains>
                                    <TeamCaptains>
                                        <TeamCaptainsText>
                                            (VC): banana ooÿoo
                                        </TeamCaptainsText>
                                    </TeamCaptains>
                                    <SC2>
                                        <span style={{ fontWeight: '600', color: 'black', fontSize: '35px', marginLeft: '10px'}}> 
                                        </span>
                                    </SC2>
                                    <SC1>
                                        <span style={{ fontWeight: '600', color: 'black', fontSize: '35px', marginLeft: '10px'}}> 
                                        </span>
                                    </SC1>
                                    <SC1>
                                        <span style={{ fontWeight: '600', color: 'black', fontSize: '35px', marginLeft: '10px'}}> 
                                        </span>
                                    </SC1>
                                    <SC3>
                                        <span style={{ fontWeight: '600', color: 'black', fontSize: '35px', marginLeft: '10px'}}> 
                                        </span>
                                    </SC3>
                                    <SC3>
                                        <span style={{ fontWeight: '600', color: 'black', fontSize: '35px', marginLeft: '10px'}}> 
                                        </span>
                                    </SC3>
                                    <SC3>
                                        <span style={{ fontWeight: '600', color: 'black', fontSize: '35px', marginLeft: '10px'}}> 
                                        </span>
                                    </SC3>
                                    <SC4>
                                        <span style={{ fontWeight: '600', color: 'black', fontSize: '35px', marginLeft: '10px'}}> 
                                        </span>
                                    </SC4>
                                    <SC2>
                                        <span style={{ fontWeight: '600', color: 'black', fontSize: '35px', marginLeft: '10px'}}> 
                                        </span>
                                    </SC2>
                                    <SC3>
                                        <span style={{ fontWeight: '600', color: 'black', fontSize: '35px', marginLeft: '10px'}}> 
                                        </span>
                                    </SC3>
                                    <SC2>
                                        <span style={{ fontWeight: '600', color: 'black', fontSize: '35px', marginLeft: '10px'}}> 
                                        </span>
                                    </SC2>
                                    <SC3>
                                        <span style={{ fontWeight: '600', color: 'black', fontSize: '35px', marginLeft: '10px'}}> 
                                        </span>
                                    </SC3>
                                    <SC1 style={{ backgroundColor: 'black'}}>
                                        <span style={{ fontWeight: '600', color: 'white', fontSize: '28px', marginLeft: '20px'}}> 
                                        0 - 0</span>
                                    </SC1>
                                </TeamName>
                            </ITC>
                            <ITC>
                                <TeamName style={{ backgroundColor: "#634389"}}>
                                    <TeamNameTextContainer>
                                        <TeamNameText>
                                            Cobra Kai
                                        </TeamNameText>
                                    </TeamNameTextContainer>
                                    <TeamImageContainer>
                                        <img className="img-resizeTeamsss" src={teamIMG3} alt="Team Logo"></img>
                                    </TeamImageContainer >
                                    <TeamCaptains>
                                        <TeamCaptainsText>
                                            (C): Mattsey
                                        </TeamCaptainsText>
                                    </TeamCaptains>
                                    <TeamCaptains>
                                        <TeamCaptainsText>
                                            (VC): Payneless
                                        </TeamCaptainsText>
                                    </TeamCaptains>
                                    <SC3>
                                        <span style={{ fontWeight: '600', color: 'black', fontSize: '35px', marginLeft: '10px'}}> 
                                        </span>
                                    </SC3>
                                    <SC3>
                                        <span style={{ fontWeight: '600', color: 'black', fontSize: '35px', marginLeft: '10px'}}> 
                                        </span>
                                    </SC3>
                                    <SC2>
                                        <span style={{ fontWeight: '600', color: 'black', fontSize: '35px', marginLeft: '10px'}}> 
                                        </span>
                                    </SC2>
                                    <SC2>
                                        <span style={{ fontWeight: '600', color: 'black', fontSize: '35px', marginLeft: '10px'}}> 
                                        </span>
                                    </SC2>
                                    <SC3>
                                        <span style={{ fontWeight: '600', color: 'black', fontSize: '35px', marginLeft: '10px'}}> 
                                        </span>
                                    </SC3>
                                    <SC4>
                                        <span style={{ fontWeight: '600', color: 'black', fontSize: '35px', marginLeft: '10px'}}> 
                                        </span>
                                    </SC4>
                                    <SC2>
                                        <span style={{ fontWeight: '600', color: 'black', fontSize: '35px', marginLeft: '10px'}}> 
                                        </span>
                                    </SC2>
                                    <SC3>
                                        <span style={{ fontWeight: '600', color: 'black', fontSize: '35px', marginLeft: '10px'}}> 
                                        </span>
                                    </SC3>
                                    <SC3>
                                        <span style={{ fontWeight: '600', color: 'black', fontSize: '35px', marginLeft: '10px'}}> 
                                        </span>
                                    </SC3>
                                    <SC2>
                                        <span style={{ fontWeight: '600', color: 'black', fontSize: '35px', marginLeft: '10px'}}> 
                                        </span>
                                    </SC2>
                                    <SC1>
                                        <span style={{ fontWeight: '600', color: 'black', fontSize: '35px', marginLeft: '10px'}}> 
                                        </span>
                                    </SC1>
                                    <SC1 style={{ backgroundColor: 'black'}}>
                                        <span style={{ fontWeight: '600', color: 'white', fontSize: '28px', marginLeft: '20px'}}> 
                                        0 - 0</span>
                                    </SC1>
                                </TeamName>
                            </ITC>
                            <ITC>
                                <TeamName style={{ backgroundColor: "#2c5881"}}>
                                    <TeamNameTextContainer>
                                        <TeamNameText>
                                            NCOG
                                        </TeamNameText>
                                    </TeamNameTextContainer>
                                    <TeamImageContainer>
                                        <img className="img-resizeTeamsss" src={teamIMG4} alt="Team Logo"></img>
                                    </TeamImageContainer >
                                    <TeamCaptains>
                                        <TeamCaptainsText>
                                            (C): Łukê
                                        </TeamCaptainsText>
                                    </TeamCaptains>
                                    <TeamCaptains>
                                        <TeamCaptainsText style={{ fontSize: '13px' }}>
                                            (VC): Prestoman
                                        </TeamCaptainsText>
                                    </TeamCaptains>
                                    <SC1>
                                        <span style={{ fontWeight: '600', color: 'black', fontSize: '35px', marginLeft: '10px'}}> 
                                        </span>
                                    </SC1>
                                    <SC4>
                                        <span style={{ fontWeight: '600', color: 'black', fontSize: '35px', marginLeft: '10px'}}> 
                                        </span>
                                    </SC4>
                                    <SC2>
                                        <span style={{ fontWeight: '600', color: 'black', fontSize: '35px', marginLeft: '10px'}}> 
                                        </span>
                                    </SC2>
                                    <SC1>
                                        <span style={{ fontWeight: '600', color: 'black', fontSize: '35px', marginLeft: '10px'}}> 
                                        </span>
                                    </SC1>
                                    <SC4>
                                        <span style={{ fontWeight: '600', color: 'black', fontSize: '35px', marginLeft: '10px'}}> 
                                        </span>
                                    </SC4>
                                    <SC3>
                                        <span style={{ fontWeight: '600', color: 'black', fontSize: '35px', marginLeft: '10px'}}> 
                                        </span>
                                    </SC3>
                                    <SC1>
                                        <span style={{ fontWeight: '600', color: 'black', fontSize: '35px', marginLeft: '10px'}}> 
                                        </span>
                                    </SC1>
                                    <SC3>
                                        <span style={{ fontWeight: '600', color: 'black', fontSize: '35px', marginLeft: '10px'}}> 
                                        </span>
                                    </SC3>
                                    <SC2>
                                        <span style={{ fontWeight: '600', color: 'black', fontSize: '35px', marginLeft: '10px'}}> 
                                        </span>
                                    </SC2>
                                    <SC3>
                                        <span style={{ fontWeight: '600', color: 'black', fontSize: '35px', marginLeft: '10px'}}> 
                                        </span>
                                    </SC3>
                                    <SC1>
                                        <span style={{ fontWeight: '600', color: 'black', fontSize: '35px', marginLeft: '10px'}}> 
                                        </span>
                                    </SC1>
                                    <SC1 style={{ backgroundColor: 'black'}}>
                                        <span style={{ fontWeight: '600', color: 'white', fontSize: '28px', marginLeft: '10px'}}> 
                                        0 - 0</span>
                                    </SC1>
                                </TeamName>
                            </ITC>
                            <ITC>
                                <TeamName style={{ backgroundColor: "#2196f3"}}>
                                    <TeamNameTextContainer>
                                        <TeamNameText>
                                            Sussygons
                                        </TeamNameText>
                                    </TeamNameTextContainer>
                                    <TeamImageContainer>
                                        <img className="img-resizeTeamsss" src={teamIMG5} alt="Team Logo"></img>
                                    </TeamImageContainer >
                                    <TeamCaptains>
                                        <TeamCaptainsText>
                                            (C): Jasco
                                        </TeamCaptainsText>
                                    </TeamCaptains>
                                    <TeamCaptains>
                                        <TeamCaptainsText style={{ fontSize: '12px' }}>
                                            (VC): MoreSleep
                                        </TeamCaptainsText>
                                    </TeamCaptains>
                                    <SC4>
                                        <span style={{ fontWeight: '600', color: 'black', fontSize: '35px', marginLeft: '10px'}}> 
                                        </span>
                                    </SC4>
                                    <SC4>
                                        <span style={{ fontWeight: '600', color: 'black', fontSize: '35px', marginLeft: '10px'}}> 
                                        </span>
                                    </SC4>
                                    <SC3>
                                        <span style={{ fontWeight: '600', color: 'black', fontSize: '35px', marginLeft: '10px'}}> 
                                        </span>
                                    </SC3>
                                    <SC4>
                                        <span style={{ fontWeight: '600', color: 'black', fontSize: '35px', marginLeft: '10px'}}> 
                                        </span>
                                    </SC4>
                                    <SC2>
                                        <span style={{ fontWeight: '600', color: 'black', fontSize: '35px', marginLeft: '10px'}}> 
                                        </span>
                                    </SC2>
                                    <SC3>
                                        <span style={{ fontWeight: '600', color: 'black', fontSize: '35px', marginLeft: '10px'}}> 
                                        </span>
                                    </SC3>
                                    <SC3>
                                        <span style={{ fontWeight: '600', color: 'black', fontSize: '35px', marginLeft: '10px'}}> 
                                        </span>
                                    </SC3>
                                    <SC4>
                                        <span style={{ fontWeight: '600', color: 'black', fontSize: '35px', marginLeft: '10px'}}> 
                                        </span>
                                    </SC4>
                                    <SC1>
                                        <span style={{ fontWeight: '600', color: 'black', fontSize: '35px', marginLeft: '10px'}}> 
                                        </span>
                                    </SC1>
                                    <SC2>
                                        <span style={{ fontWeight: '600', color: 'black', fontSize: '35px', marginLeft: '10px'}}> 
                                        </span>
                                    </SC2>
                                    <SC4>
                                        <span style={{ fontWeight: '600', color: 'black', fontSize: '35px', marginLeft: '10px'}}> 
                                        </span>
                                    </SC4>
                                    <SC1 style={{ backgroundColor: 'black'}}>
                                        <span style={{ fontWeight: '600', color: 'white', fontSize: '28px', marginLeft: '20px'}}> 
                                        0 - 0</span>
                                    </SC1>
                                </TeamName>
                            </ITC>
                            <ITC>
                                <TeamName style={{ backgroundColor: "#cf3768"}}>
                                    <TeamNameTextContainer>
                                        <TeamNameText>
                                            Team Astral
                                        </TeamNameText>
                                    </TeamNameTextContainer>
                                    <TeamImageContainer>
                                        <img className="img-resizeTeamsss" src={teamIMG6} alt="Team Logo"></img>
                                    </TeamImageContainer >
                                    <TeamCaptains>
                                        <TeamCaptainsText>
                                            (C): Crucifix
                                        </TeamCaptainsText>
                                    </TeamCaptains>
                                    <TeamCaptains>
                                        <TeamCaptainsText>
                                            (VC): nDivine
                                        </TeamCaptainsText>
                                    </TeamCaptains>
                                    <SC3>
                                        <span style={{ fontWeight: '600', color: 'black', fontSize: '35px', marginLeft: '10px'}}> 
                                        </span>
                                    </SC3>
                                    <SC1>
                                        <span style={{ fontWeight: '600', color: 'black', fontSize: '35px', marginLeft: '10px'}}> 
                                        </span>
                                    </SC1>
                                    <SC3>
                                        <span style={{ fontWeight: '600', color: 'black', fontSize: '35px', marginLeft: '10px'}}> 
                                        </span>
                                    </SC3>
                                    <SC3>
                                        <span style={{ fontWeight: '600', color: 'black', fontSize: '35px', marginLeft: '10px'}}> 
                                        </span>
                                    </SC3>
                                    <SC2>
                                        <span style={{ fontWeight: '600', color: 'black', fontSize: '35px', marginLeft: '10px'}}> 
                                        </span>
                                    </SC2>
                                    <SC1>
                                        <span style={{ fontWeight: '600', color: 'black', fontSize: '35px', marginLeft: '10px'}}> 
                                        </span>
                                    </SC1>
                                    <SC2>
                                        <span style={{ fontWeight: '600', color: 'black', fontSize: '35px', marginLeft: '10px'}}> 
                                        </span>
                                    </SC2>
                                    <SC1>
                                        <span style={{ fontWeight: '600', color: 'black', fontSize: '35px', marginLeft: '10px'}}> 
                                        </span>
                                    </SC1>
                                    <SC1>
                                        <span style={{ fontWeight: '600', color: 'black', fontSize: '35px', marginLeft: '10px'}}> 
                                        </span>
                                    </SC1>
                                    <SC4>
                                        <span style={{ fontWeight: '600', color: 'black', fontSize: '35px', marginLeft: '10px'}}> 
                                        </span>
                                    </SC4>
                                    <SC1>
                                        <span style={{ fontWeight: '600', color: 'black', fontSize: '35px', marginLeft: '10px'}}> 
                                        </span>
                                    </SC1>
                                    <SC1 style={{ backgroundColor: 'black'}}>
                                        <span style={{ fontWeight: '600', color: 'white', fontSize: '28px', marginLeft: '20px'}}> 
                                        0 - 0</span>
                                    </SC1>
                                </TeamName>
                            </ITC>
                            <ITC>
                                <TeamName style={{ backgroundColor: "#4cb051"}}>
                                    <TeamNameTextContainer>
                                        <TeamNameText style={{ fontSize: '14px' }}>
                                            THE CHAOS EMERALDS
                                        </TeamNameText>
                                    </TeamNameTextContainer>
                                    <TeamImageContainer>
                                        <img className="img-resizeTeamsss" src={teamIMG7} alt="Team Logo"></img>
                                    </TeamImageContainer >
                                    <TeamCaptains>
                                        <TeamCaptainsText>
                                            (C): Sunscorched
                                        </TeamCaptainsText>
                                    </TeamCaptains>
                                    <TeamCaptains>
                                        <TeamCaptainsText>
                                            (VC): Seaboyer09
                                        </TeamCaptainsText>
                                    </TeamCaptains>
                                    <SC3>
                                        <span style={{ fontWeight: '600', color: 'black', fontSize: '35px', marginLeft: '10px'}}> 
                                        </span>
                                    </SC3>
                                    <SC3>
                                        <span style={{ fontWeight: '600', color: 'black', fontSize: '35px', marginLeft: '10px'}}> 
                                        </span>
                                    </SC3>
                                    <SC4>
                                        <span style={{ fontWeight: '600', color: 'black', fontSize: '35px', marginLeft: '10px'}}> 
                                        </span>
                                    </SC4>
                                    <SC3>
                                        <span style={{ fontWeight: '600', color: 'black', fontSize: '35px', marginLeft: '10px'}}> 
                                        </span>
                                    </SC3>
                                    <SC3>
                                        <span style={{ fontWeight: '600', color: 'black', fontSize: '35px', marginLeft: '10px'}}> 
                                        </span>
                                    </SC3>
                                    <SC3>
                                        <span style={{ fontWeight: '600', color: 'black', fontSize: '35px', marginLeft: '10px'}}> 
                                        </span>
                                    </SC3>
                                    <SC3>
                                        <span style={{ fontWeight: '600', color: 'black', fontSize: '35px', marginLeft: '10px'}}> 
                                        </span>
                                    </SC3>
                                    <SC4>
                                        <span style={{ fontWeight: '600', color: 'black', fontSize: '35px', marginLeft: '10px'}}> 
                                        </span>
                                    </SC4>
                                    <SC3>
                                        <span style={{ fontWeight: '600', color: 'black', fontSize: '35px', marginLeft: '10px'}}> 
                                        </span>
                                    </SC3>
                                    <SC4>
                                        <span style={{ fontWeight: '600', color: 'black', fontSize: '35px', marginLeft: '10px'}}> 
                                        </span>
                                    </SC4>
                                    <SC4>
                                        <span style={{ fontWeight: '600', color: 'black', fontSize: '35px', marginLeft: '10px'}}> 
                                        </span>
                                    </SC4>
                                    <SC1 style={{ backgroundColor: 'black'}}>
                                        <span style={{ fontWeight: '600', color: 'white', fontSize: '28px', marginLeft: '20px'}}> 
                                        0 - 0</span>
                                    </SC1>
                                </TeamName>
                            </ITC>
                            <ITC>
                                <TeamName style={{ backgroundColor: "#01dbed"}}>
                                    <TeamNameTextContainer>
                                        <TeamNameText style={{ fontSize: '14px'}}>
                                            FAIRY TAIL
                                        </TeamNameText>
                                    </TeamNameTextContainer>
                                    <TeamImageContainer>
                                        <img className="img-resizeTeamsss" src={teamIMG8} alt="Team Logo"></img>
                                    </TeamImageContainer >
                                    <TeamCaptains>
                                        <TeamCaptainsText>
                                            (C): ChrisTeeAnn
                                        </TeamCaptainsText>
                                    </TeamCaptains>
                                    <TeamCaptains>
                                        <TeamCaptainsText style={{ fontSize: '11px' }}>
                                            (VC): Heecher
                                        </TeamCaptainsText>
                                    </TeamCaptains>
                                    <SC2>
                                        <span style={{ fontWeight: '600', color: 'black', fontSize: '35px', marginLeft: '10px'}}> 
                                        </span>
                                    </SC2>
                                    <SC2>
                                        <span style={{ fontWeight: '600', color: 'black', fontSize: '35px', marginLeft: '10px'}}> 
                                        </span>
                                    </SC2>
                                    <SC2>
                                        <span style={{ fontWeight: '600', color: 'black', fontSize: '35px', marginLeft: '10px'}}> 
                                        </span>
                                    </SC2>
                                    <SC4>
                                        <span style={{ fontWeight: '600', color: 'black', fontSize: '35px', marginLeft: '10px'}}> 
                                        </span>
                                    </SC4>
                                    <SC2>
                                        <span style={{ fontWeight: '600', color: 'black', fontSize: '35px', marginLeft: '10px'}}> 
                                        </span>
                                    </SC2>
                                    <SC1>
                                        <span style={{ fontWeight: '600', color: 'black', fontSize: '35px', marginLeft: '10px'}}> 
                                        </span>
                                    </SC1>
                                    <SC1>
                                        <span style={{ fontWeight: '600', color: 'black', fontSize: '35px', marginLeft: '10px'}}> 
                                        </span>
                                    </SC1>
                                    <SC2>
                                        <span style={{ fontWeight: '600', color: 'black', fontSize: '35px', marginLeft: '10px'}}> 
                                        </span>
                                    </SC2>
                                    <SC4>
                                        <span style={{ fontWeight: '600', color: 'black', fontSize: '35px', marginLeft: '10px'}}> 
                                        </span>
                                    </SC4>
                                    <SC4>
                                        <span style={{ fontWeight: '600', color: 'black', fontSize: '35px', marginLeft: '10px'}}> 
                                        </span>
                                    </SC4>
                                    <SC3>
                                        <span style={{ fontWeight: '600', color: 'black', fontSize: '35px', marginLeft: '10px'}}> 
                                        </span>
                                    </SC3>
                                    <SC1 style={{ backgroundColor: 'black'}}>
                                        <span style={{ fontWeight: '600', color: 'white', fontSize: '28px', marginLeft: '20px'}}> 
                                        0 - 0</span>
                                    </SC1>
                                </TeamName>
                            </ITC>
                            <ITC>
                                <TeamName style={{ backgroundColor: "#018579"}}>
                                    <TeamNameTextContainer>
                                        <TeamNameText>
                                            Sleep Call Warriors
                                        </TeamNameText>
                                    </TeamNameTextContainer>
                                    <TeamImageContainer>
                                        <img className="img-resizeTeamsss" src={teamIMG9} alt="Team Logo"></img>
                                    </TeamImageContainer >
                                    <TeamCaptains>
                                        <TeamCaptainsText>
                                            (C): ZoranosLoL
                                        </TeamCaptainsText>
                                    </TeamCaptains>
                                    <TeamCaptains>
                                        <TeamCaptainsText>
                                            (VC): Tonguey
                                        </TeamCaptainsText>
                                    </TeamCaptains>
                                    <SC1>
                                        <span style={{ fontWeight: '600', color: 'black', fontSize: '35px', marginLeft: '10px'}}> 
                                        </span>
                                    </SC1>
                                    <SC2>
                                        <span style={{ fontWeight: '600', color: 'black', fontSize: '35px', marginLeft: '10px'}}> 
                                        </span>
                                    </SC2>
                                    <SC1>
                                        <span style={{ fontWeight: '600', color: 'black', fontSize: '35px', marginLeft: '10px'}}> 
                                        </span>
                                    </SC1>
                                    <SC2>
                                        <span style={{ fontWeight: '600', color: 'black', fontSize: '35px', marginLeft: '10px'}}> 
                                        </span>
                                    </SC2>
                                    <SC2>
                                        <span style={{ fontWeight: '600', color: 'black', fontSize: '35px', marginLeft: '10px'}}> 
                                        </span>
                                    </SC2>
                                    <SC4>
                                        <span style={{ fontWeight: '600', color: 'black', fontSize: '35px', marginLeft: '10px'}}> 
                                        </span>
                                    </SC4>
                                    <SC4>
                                        <span style={{ fontWeight: '600', color: 'black', fontSize: '35px', marginLeft: '10px'}}> 
                                        </span>
                                    </SC4>
                                    <SC3>
                                        <span style={{ fontWeight: '600', color: 'black', fontSize: '35px', marginLeft: '10px'}}> 
                                        </span>
                                    </SC3>
                                    <SC3>
                                        <span style={{ fontWeight: '600', color: 'black', fontSize: '35px', marginLeft: '10px'}}> 
                                        </span>
                                    </SC3>
                                    <SC3>
                                        <span style={{ fontWeight: '600', color: 'black', fontSize: '35px', marginLeft: '10px'}}> 
                                        </span>
                                    </SC3>
                                    <SC4>
                                        <span style={{ fontWeight: '600', color: 'black', fontSize: '35px', marginLeft: '10px'}}> 
                                        </span>
                                    </SC4>
                                    <SC1 style={{ backgroundColor: 'black'}}>
                                        <span style={{ fontWeight: '600', color: 'white', fontSize: '28px', marginLeft: '20px'}}> 
                                        0 - 0</span>
                                    </SC1>
                                </TeamName>
                            </ITC>
                            <ITC>
                                <TeamName style={{ backgroundColor: "#ff7b00"}}>
                                    <TeamNameTextContainer>
                                        <TeamNameText>
                                            The Sound 11
                                        </TeamNameText>
                                    </TeamNameTextContainer>
                                    <TeamImageContainer>
                                        <img className="img-resizeTeamsss" src={teamIMG10} alt="Team Logo"></img>
                                    </TeamImageContainer >
                                    <TeamCaptains>
                                        <TeamCaptainsText>
                                            (C): Sir Ratcha
                                        </TeamCaptainsText>
                                    </TeamCaptains>
                                    <TeamCaptains>
                                        <TeamCaptainsText style={{ fontSize: '13px' }}>
                                            (VC): 	xPhoenixGirl
                                        </TeamCaptainsText>
                                    </TeamCaptains>
                                    <SC4>
                                        <span style={{ fontWeight: '600', color: 'black', fontSize: '35px', marginLeft: '10px'}}> 
                                        </span>
                                    </SC4>
                                    <SC3>
                                        <span style={{ fontWeight: '600', color: 'black', fontSize: '35px', marginLeft: '10px'}}> 
                                        </span>
                                    </SC3>
                                    <SC3>
                                        <span style={{ fontWeight: '600', color: 'black', fontSize: '35px', marginLeft: '10px'}}> 
                                        </span>
                                    </SC3>
                                    <SC3>
                                        <span style={{ fontWeight: '600', color: 'black', fontSize: '35px', marginLeft: '10px'}}> 
                                        </span>
                                    </SC3>
                                    <SC3>
                                        <span style={{ fontWeight: '600', color: 'black', fontSize: '35px', marginLeft: '10px'}}> 
                                        </span>
                                    </SC3>
                                    <SC2>
                                        <span style={{ fontWeight: '600', color: 'black', fontSize: '35px', marginLeft: '10px'}}> 
                                        </span>
                                    </SC2>
                                    <SC3>
                                        <span style={{ fontWeight: '600', color: 'black', fontSize: '35px', marginLeft: '10px'}}> 
                                        </span>
                                    </SC3>
                                    <SC1>
                                        <span style={{ fontWeight: '600', color: 'black', fontSize: '35px', marginLeft: '10px'}}> 
                                        </span>
                                    </SC1>
                                    <SC2>
                                        <span style={{ fontWeight: '600', color: 'black', fontSize: '35px', marginLeft: '10px'}}> 
                                        </span>
                                    </SC2>
                                    <SC3>
                                        <span style={{ fontWeight: '600', color: 'black', fontSize: '35px', marginLeft: '10px'}}> 
                                        </span>
                                    </SC3>
                                    <SC4>
                                        <span style={{ fontWeight: '600', color: 'black', fontSize: '35px', marginLeft: '10px'}}> 
                                        </span>
                                    </SC4>
                                    <SC1 style={{ backgroundColor: 'black'}}>
                                        <span style={{ fontWeight: '600', color: 'white', fontSize: '28px', marginLeft: '20px'}}> 
                                        0 - 0</span>
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