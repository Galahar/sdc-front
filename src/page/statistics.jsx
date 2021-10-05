import React from "react";
import Navbar from "../components/Navbar";
import { Footer } from "../components/Footer";
import { BackgroundContainer, TopContainer, StatisticsContainer, StatisticsLinkContainer, 
    StatsLink, StatsLinkNormal, StatsLinkHeader, GoogleSheetsContainer, BottomMargin } from "../pageStyles/statistics.js";

import "../pageStyles/statistics.css";

const Statisticspage = () => {
    return (
        <>
            <BackgroundContainer>
                <TopContainer>
                    <StatisticsContainer className="loadInAnim">
                        <StatisticsLinkContainer>
                            <StatsLinkHeader>
                                SDC SEASON 10 REGULAR SEASON STATS
                            </StatsLinkHeader>
                            <StatsLinkNormal>
                                For All Time Stats
                            </StatsLinkNormal>
                            <StatsLink to={{ pathname: "https://docs.google.com/spreadsheets/d/1BWCMVF8cUp1eqjL8MJBuQKIm76WJNfGhVgFOf1xISvk/edit#gid=1325308529" }} 
                            target="_blank">
                                Click Here
                            </StatsLink>
                        </StatisticsLinkContainer>
                    </StatisticsContainer>
                    <GoogleSheetsContainer className="loadInAnim">
                        <iframe title="Google Sheets SDC Statistics" className="sheetsResize" width="100%" height="100%" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRgNH4K41GMCzO3B5MTHjXFH2kAl_YoB6m9SqGer870FBzYCO7rr9OVjf15XPzBA5isAT9KVKAfBsmu/pubhtml?widget=true&amp;headers=false"></iframe>
                    </GoogleSheetsContainer>
                    <BottomMargin />
                </TopContainer>
            </BackgroundContainer>
            <Navbar />
            <Footer />
        </>
    );
};

export default Statisticspage;