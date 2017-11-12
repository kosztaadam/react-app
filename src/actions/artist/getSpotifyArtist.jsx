import {setSpotifyTrack} from "./setSpotifyTrack";
import {setSpotifyArtistDetails} from "./setSpotifyArtistDetails";


function fetchArtist(artistName) {
    const url = "http://localhost:3000/spotify/" + artistName;

    return fetch(url)
        .then(response => {
            return response.json()
        })
        .catch(error => {
            throw error;
        });
}

export function getSpotifyArtist(artistName) {
    return dispatch => {
        return fetchArtist(artistName)
            .then(data => {
                dispatch(setSpotifyTrack(data));
                dispatch(setSpotifyArtistDetails(data))
            })
            .catch(error => {
                throw error;
            })
    }
}