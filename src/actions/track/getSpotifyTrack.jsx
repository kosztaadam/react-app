import {setSpotifyTrack} from "../artist/setSpotifyTrack";
import {setSpotifyTrackDetails} from "./setSpotifyTrackDetails";

function fetchTrack(artistName, trackName) {
    let url = "";
    if (artistName === "") {
        url = "http://localhost:3000/spotify/track/" + trackName;
    }
    else {
        url = "http://localhost:3000/spotify/track/" + artistName + "/" + trackName;
    }

    return fetch(url)
        .then(response => {
            return response.json()
        })
        .catch(error => {
            throw error;
        });
}

export function getSpotifyTrack(artistName, trackName) {
    return dispatch => {
        return fetchTrack(artistName, trackName)
            .then(data => {
                dispatch(setSpotifyTrack(data));
                dispatch(setSpotifyTrackDetails(data));
            })
            .catch(error => {
                throw error;
            })
    }
}