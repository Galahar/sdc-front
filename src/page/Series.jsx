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
import pokemon from "../assets/illustrations/SeriesImages/pokemon.png"

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
                                    <img className="series-resize-tft" src={tekken8} alt="tekken8"></img>
                                </SeriesImage>
                                <SeriesInfo>
                                    <SeriesName>
                                        Tekken 8
                                    </SeriesName>
                                    <SeriesDateTime>
                                        Monday, Feb 19, 7 EST
                                    </SeriesDateTime>
                                    <SeriesSignup>
                                        SIGN UPS : OPEN
                                        <Link to ="/game1" className="none">
                                        <Button>
                                            VIEW BRACKET
                                        </Button>
                                        </Link>
                                        <div className="divider">
                                        </div>
                                        <Link to={{ pathname: "https://challonge.com/tournaments/signup/wY67hpDLRq" }} target="_blank" className="none" >
                                        <Button>
                                            SIGN UP
                                        </Button>
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
                                        Tuesday, Feb 20, 8 EST
                                    </SeriesDateTime>
                                    <SeriesSignup>
                                        SIGN UPS : OPEN
                                        <Link to ="/game2" className="none">
                                        <Button>
                                            VIEW BRACKET
                                        </Button>
                                        </Link>
                                        <div className="divider">
                                        </div>
                                        <Link to={{ pathname: "https://challonge.com/tournaments/signup/biLjBguZxQ" }} target="_blank" className="none" >
                                        <Button>
                                            SIGN UP
                                        </Button>
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
                                        Wednesday, Feb 21, 8 EST
                                    </SeriesDateTime>
                                    <SeriesSignup>
                                        SIGN UPS : OPEN
                                        <Link to ="/game3" className="none">
                                        <Button>
                                            VIEW BRACKET
                                        </Button>
                                        </Link>
                                        <div className="divider">
                                        </div>
                                        <Link to={{ pathname: "https://challonge.com/tournaments/signup/sRc6qQo5bP" }} target="_blank" className="none" >
                                        <Button>
                                            SIGN UP
                                        </Button>
                                        </Link>
                                        <div className="divider">
                                        </div>
                                    </SeriesSignup>
                                </SeriesInfo>
                            </SeriesDiv>
                            <SeriesDiv>
                                <SeriesImage>
                                    <img className="series-resize-pokemon" src={pokemon} alt="pokemon"></img>
                                </SeriesImage>
                                <SeriesInfo>
                                    <SeriesName>
                                        Pokemon (OU Format)
                                    </SeriesName>
                                    <SeriesDateTime>
                                        Thursday, Feb 22, 8 EST
                                    </SeriesDateTime>
                                    <SeriesSignup>
                                        SIGN UPS : OPEN
                                        <Link to ="/game4" className="none">
                                        <Button>
                                            VIEW BRACKET
                                        </Button>
                                        </Link>
                                        <div className="divider">
                                        </div>
                                        <Link to={{ pathname: "https://challonge.com/tournaments/signup/Icw667RZMT" }} target="_blank" className="none" >
                                        <Button>
                                            SIGN UP
                                        </Button>
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
                                        Friday, Feb 23, 8 EST
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
                                        <Link to={{ pathname: "https://challonge.com/tournaments/signup/HGrvRf0Au3" }} target="_blank" className="none" >
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