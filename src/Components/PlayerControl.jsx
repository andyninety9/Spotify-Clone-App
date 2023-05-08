import React, { useEffect } from "react";
import PlayCircleFilledOutlinedIcon from "@mui/icons-material/PlayCircleFilledOutlined";
import ShuffleOutlinedIcon from "@mui/icons-material/ShuffleOutlined";
import SkipPreviousOutlinedIcon from "@mui/icons-material/SkipPreviousOutlined";
import SkipNextOutlinedIcon from "@mui/icons-material/SkipNextOutlined";
import RepeatOutlinedIcon from "@mui/icons-material/RepeatOutlined";
import PauseCircleOutlineOutlinedIcon from "@mui/icons-material/PauseCircleOutlineOutlined";
import { useDataLayerValue } from "./Context/DataLayer";
import axios from "axios";

const PlayerControl = () => {
    const [{ playingState, token }, dispatch] = useDataLayerValue();
    const changeTrack = async (type) => {
        await axios.post(
            `https://api.spotify.com/v1/me/player/${type}`,
            {},
            {
                headers: {
                    Authorization: "Bearer " + token,
                    "Content-Type": "application/json",
                },
            }
        );
        const response = await axios.get(
            "https://api.spotify.com/v1/me/player/currently-playing",
            {},
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
        } else {
            dispatch({ type: "SET_PLAYING", currentlyPlaying: null });
        }
    };
    const changeState = async () => {
        const state = playingState ? "pause" : "play";
        const response = await axios.put(
            `https://api.spotify.com/v1/me/player/${state}`,
            {},
            {
                headers: {
                    Authorization: "Bearer " + token,
                    "Content-Type": "application/json",
                },
            }
        );
        dispatch({ type: "PLAYING_STATE", playingState: !playingState });
    };
    return (
        <div className="flex flex-col justify-center items-center h-full w-[200px] mx-auto">
            <div className="flex gap-2 sm:gap-3 items-center">
                <button>
                    <ShuffleOutlinedIcon className="text-white cursor-pointer hover:scale-125" />
                </button>
                <button onClick={() => changeTrack("previous")}>
                    <SkipPreviousOutlinedIcon className="text-white cursor-pointer hover:scale-125" />
                </button>
                <button onClick={changeState}>
                    {playingState ? (
                        <PauseCircleOutlineOutlinedIcon
                            fontSize="large"
                            className="text-white cursor-pointer hover:scale-150"
                        />
                    ) : (
                        <PlayCircleFilledOutlinedIcon
                            fontSize="large"
                            className="text-green-500 cursor-pointer hover:scale-150"
                        />
                    )}
                </button>
                <button onClick={() => changeTrack("next")}>
                    <SkipNextOutlinedIcon className="text-white cursor-pointer hover:scale-125" />
                </button>
                <button>
                    <RepeatOutlinedIcon className="text-white cursor-pointer hover:scale-125" />
                </button>
            </div>
        </div>
    );
};

export default PlayerControl;
