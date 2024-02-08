import React from "react";
import { BackgroundFilter, TopContainer, ContentContainer, SeriesContainer, UpcomingContainer,
    SeriesDiv, SeriesImage, SeriesInfo, SeriesDateTime, 
    SeriesSignup, SeriesName, ViewAllContainer } from "../pageStyles/Series";
import Navbar from "../components/Navbar";
import { Footer } from "../components/Footer";
import Button from "../components/ButtonSeries";
import "../pageStyles/Series.css";

import { Link } from 'react-router-dom';


import valorant from "../assets/illustrations/SeriesImages/valorant.png"
import tft from "../assets/illustrations/SeriesImages/tft.png"
import osu from "../assets/illustrations/SeriesImages/osu.png"
import tekken8 from "../assets/illustrations/SeriesImages/tekken8.png"

const Series = () => {
    return (
        <>
            <Navbar />
            <TopContainer>
                <BackgroundFilter>
                    <ContentContainer className="loadInAnim">
                    <SeriesContainer>
                            <UpcomingContainer>
                                UPCOMING SERIES
                            </UpcomingContainer>

                            {/* REFACTOR AND MAKE SERIES INFO INTO ITS OWN COMPONENT SINCE INFO IS INPUT FROM DB, 
CLEARs CLUTTER ON HOMEPAGE.JSX TOO */}

                            <SeriesDiv>
                                <SeriesImage>
                                    <img className="series-resize-tft" src={tft} alt="tft"></img>
                                </SeriesImage>
                                <SeriesInfo>
                                    <SeriesName>
                                        TFT
                                    </SeriesName>
                                    <SeriesDateTime>
                                        Monday, Feb 5, 8 EST
                                    </SeriesDateTime>
                                    <SeriesSignup>
                                        SIGN UPS : CLOSED
                                        <Link to ="/game1" className="none">
                                        <Button>
                                            VIEW BRACKET
                                        </Button>
                                        </Link>
                                        <div className="divider">
                                        </div>
{/*                                         <Link to={{ pathname: "https://challonge.com/tournaments/signup/gx60vXhSXP" }} target="_blank" className="none" >
                                        <Button>
                                            SIGN UP
                                        </Button>
                                        </Link> */}
                                        <div className="divider">
                                        </div>
                                    </SeriesSignup>
                                </SeriesInfo>
                            </SeriesDiv>
                            <SeriesDiv>
                                <SeriesImage>
                                    <img className="series-resize-tft" src={tft} alt="tft"></img>
                                </SeriesImage>
                                <SeriesInfo>
                                    <SeriesName>
                                        TFT
                                    </SeriesName>
                                    <SeriesDateTime>
                                        Tuesday, Feb 6, 8 EST
                                    </SeriesDateTime>
                                    <SeriesSignup>
                                        SIGN UPS : CLOSED
                                        <Link to ="/game2" className="none">
                                        <Button>
                                            VIEW BRACKET
                                        </Button>
                                        </Link>
                                        <div className="divider">
                                        </div>
{/*                                         <Link to={{ pathname: "https://challonge.com/tournaments/signup/xF3xX3pAy8" }} target="_blank" className="none" >
                                        <Button>
                                            SIGN UP
                                        </Button>
                                        </Link> */}
                                        <div className="divider">
                                        </div>
                                    </SeriesSignup>
                                </SeriesInfo>
                            </SeriesDiv>
                            <SeriesDiv>
                                <SeriesImage>
                                    <img className="series-resize-osu" src={osu} alt="osu"></img>
                                </SeriesImage>
                                <SeriesInfo>
                                    <SeriesName>
                                        OSU
                                    </SeriesName>
                                    <SeriesDateTime>
                                        Wednesday, Feb 7, 8 EST
                                    </SeriesDateTime>
                                    <SeriesSignup>
                                        SIGN UPS : CLOSED
                                        <Link to ="/game3" className="none">
                                        <Button>
                                            VIEW BRACKET
                                        </Button>
                                        </Link>
                                        <div className="divider">
                                        </div>
                                        <Link to={{ pathname: "https://challonge.com/tournaments/signup/dSEXZGkFVr" }} target="_blank" className="none" >
                                        {/* <Button>
                                            SIGN UP
                                        </Button> */}
                                        </Link>
                                        <div className="divider">
                                        </div>
                                    </SeriesSignup>
                                </SeriesInfo>
                            </SeriesDiv>
                            <SeriesDiv>
                                <SeriesImage>
                                    <img className="series-resize-tft" src={tft} alt="tft"></img>
                                </SeriesImage>
                                <SeriesInfo>
                                    <SeriesName>
                                        TFT
                                    </SeriesName>
                                    <SeriesDateTime>
                                        Thursday, Feb 8, 8 EST
                                    </SeriesDateTime>
                                    <SeriesSignup>
                                        SIGN UPS : CLOSED
                                        <Link to ="/game4" className="none">
                                        <Button>
                                            VIEW BRACKET
                                        </Button>
                                        </Link>
                                        <div className="divider">
                                        </div>
                                        {/* <Link to={{ pathname: "https://challonge.com/tournaments/signup/PFtewizk6u" }} target="_blank" className="none" >
                                        <Button>
                                            SIGN UP
                                        </Button>
                                        </Link> */}
                                        <div className="divider">
                                        </div>
                                    </SeriesSignup>
                                </SeriesInfo>
                            </SeriesDiv>
                            <SeriesDiv>
                                <SeriesImage>
                                    <img className="series-resize-tekken8" src={tekken8} alt="tekken8"></img>
                                </SeriesImage>
                                <SeriesInfo>
                                    <SeriesName>
                                        TEKKEN 8
                                    </SeriesName>
                                    <SeriesDateTime>
                                        Friday, Feb 9, 7 EST
                                    </SeriesDateTime>
                                    <SeriesSignup>
                                        SIGN UPS : OPEN
                                        <Link to ="/game5" className="none">
                                        <Button>
                                            VIEW BRACKET
                                        </Button>
                                        </Link>
                                        <div className="divider">
                                        </div>
                                        <Link to={{ pathname: "https://challonge.com/tournaments/signup/O5J8o0MHOJ" }} target="_blank" className="none" >
                                        <Button>
                                            SIGN UP
                                        </Button>
                                        </Link>
                                        <div className="divider">
                                        </div>
                                    </SeriesSignup>
                                </SeriesInfo>
                            </SeriesDiv>
                            <ViewAllContainer>
                                
                            </ViewAllContainer>
                        </SeriesContainer>
                    </ContentContainer>
                </BackgroundFilter>
            </TopContainer>
            <Footer />
        </>
    );
};

export default Series;