import {setYoutubeArtist} from "../artist/setYoutubeArtist";
import {setYoutubeVideoDetails} from "../artist/setYoutubeVideoDetails";

function fetchArtist(artistName, albumName) {
    let url = "";
    if (artistName !== undefined) {
        url = "http://localhost:5000/youtube/album/" + artistName + " " + albumName;
    } else {
        url = "http://localhost:5000/youtube/" + albumName;
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
        return fetchArtist(artistName, albumName)
            .then(data => {
                dispatch(setYoutubeArtist(data));
                dispatch(setYoutubeVideoDetails(data));
            })
            .catch(error => {
                throw error;
            })
    }
}