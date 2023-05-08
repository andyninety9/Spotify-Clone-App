import React from "react";
import VolumeUpOutlinedIcon from "@mui/icons-material/VolumeUpOutlined";
import DevicesOutlinedIcon from "@mui/icons-material/DevicesOutlined";
import { useDataLayerValue } from "./Context/DataLayer";
import axios from "axios";

const Volume = () => {
    const [{ token }] = useDataLayerValue();
    const setVolume = async (e) => {
        await axios.put(
            `https://api.spotify.com/v1/me/player/volume`,
            {},
            {
                params: {
                    volume_percent: parseInt(e.target.value),
                },
                headers: {
                    Authorization: "Bearer " + token,
                    "Content-Type": "application/json",
                },
            }
        );
    };
    return (
        <div className="h-full w-[150px] flex items-center ml-auto gap-2 justify-end">
            <DevicesOutlinedIcon className="text-white cursor-pointer" />
            <div className="flex items-center gap-2">
                <VolumeUpOutlinedIcon className="text-white cursor-pointer" />
                <div className="flex justify-end content-center">
                    <input
                        type="range"
                        min={0}
                        max={100}
                        onMouseUp={(e) => setVolume(e)}
                        className="w-[80px] h-1 cursor-pointer rounded-lg"
                    />
                </div>
            </div>
        </div>
    );
};

export default Volume;
