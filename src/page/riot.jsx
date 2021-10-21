import React from "react";

import { RiotTextLinkContainer  } from "../pageStyles/riot";

import riottext from './riot.txt';


const Riotpage = () => {
    return (
        <>
            <RiotTextLinkContainer>
                <a style={{ fontSize: '30px', color: 'white'}} href={riottext} download>RIOT.TXT for APPLICATION, CLICK HERE</a>
            </RiotTextLinkContainer>
        </>
    );
};

export default Riotpage;