import React from "react";
import Navbar from "../components/Navbar";
import { Footer } from "../components/Footer";
import { BackgroundFilter, ContentContainer, TopContainer, TitleText,
    SeasonText, MoreInfoContainer, DownArrowContainer, ContentTextContainer, InfoContainer, 
    ContentText, InfoContent, InfoText, InfoTextTwo, 
    ContentFilter, VideoContainer, TitleDiv, SeriesContainer, UpcomingContainer,
    SeriesDiv, SeriesImage, SeriesInfo, SeriesDateTime, 
    SeriesSignup, SeriesName, VideoContainerSmall, ViewAllContainer,
    ContentDIV, VideoContainerMobile } from "../pageStyles/homepage";
import LearnButton from "../components/Button/learnindex";
import { scroller } from "react-scroll";
import "../pageStyles/homestyle.scss";

import { Link } from 'react-router-dom';

import valorant from "../assets/illustrations/SeriesImages/valorant.png"
import tft from "../assets/illustrations/SeriesImages/tft.png"
import osu from "../assets/illustrations/SeriesImages/osu.png"
import tekken8 from "../assets/illustrations/SeriesImages/tekken8.png"
import pokemon from "../assets/illustrations/SeriesImages/pokemon.png"


import { C1Icon } from "../components/LogoSuites/indexc1";
import { D1Icon } from "../components/LogoSuites/indexd1";
import { H1Icon } from "../components/LogoSuites/indexh1";
import { S1Icon } from "../components/LogoSuites/indexs1";

