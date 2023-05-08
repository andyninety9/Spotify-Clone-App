import React from "react";

import CurrentTrack from "../CurrentTrack";
import Volume from "../Volume";
import PlayerControl from "../PlayerControl";

const Footer = () => {
    return (
        <div className="h-[90px] w-full bg-black grid grid-cols-3 px-4 sm:px-6 gap-2 sm:gap-4 fixed bottom-0">
            <CurrentTrack></CurrentTrack>
            <PlayerControl></PlayerControl>
            <Volume></Volume>
        </div>
    );
};

export default Footer;
