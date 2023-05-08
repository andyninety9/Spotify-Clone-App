import "./App.css";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./Components/Login/LoginPage";
import { useEffect } from "react";
import { getTokenFromUrl } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import { useDataLayerValue } from "./Components/Context/DataLayer";
import HomePage from "./Components/Page/HomePage";
import LibraryPage from "./Components/Page/LibraryPage";
import Page404 from "./Components/Page/Page404";

const spotify = new SpotifyWebApi();

function App() {
    const [{ token }, dispatch] = useDataLayerValue();
    // console.log(selectedPlaylistId);

    useEffect(() => {
        const hash = getTokenFromUrl();
        window.location.hash = "";
        const _token = hash.access_token;
        if (_token) {
            dispatch({
                type: "SET_TOKEN",
                token: _token,
            });

            // setToken(_token);
            spotify.setAccessToken(_token);
            spotify.getMe().then((user) => {
                dispatch({
                    type: "SET_USER",
                    user: user,
                });
            });
            spotify.getUserPlaylists().then((playlists) => {
                dispatch({
                    type: "SET_PLAYLISTS",
                    playlists: playlists,
                });
            });
            spotify
                .getArtistRelatedArtists("2nSO7JYDbJrYbJmP39qUzj")
                .then((response) => {
                    dispatch({
                        type: "GET_RELATED_ARTIST",
                        get_related_artist: response,
                    });
                });
            // spotify.getPlaylist(selectedPlaylistId).then((response) => {
            //     dispatch({
            //         type: "SET_DISCOVER_WEEKLY",
            //         discover_weekly: response,
            //     });
            // });
        }
    }, [token, dispatch]);

    return (
        <div>
            {token ? (
                <Routes>
                    <Route
                        path="/"
                        element={
                            <HomePage spotify={spotify}></HomePage>
                        }></Route>

                    <Route
                        path="/library"
                        element={
                            <LibraryPage spotify={spotify}></LibraryPage>
                        }></Route>
                    <Route
                        path="*"
                        element={<Page404 spotify={spotify}></Page404>}></Route>
                </Routes>
            ) : (
                <LoginPage></LoginPage>
            )}
        </div>
    );
}

export default App;
