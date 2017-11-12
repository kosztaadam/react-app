import {loadingData, loadingDataSuccess} from "../loading"
import {setAlbum} from "./setAlbum"
import {setAlbumDetails} from "./setAlbumDetails";
import {getSpotifyAlbum} from "./getSpotifyAlbum";
import {getYoutubeAlbum} from "./getYoutubeAlbum";

function fetchAlbum(artistName, albumName) {
    let url = "";
    if(artistName === "") {
        url = "http://localhost:3000/lastfm/album/" + albumName;
        console.log(albumName);
    }
    else {
        url = "http://localhost:3000/lastfm/album/" + artistName + "/" + albumName;
    }
    return fetch(url)
        .then(response => {
            return response.json()
        })
        .catch(error => {
            throw error;
        });
}

export function getAlbum(artistName, albumName) {
    return dispatch => {
        dispatch(loadingData());
        dispatch(setAlbum(artistName, albumName));
        dispatch(getSpotifyAlbum(artistName, albumName));
        dispatch(getYoutubeAlbum(artistName, albumName));
        return fetchAlbum(artistName, albumName)
            .then(data => {
                dispatch(loadingDataSuccess());
                dispatch(setAlbumDetails(data));
            })
            .catch(error => {
                throw error;
            })
    }
}