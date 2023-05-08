import React, { Fragment } from "react";
import { Link, NavLink } from "react-router-dom";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LibraryMusicOutlinedIcon from "@mui/icons-material/LibraryMusicOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import FolderCopyIcon from "@mui/icons-material/FolderCopy";
import ListIcon from "@mui/icons-material/List";
import { useDataLayerValue } from "../Context/DataLayer";
import SidebarOption from "../SidebarOption";

const Sidebar = () => {
    const [{ playlists }] = useDataLayerValue();

    return (
        <div className="bg-[#000000] w-[220px] h-full max-h-[calc(100%-90px)] flex flex-col flex-1 p-6 fixed">
            <Link
                to={"/"}
                className="flex items-center gap-3 justify-center pb-5 mb-6">
                <img
                    src="/Spotify_logo_with_text.svg"
                    alt="Logo"
                    className="h-[70px]"
                />
            </Link>
            <div>
                <NavLink
                    to={"/"}
                    className={({ isActive }) =>
                        isActive
                            ? "h-[40px] w-full flex items-center gap-2 rounded-3xl bg-[#262626] p-3 cursor-pointer mb-5"
                            : "h-[40px] w-full flex items-center gap-2 rounded-3xl p-3 cursor-pointer mb-5 hover:bg-[#262626]"
                    }>
                    <HomeOutlinedIcon className="text-white"></HomeOutlinedIcon>
                    <h3 className="text-white text-[15px] font-[500]">Home</h3>
                </NavLink>
                <NavLink
                    to={"/search"}
                    className={({ isActive }) =>
                        isActive
                            ? "h-[40px] w-full flex items-center gap-2 rounded-3xl bg-[#262626] p-3 cursor-pointer mb-5"
                            : "h-[40px] w-full flex items-center gap-2 rounded-3xl p-3 cursor-pointer mb-5 hover:bg-[#262626]"
                    }>
                    <SearchOutlinedIcon className="text-white"></SearchOutlinedIcon>
                    <h3 className="text-white text-[15px] font-[500]">
                        Search
                    </h3>
                </NavLink>
                <NavLink
                    to={"/library"}
                    className={({ isActive }) =>
                        isActive
                            ? "h-[40px] w-full flex items-center gap-2 rounded-3xl bg-[#262626] p-3 cursor-pointer mb-5"
                            : "h-[40px] w-full flex items-center gap-2 rounded-3xl p-3 cursor-pointer mb-5 hover:bg-[#262626]"
                    }>
                    <LibraryMusicOutlinedIcon className="text-white"></LibraryMusicOutlinedIcon>
                    <h3 className="text-white text-[15px] font-[500]">
                        Library
                    </h3>
                </NavLink>
                <div className="h-[40px] w-full flex items-center gap-3 rounded-3xl hover:bg-[#1db954] p-3 cursor-pointer border-y-white border justify-center">
                    <FavoriteBorderOutlinedIcon className="text-white"></FavoriteBorderOutlinedIcon>
                    <h3 className="text-white text-[15px] font-[500]">
                        Liked Songs
                    </h3>
                </div>
            </div>
            <div className="p-4 w-full h-auto max-h-[550px] overflow-y-scroll my-4">
                <br />
                <div className="flex justify-between h-6 w-full ">
                    <h1 className="text-white text-[16px] font-[Gotham-Regular]">
                        Playlists
                    </h1>
                    <MoreHorizOutlinedIcon className="text-white cursor-pointer"></MoreHorizOutlinedIcon>
                </div>
                <hr className="border border-[#282828]" />
                <div className="flex gap-3 pt-2 pb-4">
                    <FolderCopyIcon
                        fontSize="small"
                        className="text-white cursor-pointer"></FolderCopyIcon>
                    <ListIcon
                        fontSize="small"
                        className="text-white cursor-pointer"></ListIcon>
                </div>
                {playlists?.items?.map((playlist) => (
                    <SidebarOption
                        id={playlist.id}
                        key={playlist.id}
                        option={playlist.name}
                    />
                ))}
            </div>
            <div className="flex justify-center cursor-pointer mt-auto">
                <div className="h-[30px] w-[148px] rounded-3xl bg-[#1db954]  flex justify-center items-center ">
                    <h3 className="text-[12px] font-semibold">DOWNLOAD APP</h3>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
