import React from "react";
import { Button } from "../components/ButtonRiot";

import { RiotTextLinkContainer  } from "../pageStyles/riot";

import riottext from '../riot.txt';


const Riotpage = () => {
    return (
        <>
            <RiotTextLinkContainer>
                <Button
                onClick={(e) => {
                    e.preventDefault();
                    window.location.href=riottext;
                }}
                >
                    Riot.txt 
                    For Application
                </Button>
            </RiotTextLinkContainer>
        </>
    );
};

export default Riotpage;