const Homepage = () => {
    const scrollToNextSection = () => {
        scroller.scrollTo("contentSection", { smooth: true, duration: 1200 });
    }

    return (
        <>
            <TopContainer>
                <BackgroundFilter>
                    <ContentContainer className="loadInAnim">
                        <TitleDiv>
                            <TitleText>
                                Seasonal Draft
                            </TitleText>
                            <TitleText>
                                Championship
                            </TitleText>
                            <SeasonText className="glitch">
                                Season 17
                            </SeasonText>
                            <MoreInfoContainer>
                                <LearnButton onClick={scrollToNextSection}>
                                    LEARN MORE
                                </LearnButton>
                            </MoreInfoContainer>
                            <DownArrowContainer onClick={scrollToNextSection}>
                                <div className="chevron"></div>
                                <div className="chevron"></div>
                                <div className="chevron"></div>
                            </DownArrowContainer>
                        </TitleDiv>
                        <SeriesContainer>
                            <UpcomingContainer>
                                UPCOMING SERIES
                            </UpcomingContainer>
                            <Link to ="/game1" className="none">
                            <SeriesDiv>
                                <SeriesImage>
                                    <img className="series-resize-tekken8" src={tekken8} alt="tekken8"></img>
                                </SeriesImage>
                                <SeriesInfo>
                                    <SeriesName>
                                        TEKKEN 8
                                    </SeriesName>
                                    <SeriesDateTime>
                                        Monday, Feb 19, 7 EST
                                    </SeriesDateTime>
                                    <SeriesSignup>
                                        SIGN UPS : CLOSED
                                    </SeriesSignup>
                                </SeriesInfo>
                            </SeriesDiv>
                            </Link>
                            <Link to ="/game2" className="none">
                            <SeriesDiv>
                                <SeriesImage>
                                    <img className="series-resize-tft" src={tft} alt="tft"></img>
                                </SeriesImage>
                                <SeriesInfo>
                                    <SeriesName>
                                        TFT
                                    </SeriesName>
                                    <SeriesDateTime>
                                        Tuesday, Feb 20, 8 EST
                                    </SeriesDateTime>
                                    <SeriesSignup>
                                        SIGN UPS : CLOSED
                                    </SeriesSignup>
                                </SeriesInfo>
                            </SeriesDiv>
                            </Link>
                            <Link to ="/game3" className="none">
                            <SeriesDiv>
                                <SeriesImage>
                                    <img className="series-resize-tft" src={tft} alt="tft"></img>
                                </SeriesImage>
                                <SeriesInfo>
                                    <SeriesName>
                                        TFT
                                    </SeriesName>
                                    <SeriesDateTime>
                                        Wednesday, Feb 21, 8 EST
                                    </SeriesDateTime>
                                    <SeriesSignup>
                                        SIGN UPS : CLOSED
                                    </SeriesSignup>
                                </SeriesInfo>
                            </SeriesDiv>
                            </Link>
                            <Link to ="/game4" className="none">
                            <SeriesDiv>
                                <SeriesImage>
                                    <img className="series-resize-pokemon" src={pokemon} alt="pokemon"></img>
                                </SeriesImage>
                                <SeriesInfo>
                                    <SeriesName>
                                        Pokemon (OU Format: Gen 9, Singles)
                                    </SeriesName>
                                    <SeriesDateTime>
                                        Thursday, Feb 22, 8 EST
                                    </SeriesDateTime>
                                    <SeriesSignup>
                                        SIGN UPS : CLOSED
                                    </SeriesSignup>
                                </SeriesInfo>
                            </SeriesDiv>
                            </Link>
                            <Link to ="/game5" className="none">
                            <SeriesDiv>
                                <SeriesImage>
                                    <img className="series-resize-tft" src={tft} alt="tft"></img>
                                </SeriesImage>
                                <SeriesInfo>
                                    <SeriesName>
                                        TFT
                                    </SeriesName>
                                    <SeriesDateTime>
                                        Friday, Feb 23, 8 EST
                                    </SeriesDateTime>
                                    <SeriesSignup>
                                        SIGN UPS : CLOSED
                                    </SeriesSignup>
                                </SeriesInfo>
                            </SeriesDiv>
                            </Link>
                            <Link to="/series" className="sett">
                            <ViewAllContainer>
                                VIEW ALL SERIES
                            </ViewAllContainer>
                            </Link>
                        </SeriesContainer>
                    </ContentContainer>
                </BackgroundFilter>
            </TopContainer>
            <Navbar />
            <ContentDIV name="contentSection">
                <ContentFilter>
                <VideoContainerMobile>
                        <iframe 
                            width="340" 
                            height="200" 
                            src="https://www.youtube.com/embed/vV9GS-CJZFI" 
                            title="YouTube video player" 
                            frameBorder="1" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
                            gyroscope; picture-in-picture" 
                            allowFullScreen
                            >
                        </iframe>
                </VideoContainerMobile>
                <ContentTextContainer>
                    <ContentText>
                        <div className="anim-typewriter line-1">The Seasonal Draft Championship, SDC is</div>
                        <div className="anim-typewriter line-1">a tournament league that houses more than</div>
                        <div className="anim-typewriter line-1">one hundred players ranging in skill from</div>
                        <div className="anim-typewriter line-1">gold elo to challenger.</div>
                        <div className="contentDivider"></div>
                        <div className="anim-typewriter2 line-1">This League of Legends tournament is not</div>
                        <div className="anim-typewriter2 line-1">your standard tournament</div>
                        <div className="anim-typewriter2 line-1">but is more similar to a franchise system</div>
                        <div className="anim-typewriter2 line-1">that varies from season to season.</div>
                    </ContentText>
                    <VideoContainer>
                        <iframe 
                            width="560" 
                            height="315" 
                            src="https://www.youtube.com/embed/vV9GS-CJZFI" 
                            title="YouTube video player" 
                            frameBorder="1" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
                            gyroscope; picture-in-picture" 
                            allowFullScreen
                            >
                        </iframe>
                    </VideoContainer>
                    <VideoContainerSmall>
                        <iframe 
                            width="435" 
                            height="255" 
                            src="https://www.youtube.com/embed/vV9GS-CJZFI" 
                            title="YouTube video player" 
                            frameBorder="1" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
                            gyroscope; picture-in-picture" 
                            allowFullScreen
                            >
                        </iframe>
                    </VideoContainerSmall>
                </ContentTextContainer>
                <InfoContainer>
                    <InfoContent>
                        <InfoText>
                            <span style={{ fontSize: 25, fontWeight: 600, textDecoration: 'underline', color: '#FCA311', fontFamily: 'Yusei Magic', letterSpacing: '.1em'}}>Active Community</span>
                            <br />
                            <span style={{ fontSize: 22 }}>Off-Season Events</span>
                            <br />
                            <span style={{ fontSize: 22 }}>In-House Lobbies</span>
                            <br />
                            <span style={{ fontSize: 22 }}>Stats For All Season Participants</span>
                        </InfoText>
                    </InfoContent>
                    <InfoContent>
                        <C1Icon />
                    </InfoContent>
                    <InfoContent>
                        <InfoText>
                            <span style={{ fontSize: 23, fontWeight: 600, textDecoration: 'underline', color: '#F3633F', fontFamily: 'Yusei Magic', letterSpacing: '.1em'}}>Drafted Players Compete</span>
                            <br />
                            <span style={{ fontSize: 22 }}>132 Players Make 12 Teams of 11</span>
                            <br />
                            <span style={{ fontSize: 22 }}>8-10 Week Season</span>
                            <br />
                            <span style={{ fontSize: 22 }}>Manage Team Rosters and Points</span>
                        </InfoText>
                    </InfoContent>
                    <InfoContent>
                        <D1Icon />
                    </InfoContent>
                    <InfoContent>
                        <H1Icon />
                    </InfoContent>
                    <InfoContent>
                        <InfoTextTwo>
                            <span style={{ fontSize: 23, fontWeight: 600, textDecoration: 'underline', color: '#DBFF76', fontFamily: 'Yusei Magic', letterSpacing: '.1em' }}>Round Robin Format</span>
                            <br />
                            <span style={{ fontSize: 22 }}>198 Regular Season Games</span>
                            <br />
                            <span style={{ fontSize: 22 }}>33 Games Per Team</span>
                            <br />
                            <span style={{ fontSize: 22 }}>14-17 Games Per Player</span>
                        </InfoTextTwo>
                    </InfoContent>
                    <InfoContent>
                        <S1Icon />
                    </InfoContent>
                    <InfoContent>
                        <InfoTextTwo>
                            <span style={{ fontSize: 23, fontWeight: 600, textDecoration: 'underline', color: '#90E0F3', fontFamily: 'Yusei Magic', letterSpacing: '.1em'}}>Multi-Week Finals</span>
                            <br />
                            <span style={{ fontSize: 22 }}>Quarter Finals Best of 5</span>
                            <br />
                            <span style={{ fontSize: 22 }}>Semi-Finals and Finals Best of 7</span>
                            <br />
                            <span style={{ fontSize: 22 }}>Play Off Perks</span>
                        </InfoTextTwo>
                    </InfoContent>
                </InfoContainer>
                </ContentFilter>
            </ContentDIV>
            <Footer />
        </>
    );
};

export default Homepage;

