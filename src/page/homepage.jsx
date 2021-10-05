import React from "react";
import Navbar from "../components/Navbar";
import { Footer } from "../components/Footer";
import { BackgroundFilter, ContentContainer, TopContainer, TextContainer, TitleText, TitleTextResponsive,
    SeasonText, MoreInfoContainer, DownArrowContainer, ContentTextContainer, InfoContainer, 
    ContentText, InfoContent, InfoText, InfoTextTwo, ContentFilter } from "../pageStyles/homepage";
import { Button } from "../components/Button";
import { scroller } from "react-scroll";
import "../pageStyles/homestyle.scss";

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
                    <TextContainer className="loadInAnim">
                        <TitleText style={{ fontFamily: 'Yusei Magic' }}>
                            Seasonal Draft
                        </TitleText>
                        <TitleText style={{ fontFamily: 'Yusei Magic' }}>
                            Championship
                        </TitleText>
                        <TitleTextResponsive style={{ fontFamily: 'Yusei Magic' }}>
                            Seasonal
                        </TitleTextResponsive>
                        <TitleTextResponsive style={{ fontFamily: 'Yusei Magic' }}>
                            Draft
                        </TitleTextResponsive>
                        <TitleTextResponsive style={{ fontFamily: 'Yusei Magic' }}>
                            Championship
                        </TitleTextResponsive>
                        <SeasonText style={{ fontFamily: 'Yusei Magic' }} className="glitch">
                            Season 10
                        </SeasonText>
                    </TextContainer>
                    <MoreInfoContainer>
                        <Button onClick={scrollToNextSection} style={{ fontFamily: 'Yusei Magic' }}>Learn more</Button>
                    </MoreInfoContainer>
                    <DownArrowContainer onClick={scrollToNextSection}>
                        <div class="chevron"></div>
                        <div class="chevron"></div>
                        <div class="chevron"></div>
                    </DownArrowContainer>
                </BackgroundFilter>
            </TopContainer>
            <Navbar />
            <ContentContainer name="contentSection">
                <ContentFilter>
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
                            <span style={{ fontSize: 25, fontWeight: 600, textDecoration: 'underline', color: '#F3633F', fontFamily: 'Yusei Magic', letterSpacing: '.1em'}}>Drafted Players Compete</span>
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
                            <span style={{ fontSize: 25, fontWeight: 600, textDecoration: 'underline', color: '#DBFF76', fontFamily: 'Yusei Magic', letterSpacing: '.1em'}}>Round Robin Format</span>
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
                            <span style={{ fontSize: 25, fontWeight: 600, textDecoration: 'underline', color: '#90E0F3', fontFamily: 'Yusei Magic', letterSpacing: '.1em'}}>Multi-Week Finals</span>
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
            </ContentContainer>
            <Footer />
        </>
    );
};

export default Homepage;

