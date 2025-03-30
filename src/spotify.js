import axios from "axios";

const authEndpoint = "https://accounts.spotify.com/authorize?";
const clientID = "1c3152ceab9e404699b1487056e9e7f5";
const redirectUri = "http://localhost:3000";
const scopes = ["user-library-read", "playlist-read-private", "user-top-read", "user-modify-playback-state"];

export const loginEndpoint = `${authEndpoint}client_id=${clientID}&redirect_uri=${redirectUri}&scope=${scopes.join(
    "%20"
)}&response_type=token&show_dialoge=true`;

const apiClient = axios.create({
    baseURL: "https://api.spotify.com/v1/",
});

export const setClientToken = (token) => {
    apiClient.interceptors.request.use(async function (config) {
        config.headers.Authorization = `Bearer ${token}`;
        return config;
    });
};

export default apiClient;