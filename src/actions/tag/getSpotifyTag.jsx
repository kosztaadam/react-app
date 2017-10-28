import {setSpotifyTrack} from "../artist/setSpotifyTrack";
import {setSpotifyTagDetails} from "./setSpotifyDetails";

function fetchTag(tagName) {
    const url = "http://localhost:5000/spotify/tag/" + tagName;
    console.log(url);

    return fetch(url)
        .then(response => {
            return response.json()
        })
        .catch(error => {
            throw error;
        });
}

export function getSpotifyTag(tagName) {
    return dispatch => {
        return fetchTag(tagName)
            .then(data => {
                dispatch(setSpotifyTagDetails(data));
            })
            .catch(error => {
                throw error;
            })
    }
}