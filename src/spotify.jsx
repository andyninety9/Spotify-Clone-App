export const authEndpoint = "https://accounts.spotify.com/authorize";

const redirectUri = "http://localhost:5173/";

const clientId = "4d0a82ffd4f6478bab0545a0058714d3";

const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
];

export const getTokenFromUrl = () => {
    return window.location.hash
        .substring(1)
        .split("&")
        .reduce((initial, item) => {
            //#access_token=BQCYOjgo-Mq_qnHF71_cS0NQlU8C1yVNk0TBZragxl3IB8KayGJ0TixnBSh3zD4NhNim11ZaXyqVGqFCALvth0hrH6bxh0MBBOUTmupWLqUGNBhm3lGxjbrqI3EgXAWa35AtSaB7KiPfOe3i4AUx1xoXE5S1KwSViLrJ6_DP9kGMKWAb5VNR_787NsDpqBiQii6l5iCOEHl615Xm_w&token_type=Bearer&expires_in=3600
            let parts = item.split("=");
            initial[parts[0]] = decodeURIComponent(parts[1]);

            return initial;
        }, {});
};

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
    "%20"
)}&response_type=token&show_dialog=true`;
