import React, { useEffect } from "react";
import { useDataLayerValue } from "./Context/DataLayer";
import SpotifyWebApi from "spotify-web-api-js";

function SidebarOption({ option = "test", Icon, id }) {
    const spotify = new SpotifyWebApi();
    const [{ selectedPlaylistId }, dispatch] = useDataLayerValue();
    const changeCurrentPlaylist = (selectedPlaylistId) => {
        dispatch({ type: "SET_PLAYLIST_ID", selectedPlaylistId });
    };
    useEffect(() => {
        spotify.getPlaylist(selectedPlaylistId).then((response) => {
            dispatch({
                type: "SET_DISCOVER_WEEKLY",
                discover_weekly: response,
            });
        });
    }, [dispatch, selectedPlaylistId]);
    return (
        <div
            onClick={() => changeCurrentPlaylist(id)}
            className="flex cursor-pointer items-center h-[40px] text-gray-300 hover:text-white mb-4">
            {Icon && <Icon className="pl-[10px] pr-[10px]" />}
            {Icon ? (
                <h4>{option}</h4>
            ) : (
                <p className="mt-[10px] ml-[10px] text-[14px] flex flex-nowrap">
                    {option}
                </p>
            )}
        </div>
    );
}

export default SidebarOption;
