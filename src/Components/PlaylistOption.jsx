import axios from "axios";
import React from "react";
import { useDataLayerValue } from "./Context/DataLayer";

const PlaylistOption = ({
    index,
    name,
    artist,
    image,
    album,
    durationMs,
    id,
    context_uri,
    track_number,
}) => {
    const [{ token }, dispatch] =
        useDataLayerValue();
    const formatTime = (durationMs) => {
        const minutes = Math.floor(durationMs / 60000);
        const seconds = ((durationMs % 60000) / 1000).toFixed(0);
        return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
    };

    const duration = formatTime(durationMs);

    const playTrack = async (
        id_track,
        name_track,
        artists_track,
        image_track,
        context_uri_track,
        track_number_track
    ) => {
        const response = await axios.put(
            `https://api.spotify.com/v1/me/player/play`,
            {
                context_uri_track,
                offset: {
                    position: track_number_track - 1,
                },
                position_ms: 0,
            },
            {
                headers: {
                    Authorization: "Bearer " + token,
                    "Content-Type": "application/json",
                },
            }
        );
        if (response.status === 204) {
            const currentlyPlaying = {
                id_track,
                name_track,
                artists_track,
                image_track,
            };
            dispatch({ type: "SET_PLAYING", currentlyPlaying });
            dispatch({ type: "PLAYING_STATE", playingState: true });
        } else dispatch({ type: "PLAYING_STATE", playingState: true });
    };

    return (
        <div
            onClick={() =>
                playTrack(id, name, artist, image, context_uri, track_number)
            }
            className="text-gray-400 flex h-[55px] w-full px-4 items-center font-[Gotham-Light] hover:text-white rounded-lg hover:bg-[#282828] text-[14px]">
            <p className="ml-4 w-[10%]">{index}</p>
            <div className="ml-4 w-[40%] flex gap-4 items-center">
                <img className="h-[40px] rounded-sm" src={image} alt="" />
                <div>
                    <h3 className="font-[Gotham-Regular] text-white">{name}</h3>
                    <h3 className="font-[Gotham-Regular] text-[12px]">
                        {artist}
                    </h3>
                </div>
            </div>
            <h1 className="ml-4 w-[40%] font-[Gotham-Regular]">{album}</h1>
            <h1 className="ml-4 w-[10%] flex justify-center">{duration}</h1>
        </div>
    );
};

export default PlaylistOption;
