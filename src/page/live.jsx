import React from "react";
import Navbar from "../components/Navbar";
import { Footer } from "../components/Footer";
import { TwitchEmbed } from 'react-twitch-embed';

import { TwitchContainer, TwitchTopMarginer, TwitchBottomMarginer } from "../pageStyles/live";

import "../pageStyles/live.js";
import "../pageStyles/live.css";


const Livepage = () => {
    return (
        <>
            <Navbar />
                <TwitchTopMarginer />
                <TwitchContainer className="twitch">
                    <div  className="twitch">
                        <TwitchEmbed
                            channel="riotgames"
                            id="riotgames"
                            theme="dark"
                            muted
                            width='100%'
                            onVideoPause={() => console.log(':(')} 
                        />
                    </div>

                    </TwitchContainer>
                    <TwitchBottomMarginer />
            <Footer />
        </>
/*                                 <div className="twitch-video">
                                <iframe
                                    title="Twitch SDC Livestream"
                                    src="https://player.twitch.tv/?channel=twitchpresents&parent=sdcleague.com&parent=www.sdcleague.com&autoplay=true"
                                    frameborder="0"
                                    scrolling="no"
                                    allowfullscreen="true"
                                    height="100%"
                                    width="100%"
                                    >
                                </iframe>
                            </div>
                            <div className="twitch-chat">
                                <iframe
                                    title="Twitch SDC Livestream Chat"
                                    frameborder="0"
                                    scrolling="no"
                                    src="https://www.twitch.tv/embed/riotgames/chat?darkpopout&parent=sdcleague.com&parent=www.sdcleague.com"
                                    height="100%"
                                    width="100%"
                                    >  
                                </iframe>
                            </div> */
    );
};

export default Livepage;    