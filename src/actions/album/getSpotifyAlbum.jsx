import {setSpotifyAlbum} from "./setSpotifyAlbum";
import {setSpotifyAlbumDetails} from "./setSpotifyAlbumDetails";

function fetchAlbum(artistName, albumName) {

    let url = "";
    if (artistName === "") {
        url = "http://localhost:5000/spotify/album/" + albumName;
    }
    else {
        url = "http://localhost:5000/spotify/album/" + artistName + "/" + albumName;
    }

    return fetch(url)
        .then(response => {
            return response.json()
        })
        .catch(error => {
            throw error;
        });
}

export function getSpotifyAlbum(artistName, albumName) {
    return dispatch => {
        return fetchAlbum(artistName, albumName)
            .then(data => {
                dispatch(setSpotifyAlbum(data));
                dispatch(setSpotifyAlbumDetails(data));
            })
            .catch(error => {
                throw error;
            })
    }
}