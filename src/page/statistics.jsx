import React from "react";
import Navbar from "../components/Navbar";
import { Footer } from "../components/Footer";
import { BackgroundContainer, TopContainer, StatisticsContainer, StatisticsLinkContainer, 
    StatsLinkNormal, StatsLinkHeader, GoogleSheetsContainer, GoogleSheetsContainerMobile, BottomMargin } from "../pageStyles/statistics.js";

import "../pageStyles/statistics.css";
import { MarginLargeResize } from "../pageStyles/standings";

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

                            <a className="linkHover" target="_blank" rel="noreferrer" href="https://docs.google.com/spreadsheets/d/1BWCMVF8cUp1eqjL8MJBuQKIm76WJNfGhVgFOf1xISvk/edit#gid=1325308529">
                            <StatsLinkNormal style={{ textDecoration: 'none' }}>
                                Click here
                            </StatsLinkNormal>
                                </a>

                        </StatisticsLinkContainer>
                    </StatisticsContainer>
                    <GoogleSheetsContainer className="loadInAnim">
                        <iframe title="Google Sheets SDC Statistics" className="sheetsResize" width="100%" height="100%" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRgNH4K41GMCzO3B5MTHjXFH2kAl_YoB6m9SqGer870FBzYCO7rr9OVjf15XPzBA5isAT9KVKAfBsmu/pubhtml?widget=true&amp;headers=false"></iframe>
                    </GoogleSheetsContainer>
                    <GoogleSheetsContainerMobile className="loadInAnim">
                        <iframe title="Google Sheets SDC Statistics" className="sheetsResize" width="100%" height="100%" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRgNH4K41GMCzO3B5MTHjXFH2kAl_YoB6m9SqGer870FBzYCO7rr9OVjf15XPzBA5isAT9KVKAfBsmu/pubhtml?widget=true&amp;headers=false"></iframe>
                    </GoogleSheetsContainerMobile>
                    <BottomMargin />
                    <MarginLargeResize />
                </TopContainer>
            </BackgroundContainer>
            <Navbar />
            <Footer />
        </>
    );
};

export default Statisticspage;