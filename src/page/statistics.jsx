import React from "react";
import Navbar from "../components/Navbar";
import { Footer } from "../components/Footer";
import { BackgroundContainer, TopContainer, StatisticsContainer, StatisticsLinkContainer, StatsLink } from "../pageStyles/statistics.js";

const Statisticspage = () => {
    return (
        <>
            <BackgroundContainer>
                <TopContainer>
                    <StatisticsContainer>
                        <StatisticsLinkContainer>
                            <StatsLink to={{ pathname: "https://docs.google.com/spreadsheets/d/1FvPttA0M0n1OtaZF_x_WkJT4oSOzLXkGrcxy7OwWE7o/edit?usp=sharing" }} 
                            target="_blank">
                                    SDC Player Statistics Link
                            </StatsLink>
                        </StatisticsLinkContainer>
                    </StatisticsContainer>
                </TopContainer>
            </BackgroundContainer>
            <Navbar />
            <Footer />
        </>
    );
};

export default Statisticspage;