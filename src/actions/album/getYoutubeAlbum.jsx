import {setYoutubeArtist} from "../artist/setYoutubeArtist";
import {setYoutubeVideoDetails} from "../artist/setYoutubeVideoDetails";

function fetchAlbum(artistName, albumName) {
    let url = "";
    if (artistName !== "") {
        url = "http://localhost:3000/youtube/album/" + artistName + "/" + albumName;
    } else {
        url = "http://localhost:3000/youtube/album/" + albumName;
    }

    return fetch(url)
        .then(response => {
            return response.json()
        })
        .catch(error => {
            throw error;
        });
}

export function getYoutubeAlbum(artistName, albumName) {
    return dispatch => {
        return fetchAlbum(artistName, albumName)
            .then(data => {
                dispatch(setYoutubeArtist(data));
                dispatch(setYoutubeVideoDetails(data));
            })
            .catch(error => {
                throw error;
            })
    }
}