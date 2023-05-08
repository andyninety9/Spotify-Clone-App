import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import KeyboardArrowLeftOutlinedIcon from "@mui/icons-material/KeyboardArrowLeftOutlined";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { useDataLayerValue } from "../Context/DataLayer";
import { Avatar } from "@mui/material";

const Header = () => {
    const [{ user }, dispatch] = useDataLayerValue();
    return (
        <Fragment>
            <div className="flex flex-wrap justify-between items-center space-y-4 sm:space-y-0 sm:space-x-5 relative h-[70px]">
                <div className="flex gap-5 items-center">
                    <div className="h-7 w-7 rounded-full bg-gray-600 hover:bg-[#222222] flex justify-center items-center cursor-pointer">
                        <KeyboardArrowLeftOutlinedIcon className="text-white"></KeyboardArrowLeftOutlinedIcon>
                    </div>
                    <div className="h-7 w-7 rounded-full bg-gray-600 hover:bg-[#222222] flex justify-center items-center cursor-pointer">
                        <KeyboardArrowRightOutlinedIcon className="text-white"></KeyboardArrowRightOutlinedIcon>
                    </div>
                    <div className="flex items-center gap-4 sm:ml-4">
                        <SearchOutlinedIcon className="translate-x-12 hidden sm:flex text-gray-500"></SearchOutlinedIcon>
                        <input
                            type="text"
                            className="hidden sm:inline-block rounded-full h-8 w-[256px] text-base pl-8 whitespace-nowrap truncate sm:truncate-none text-black outline-none"
                            placeholder="Artists, songs, or podcasts"
                        />
                    </div>
                </div>
                <div className="flex items-center gap-5 cursor-pointer">
                    <Link
                        to={"/signup"}
                        className="h-[46px] w-[113px] rounded-full bg-gray-600 hover:bg-[#1db954] flex items-center gap-1 p-1">
                        <Avatar src={user?.images[0].url} alt={user?.id} />

                        <h3 className="text-white truncate sm:truncate-none text-[15px] font-[Gotham-Regular] ml-2">
                            {user?.display_name || "Sign in"}
                        </h3>
                    </Link>
                </div>
            </div>
        </Fragment>
    );
};

export default Header;
