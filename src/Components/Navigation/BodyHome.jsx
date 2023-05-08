import React from "react";
import Header from "./Header";
import { useDataLayerValue } from "../Context/DataLayer";
import PlayCircleFilledOutlinedIcon from "@mui/icons-material/PlayCircleFilledOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import PlaylistOption from "../PlaylistOption";

const BodyHome = ({ spotify }) => {
    const [{ discover_weekly }, dispatch] = useDataLayerValue();
    return (
        <div className="w-[100vw] h-[100vh] max-h-[calc(100%-90px)] px-6 pt-6 ml-[220px] pb-[90px] overflow-y-scroll text-white">
            <Header spotify={spotify}></Header>

            <div className="flex items-end gap-4 m-[20px]">
                <img
                    className="ml-[20px] h-[200px]"
                    src={
                        discover_weekly?.images[0]?.url ||
                        "/Personal Card 1.svg"
                    }
                    alt=""
                />
                <div className="flex-1">
                    <strong className="text-[14px] font-[Gotham-Regular]">
                        PLAYLIST
                    </strong>
                    <h2 className="lg:text-[88px] sm:text-[40px] font-[Gotham-Bold] mb-[10px]">
                        {discover_weekly?.name || "Discover Weekly"}
                    </h2>
                    <p className="text-[14px]">
                        {discover_weekly?.description || "unknown"}
                    </p>
                </div>
            </div>
            <div className="flex items-center gap-5 m-5">
                <button>
                    <PlayCircleFilledOutlinedIcon
                        sx={{ fontSize: 60 }}
                        className="text-green-500 cursor-pointer hover:scale-110"
                    />
                </button>
                <FavoriteBorderOutlinedIcon
                    sx={{ fontSize: 30 }}
                    className="text-gray-500 hover:text-white transition-all"></FavoriteBorderOutlinedIcon>
            </div>
            <div className="text-gray-400 flex h-[36px] w-full px-4 items-center text-[14px] font-[Gotham-Bold]">
                <p className="ml-4 w-[10%]">#</p>
                <h1 className="ml-4 w-[40%]">Title</h1>
                <h1 className="ml-4 w-[40%] flex justify-start">Album</h1>
                <AccessTimeOutlinedIcon className="w-[10%]"></AccessTimeOutlinedIcon>
            </div>
            <hr className="border border-gray-400" />
            <br />
            {discover_weekly?.tracks?.items?.map((discover_weekly, index) => (
                <PlaylistOption
                    key={index}
                    index={index + 1}
                    name={discover_weekly?.track?.name}
                    image={discover_weekly?.track?.album?.images[0]?.url}
                    album={discover_weekly?.track?.album?.name}
                    durationMs={discover_weekly?.track?.duration_ms}
                    artist={discover_weekly?.track?.artists[0]?.name}
                    id={discover_weekly?.track?.id}
                    context_uri={discover_weekly?.album?.uri}
                    track_number={discover_weekly?.track?.track_number}
                />
            ))}
        </div>
    );
};

export default BodyHome;
