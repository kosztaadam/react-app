import {setSpotifyArtist} from "./setSpotifyArtist";

function fetchArtist(artistName) {
    const url = "http://localhost:5000/spotify/" + artistName;

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
                dispatch(setSpotifyArtist(data))
            })
            .catch(error => {
                throw error;
            })
    }
}