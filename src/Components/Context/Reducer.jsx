export const initialState = {
    user: null,
    playlists: [],
    playingState: false,
    item: null,
    token: null,
    selectedPlaylist: null,
    currentlyPlaying: null,
    selectedPlaylistId: "37i9dQZF1E4s2rxfOKtG1a",
    discover_weekly: null,
};

const reducer = (state, action) => {
    // console.log(action);
    switch (action.type) {
        case "SET_USER":
            return {
                ...state,
                user: action.user,
            };
        case "SET_TOKEN":
            return {
                ...state,
                token: action.token,
            };
        case "SET_PLAYLISTS":
            return {
                ...state,
                playlists: action.playlists,
            };
        case "SET_DISCOVER_WEEKLY":
            return {
                ...state,
                discover_weekly: action.discover_weekly,
            };
        case "GET_RELATED_ARTIST":
            return {
                ...state,
                get_related_artist: action.get_related_artist,
            };
        case "SET_PLAYLIST":
            return {
                ...state,
                selectedPlaylist: action.selectedPlaylist,
            };
        case "SET_PLAYING":
            return {
                ...state,
                currentlyPlaying: action.currentlyPlaying,
            };
        case "PLAYING_STATE":
            return {
                ...state,
                playingState: action.playingState,
            };
        case "SET_PLAYLIST_ID":
            return {
                ...state,
                selectedPlaylistId: action.selectedPlaylistId,
            };
        default:
            return state;
    }
};
export default reducer;
