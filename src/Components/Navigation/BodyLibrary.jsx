import React, { Fragment } from "react";
import Header from "./Header";

import LibraryOption from "../LibraryOption";

const BodyLibrary = ({ spotify }) => {
    return (
        <div className="w-[100vw] h-[100vh] max-h-[calc(100%-90px)] px-6 pt-6 ml-[220px] pb-[90px] overflow-y-scroll text-white">
            <Header spotify={spotify}></Header>
            <div className="w-[1920px]">
                <LibraryOption></LibraryOption>
            </div>
        </div>
    );
};

export default BodyLibrary;
