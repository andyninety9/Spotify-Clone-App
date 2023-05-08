import React, { Fragment } from "react";
import Sidebar from "../Navigation/Sidebar";
import Footer from "../Navigation/Footer";
import BodyLibrary from "../Navigation/BodyLibrary";

const LibraryPage = () => {
    
    return (
        <Fragment>
            <div className="h-[100vh] min-h-screen w-full min-w-screen">
                <div className="flex">
                    <div className="z-10">
                        <Sidebar></Sidebar>
                    </div>
                    <div className="flex overflow-x-hidden">
                        <BodyLibrary></BodyLibrary>
                    </div>
                </div>
                <div className="fixed -translate-y-[100%] z-10 w-full">
                    <Footer></Footer>
                </div>
            </div>
        </Fragment>
    );
};

export default LibraryPage;
