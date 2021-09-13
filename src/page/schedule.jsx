import React from "react";
import Navbar from "../components/Navbar";
import { Footer } from "../components/Footer";

import { TopContainer, BackgroundContainer, ScheduleContainer, ScheduleVersusContainer, HeaderTextContainer, TitleText, SVTIN } from "../pageStyles/schedule";

import "../pageStyles/schedule.js";


const Schedulepage = () => {
    return (
        <>
            <TopContainer>
                <BackgroundContainer>
                    <ScheduleContainer>
                        <HeaderTextContainer>
                            <TitleText>
                                Seasonal Draft Championship Season 10
                            </TitleText>
                            <TitleText>
                                Schedule: August 28th, 2021 - October 2021
                            </TitleText>
                        </HeaderTextContainer>
                        <ScheduleVersusContainer>
                            <SVTIN>
                                Test
                            </SVTIN>
                            <SVTIN>
                                Test
                            </SVTIN>
                        </ScheduleVersusContainer>
                        <ScheduleVersusContainer>

                        </ScheduleVersusContainer>
                        <ScheduleVersusContainer>

                        </ScheduleVersusContainer>
                        <ScheduleVersusContainer>
                            
                        </ScheduleVersusContainer>
                        <ScheduleVersusContainer>
                            
                        </ScheduleVersusContainer>
                        <ScheduleVersusContainer>
                            
                        </ScheduleVersusContainer>
                    </ScheduleContainer>
                </BackgroundContainer>
            </TopContainer>
            <Navbar />
            <Footer />
        </>
    );
};

export default Schedulepage;