import React from "react";
import Navbar from "../components/Navbar";
import { BackgroundFilter, ContentContainer, TopContainer, TextContainer, TitleText, 
    SeasonText, MoreInfoContainer, DownArrowContainer, ContentText, ContentTextContainer } from "../pageStyles/homepage";
import { Button } from "../components/Button";
import { scroller } from "react-scroll";
import "../pageStyles/homestyle.scss";

const Homepage = () => {
    const scrollToNextSection = () => {
        scroller.scrollTo("contentSection", { smooth: true, duration: 1200 });
    }

    return (
        <>
            <TopContainer>
                <BackgroundFilter>
                    <TextContainer>
                        <TitleText style={{ fontFamily: 'Yusei Magic' }}>
                            Seasonal Draft
                        </TitleText>
                        <TitleText style={{ fontFamily: 'Yusei Magic' }}>
                            Championship
                        </TitleText>
                        <SeasonText style={{ fontFamily: 'Yusei Magic' }} className="glitch">
                            Season 9
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
                <ContentTextContainer>
                    <ContentText className="anim-typewriter">
                        The Seasonal Draft Championship is a tournament league that houses
                    </ContentText>
{/*                     <ContentText className="anim-typewriter">
                        more than one hundred players ranging in skill from gold elo to challenger.
                    </ContentText>
                    <ContentText className="anim-typewriter">
                        This League of Legends tournament is not your standard tournament
                    </ContentText>
                    <ContentText className="anim-typewriter">
                        but is more similar to a franchise system that varies from season to season.
                    </ContentText> */}
                </ContentTextContainer>
            </ContentContainer>
        </>
    );
};

export default Homepage;

