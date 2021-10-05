import React from "react";
import Navbar from "../components/Navbar";
import { Footer } from "../components/Footer";

import { TopContainer, BackgroundContainer, ScheduleContainer, ScheduleVersusContainer, 
    HeaderTextContainer, TitleText, SVTIN, IDATC, IDATCText, TopMarginer, IDATCBlueMarginer, TitleTextResponsive } from "../pageStyles/schedule";

import "../pageStyles/schedule.js";
import "../pageStyles/schedule.css";


const Schedulepage = () => {
    return (
        <>
            <TopContainer>
                <BackgroundContainer>
                    <ScheduleContainer className="loadInAnim">
                        <HeaderTextContainer>
                            <TitleText>
                                SDC Season Ten Regular Season Schedule
                            </TitleText>
                            <TitleText>
                                August 28th, 2021 - October 2021
                            </TitleText>
                            <TitleTextResponsive>
                                SDC Schedule
                            </TitleTextResponsive>
                            <TitleTextResponsive>
                                August 28th 
                            </TitleTextResponsive>
                            <TitleTextResponsive>
                                through October
                            </TitleTextResponsive>
                            <TitleTextResponsive>
                                2021
                            </TitleTextResponsive>
                        </HeaderTextContainer>  
                        {/* Week 1 */}<ScheduleVersusContainer>
                            {/* Abbreviations explained in ../pagestyles/schedule.js*/}
                            <SVTIN>
                                <IDATC>
                                    <IDATCText style={{ fontWeight: 700, fontSize: '18px', color: 'rgb(243, 99, 63)'}}>
                                        Week 1 - 8/28 Saturday 
                                    </IDATCText>
                                </IDATC>
                                <IDATC>
                                    <IDATCText>
                                        Mixture VS Bane
                                    </IDATCText>
                                </IDATC>
                                <IDATCBlueMarginer />
                                <IDATC>
                                    <IDATCText>
                                        Patrick VS HennyK
                                    </IDATCText>
                                </IDATC>
                                <IDATCBlueMarginer />
                                <IDATC>
                                    <IDATCText>
                                        Grayfawx VS Tonguey
                                    </IDATCText>
                                </IDATC>
                                <IDATCBlueMarginer />
                                <IDATC>
                                    <IDATCText>
                                        QQG9 VS Jaedon
                                    </IDATCText>
                                </IDATC>
                                <IDATCBlueMarginer />
                                <IDATC>
                                    <IDATCText>
                                        Mattsey VS Xzwolf
                                    </IDATCText>
                                </IDATC>
                                <IDATCBlueMarginer />
                                <IDATC>
                                    <IDATCText>
                                        Rifle VS Sunscorched
                                    </IDATCText>
                                </IDATC>
                            </SVTIN>
                            <SVTIN>
                            <IDATC>
                                    <IDATCText style={{ fontWeight: 700, fontSize: '18px', color: 'rgb(243, 99, 63)'}}>
                                        Week 1 - 8/29 Sunday
                                    </IDATCText>
                                </IDATC>
                                <IDATC>
                                    <IDATCText>
                                        Mixture VS Patrick
                                    </IDATCText>
                                </IDATC>
                                <IDATCBlueMarginer />
                                <IDATC>
                                    <IDATCText>
                                        Grayfawx VS Bane
                                    </IDATCText>
                                </IDATC>
                                <IDATCBlueMarginer />
                                <IDATC>
                                    <IDATCText>
                                        QQG9 VS HennyK
                                    </IDATCText>
                                </IDATC>
                                <IDATCBlueMarginer />
                                <IDATC>
                                    <IDATCText>
                                        Mattsey VS Tonguey
                                    </IDATCText>
                                </IDATC>
                                <IDATCBlueMarginer />
                                <IDATC>
                                    <IDATCText>
                                        Rifle VS Jaedon
                                    </IDATCText>
                                </IDATC>
                                <IDATCBlueMarginer />
                                <IDATC>
                                    <IDATCText>
                                        Sunscorched VS Xzwolf
                                    </IDATCText>
                                </IDATC>
                            </SVTIN>
                        </ScheduleVersusContainer>
                        {/* Week 2 */}<ScheduleVersusContainer>
                            {/* Abbreviations explained in ../pagestyles/schedule.js*/}
                            <SVTIN>
                                <IDATC>
                                    <IDATCText style={{ fontWeight: 700, fontSize: '18px', color: '#FF9B71'}}>
                                        Week 2 - 9/4 Saturday 
                                    </IDATCText>
                                </IDATC>
                                <IDATC>
                                    <IDATCText>
                                        Mixture VS Grayfawx
                                    </IDATCText>
                                </IDATC>
                                <IDATCBlueMarginer />
                                <IDATC>
                                    <IDATCText>
                                        QQG9 VS Patrick
                                    </IDATCText>
                                </IDATC>
                                <IDATCBlueMarginer />
                                <IDATC>
                                    <IDATCText>
                                        Mattsey VS Bane
                                    </IDATCText>
                                </IDATC>
                                <IDATCBlueMarginer />
                                <IDATC>
                                    <IDATCText>
                                        Rifle VS Hennyk
                                    </IDATCText>
                                </IDATC>
                                <IDATCBlueMarginer />
                                <IDATC>
                                    <IDATCText>
                                        Sunscorched VS Tonguey
                                    </IDATCText>
                                </IDATC>
                                <IDATCBlueMarginer />
                                <IDATC>
                                    <IDATCText>
                                        Xzwolf VS Jaedon
                                    </IDATCText>
                                </IDATC>
                            </SVTIN>
                            <SVTIN>
                            <IDATC>
                                    <IDATCText style={{ fontWeight: 700, fontSize: '18px', color: '#FF9B71'}}>
                                        Week 2 - 9/5 Sunday
                                    </IDATCText>
                                </IDATC>
                                <IDATC>
                                    <IDATCText>
                                        Mixture VS QQG9
                                    </IDATCText>
                                </IDATC>
                                <IDATCBlueMarginer />
                                <IDATC>
                                    <IDATCText>
                                        Mattsey VS Grayfawx
                                    </IDATCText>
                                </IDATC>
                                <IDATCBlueMarginer />
                                <IDATC>
                                    <IDATCText>
                                        Rifle VS Patrick
                                    </IDATCText>
                                </IDATC>
                                <IDATCBlueMarginer />
                                <IDATC>
                                    <IDATCText>
                                        Sunscorched VS Bane
                                    </IDATCText>
                                </IDATC>
                                <IDATCBlueMarginer />
                                <IDATC>
                                    <IDATCText>
                                        Xzwolf VS Hennyk
                                    </IDATCText>
                                </IDATC>
                                <IDATCBlueMarginer />
                                <IDATC>
                                    <IDATCText>
                                        Jaedon VS Tonguey
                                    </IDATCText>
                                </IDATC>
                            </SVTIN>
                        </ScheduleVersusContainer>
                        {/* Week 3 */}<ScheduleVersusContainer>
                            {/* Abbreviations explained in ../pagestyles/schedule.js*/}
                            <SVTIN>
                                <IDATC>
                                    <IDATCText style={{ fontWeight: 700, fontSize: '18px', color: '#FFFD82'}}>
                                        Week 3 - 9/11 Saturday 
                                    </IDATCText>
                                </IDATC>
                                <IDATC>
                                    <IDATCText>
                                        Mixture VS Mattsey
                                    </IDATCText>
                                </IDATC>
                                <IDATCBlueMarginer />
                                <IDATC>
                                    <IDATCText>
                                        Rifle VS QQG9
                                    </IDATCText>
                                </IDATC>
                                <IDATCBlueMarginer />
                                <IDATC>
                                    <IDATCText>
                                        Sunscorched VS Grayfawx
                                    </IDATCText>
                                </IDATC>
                                <IDATCBlueMarginer />
                                <IDATC>
                                    <IDATCText>
                                        Xzwolf VS Patrick
                                    </IDATCText>
                                </IDATC>
                                <IDATCBlueMarginer />
                                <IDATC>
                                    <IDATCText>
                                        Jaedon VS Bane
                                    </IDATCText>
                                </IDATC>
                                <IDATCBlueMarginer />
                                <IDATC>
                                    <IDATCText>
                                        Tonguey VS Hennyk
                                    </IDATCText>
                                </IDATC>
                            </SVTIN>
                            <SVTIN>
                            <IDATC>
                                    <IDATCText style={{ fontWeight: 700, fontSize: '18px', color: '#FFFD82'}}>
                                        Week 3 - 9/12 Sunday
                                    </IDATCText>
                                </IDATC>
                                <IDATC>
                                    <IDATCText>
                                        Mixture VS Rifle
                                    </IDATCText>
                                </IDATC>
                                <IDATCBlueMarginer />
                                <IDATC>
                                    <IDATCText>
                                        Sunscorched VS Mattsey
                                    </IDATCText>
                                </IDATC>
                                <IDATCBlueMarginer />
                                <IDATC>
                                    <IDATCText>
                                        Xzwolf VS QQG9
                                    </IDATCText>
                                </IDATC>
                                <IDATCBlueMarginer />
                                <IDATC>
                                    <IDATCText>
                                        Jaedon VS Grayfawx
                                    </IDATCText>
                                </IDATC>
                                <IDATCBlueMarginer />
                                <IDATC>
                                    <IDATCText>
                                        Tonguey VS Patrick
                                    </IDATCText>
                                </IDATC>
                                <IDATCBlueMarginer />
                                <IDATC>
                                    <IDATCText>
                                        Hennyk VS Bane
                                    </IDATCText>
                                </IDATC>
                            </SVTIN>
                        </ScheduleVersusContainer>
                        {/* Week 4 */}<ScheduleVersusContainer>
                            {/* Abbreviations explained in ../pagestyles/schedule.js*/}
                            <SVTIN>
                                <IDATC>
                                    <IDATCText style={{ fontWeight: 700, fontSize: '18px', color: '#98DA6C'}}>
                                        Week 4 - 9/18 Saturday 
                                    </IDATCText>
                                </IDATC>
                                <IDATC>
                                    <IDATCText>
                                        Mixture VS Sunscorched
                                    </IDATCText>
                                </IDATC>
                                <IDATCBlueMarginer />
                                <IDATC>
                                    <IDATCText>
                                        Xzwolf VS Rifle
                                    </IDATCText>
                                </IDATC>
                                <IDATCBlueMarginer />
                                <IDATC>
                                    <IDATCText>
                                        Jaedon VS Mattsey
                                    </IDATCText>
                                </IDATC>
                                <IDATCBlueMarginer />
                                <IDATC>
                                    <IDATCText>
                                        Tonguey VS QQG9
                                    </IDATCText>
                                </IDATC>
                                <IDATCBlueMarginer />
                                <IDATC>
                                    <IDATCText>
                                        Hennyk VS Grayfawx
                                    </IDATCText>
                                </IDATC>
                                <IDATCBlueMarginer />
                                <IDATC>
                                    <IDATCText>
                                        Bane VS Patrick
                                    </IDATCText>
                                </IDATC>
                            </SVTIN>
                            <SVTIN>
                            <IDATC>
                                    <IDATCText style={{ fontWeight: 700, fontSize: '18px', color: '#98DA6C'}}>
                                        Week 4 - 9/19 Sunday
                                    </IDATCText>
                                </IDATC>
                                <IDATC>
                                    <IDATCText>
                                        Mixture VS Xzwolf
                                    </IDATCText>
                                </IDATC>
                                <IDATCBlueMarginer />
                                <IDATC>
                                    <IDATCText>
                                        Jaedon VS Sunscorched
                                    </IDATCText>
                                </IDATC>
                                <IDATCBlueMarginer />
                                <IDATC>
                                    <IDATCText>
                                        Tonguey VS Rifle
                                    </IDATCText>
                                </IDATC>
                                <IDATCBlueMarginer />
                                <IDATC>
                                    <IDATCText>
                                        Hennyk VS Mattsey
                                    </IDATCText>
                                </IDATC>
                                <IDATCBlueMarginer />
                                <IDATC>
                                    <IDATCText>
                                        Bane VS QQG9
                                    </IDATCText>
                                </IDATC>
                                <IDATCBlueMarginer />
                                <IDATC>
                                    <IDATCText>
                                        Patrick VS Grayfawx
                                    </IDATCText>
                                </IDATC>
                            </SVTIN>
                        </ScheduleVersusContainer>
                        {/* Week 5 */}<ScheduleVersusContainer>
                            {/* Abbreviations explained in ../pagestyles/schedule.js*/}
                            <SVTIN>
                                <IDATC>
                                    <IDATCText style={{ fontWeight: 700, fontSize: '18px', color: 'rgb(144, 224, 243)'}}>
                                        Week 5 - 9/25 Saturday 
                                    </IDATCText>
                                </IDATC>
                                <IDATC>
                                    <IDATCText>
                                        Mixture VS Jaedon
                                    </IDATCText>
                                </IDATC>
                                <IDATCBlueMarginer />
                                <IDATC>
                                    <IDATCText>
                                        Tonguey VS Xzwolf
                                    </IDATCText>
                                </IDATC>
                                <IDATCBlueMarginer />
                                <IDATC>
                                    <IDATCText>
                                        Hennyk VS Sunscorched
                                    </IDATCText>
                                </IDATC>
                                <IDATCBlueMarginer />
                                <IDATC>
                                    <IDATCText>
                                        Bane VS Rifle
                                    </IDATCText>
                                </IDATC>
                                <IDATCBlueMarginer />
                                <IDATC>
                                    <IDATCText>
                                        Patrick VS Mattsey
                                    </IDATCText>
                                </IDATC>
                                <IDATCBlueMarginer />
                                <IDATC>
                                    <IDATCText>
                                        Grayfawx VS QQG9
                                    </IDATCText>
                                </IDATC>
                            </SVTIN>
                            <SVTIN>
                            <IDATC>
                                    <IDATCText style={{ fontWeight: 700, fontSize: '18px', color: 'rgb(144, 224, 243)'}}>
                                        Week 5 - 9/26 Sunday
                                    </IDATCText>
                                </IDATC>
                                <IDATC>
                                    <IDATCText>
                                        Mixture VS Tonguey
                                    </IDATCText>
                                </IDATC>
                                <IDATCBlueMarginer />
                                <IDATC>
                                    <IDATCText>
                                        Hennyk VS Jaedon
                                    </IDATCText>
                                </IDATC>
                                <IDATCBlueMarginer />
                                <IDATC>
                                    <IDATCText>
                                        Bane VS Xzwolf
                                    </IDATCText>
                                </IDATC>
                                <IDATCBlueMarginer />
                                <IDATC>
                                    <IDATCText>
                                        Patrick VS Sunscorched
                                    </IDATCText>
                                </IDATC>
                                <IDATCBlueMarginer />
                                <IDATC>
                                    <IDATCText>
                                        Grayfawx VS Rifle
                                    </IDATCText>
                                </IDATC>
                                <IDATCBlueMarginer />
                                <IDATC>
                                    <IDATCText>
                                        QQG9 VS Mattsey
                                    </IDATCText>
                                </IDATC>
                            </SVTIN>
                        </ScheduleVersusContainer>
                        {/* Week 6 */}<ScheduleVersusContainer>
                            {/* Abbreviations explained in ../pagestyles/schedule.js*/}
                            <SVTIN>
                                <IDATC>
                                    <IDATCText style={{ fontWeight: 700, fontSize: '18px', color: '#B0ABC4'}}>
                                        Week 6 - 10/2 Saturday 
                                    </IDATCText>
                                </IDATC>
                                <IDATC>
                                    <IDATCText>
                                        Mixture VS Hennyk
                                    </IDATCText>
                                </IDATC>
                                <IDATCBlueMarginer />
                                <IDATC>
                                    <IDATCText>
                                        Bane VS Tonguey
                                    </IDATCText>
                                </IDATC>
                                <IDATCBlueMarginer />
                                <IDATC>
                                    <IDATCText>
                                        Patrick VS Jaedon
                                    </IDATCText>
                                </IDATC>
                                <IDATCBlueMarginer />
                                <IDATC>
                                    <IDATCText>
                                        Grayfawx VS Xzwolf
                                    </IDATCText>
                                </IDATC>
                                <IDATCBlueMarginer />
                                <IDATC>
                                    <IDATCText>
                                        QQG9 VS Sunscorched
                                    </IDATCText>
                                </IDATC>
                                <IDATCBlueMarginer />
                                <IDATC>
                                    <IDATCText>
                                        Mattsey VS Rifle
                                    </IDATCText>
                                </IDATC>
                            </SVTIN>
                        </ScheduleVersusContainer>
                    </ScheduleContainer>
                    <TopMarginer />
                </BackgroundContainer>
            </TopContainer>
            <Navbar />
            <Footer />
        </>
    );
};

export default Schedulepage;