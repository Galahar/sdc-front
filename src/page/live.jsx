import React from "react";
import Navbar from "../components/Navbar";
import { Footer } from "../components/Footer";

import { TwitchContainer, TwitchMarginer } from "../pageStyles/live";

import "../pageStyles/live.js";
import "../pageStyles/live.css";


const Livepage = () => {
    return (
        <>
            <Navbar />
{/*                 <TopContainer>
                    <TwitchContainer className="twitch">
                        <div className="twitch-video">
                            <iframe
                                title="Twitch SDC Livestream"
                                src="https://player.twitch.tv/?channel=asmongold&parent=localhost&autoplay=false"
                                frameborder="0"
                                scrolling="no"
                                allowfullscreen="true"
                                height="100%"
                                width="100%">
                            </iframe>
                        </div>
                        <div className="twitch-chat">
                            <iframe
                                title="Twitch SDC Livestream Chat"
                                frameborder="0"
                                scrolling="no"
                                src="https://www.twitch.tv/embed/asmongold/chat?parent=localhost"
                                height="100%"
                                width="100%">
                            </iframe>
                        </div>
                    </TwitchContainer>
                </TopContainer> */}
                <TwitchMarginer />
                <TwitchContainer className="twitch">
                        <div className="twitch-video">
                            <iframe
                                title="Twitch SDC Livestream"
                                src="https://player.twitch.tv/?channel=esfandtv&parent=localhost&autoplay=true"
                                frameborder="0"
                                scrolling="no"
                                allowfullscreen="true"
                                height="100%"
                                width="100%">
                            </iframe>
                        </div>
                        <div className="twitch-chat">
                            <iframe
                                title="Twitch SDC Livestream Chat"
                                frameborder="0"
                                scrolling="no"
                                src="https://www.twitch.tv/embed/esfandtv/chat?darkpopout&parent=localhost"
                                height="100%"
                                width="100%">
                            </iframe>
                        </div>
                    </TwitchContainer>
                    <TwitchMarginer />
            <Footer />
        </>
    );
};

export default Livepage;    