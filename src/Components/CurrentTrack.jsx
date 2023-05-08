import React, { Fragment, useEffect } from "react";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import { useDataLayerValue } from "./Context/DataLayer";
import axios from "axios";

const CurrentTrack = () => {
    const [{ token, currentlyPlaying }, dispatch] = useDataLayerValue();

    useEffect(() => {
        const getCurrentTrack = async () => {
            const response = await axios.get(
                "https://api.spotify.com/v1/me/player/currently-playing",
                {
                    headers: {
                        Authorization: "Bearer " + token,
                        "Content-Type": "application/json",
                    },
                }
            );
            if (response.data !== "") {
                const { item } = response.data;
                const currentlyPlaying = {
                    id: item.id,
                    name: item.name,
                    artist: item.artists.map((artist) => artist.name),
                    image: item.album.images[2].url,
                };
                dispatch({ type: "SET_PLAYING", currentlyPlaying });
            }
        };
        getCurrentTrack();
    }, [token, dispatch, currentlyPlaying]);
    // console.log(currentlyPlaying);
    return (
        <Fragment>
            <div className="flex justify-start h-full w-[300px] overflow-hidden">
                <div className="flex gap-2 items-center">
                    <img
                        className="w-[40px] sm:w-[50px] h-[40px] sm:h-[50px] object-cover rounded-lg border-white border p-[1px]"
                        src={currentlyPlaying?.image || "/Personal Card 1.svg"}
                        alt="currentlyPlayingImg"
                    />
                    <div className="flex flex-col">
                        <h3 className="text-[10px] sm:text-[14px] font-[Gotham-Regular] text-white">
                            {currentlyPlaying?.name || "unknown"}
                        </h3>
                        <span className="text-[10px] sm:text-[12px] text-gray-400">
                            {currentlyPlaying?.artist?.join(", ") || "unknown"}
                        </span>
                    </div>
                    <div className="flex gap-2 cursor-pointer">
                        <FavoriteBorderOutlinedIcon className="text-white cursor-pointer" />
                        <AddCircleOutlineOutlinedIcon className="text-white cursor-pointer" />
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default CurrentTrack;
