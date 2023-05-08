import React from "react";
import { Link, NavLink } from "react-router-dom";

const Page404 = () => {
    return (
        <div className="h-[100vh] w-[100vw] bg-white flex flex-col justify-center items-center">
            <div className="flex items-center gap-3 justify-center pb-5 mb-6">
                <img
                    src="/Spotify_logo_without_text.svg.png"
                    alt="Logo"
                    className="w-[55px] h-[55px]"
                />
                <h1 className="text-black text-[40px] font-normal font-[Gotham-Bold]">
                    Spotify
                </h1>
            </div>
            <h1 className="text-[100px] font-[Gotham-Bold] text-gray-500">
                Page Not Found
            </h1>
            <NavLink
                to={"/"}
                className={({ isActive }) =>
                    isActive
                        ? "h-[40px] w-[100px] flex text-white items-center gap-2 rounded-full bg-[#1db954] p-3 cursor-pointer mb-5"
                        : "h-[40px] w-[100px] flex items-center gap-2 rounded-full p-3 cursor-pointer mb-5 text-white bg-[#1db954] hover:bg-slate-400"
                }>
                <img
                    src="/Icons/Line=empty, Name=home.svg"
                    alt=""
                    className="h-[26px] w-[26px]"
                />
                <h3 className="text-white text-[15px] font-[500]">Home</h3>
            </NavLink>
        </div>
    );
};

export default Page404;
