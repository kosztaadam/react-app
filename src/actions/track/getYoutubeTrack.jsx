import {setYoutubeArtist} from "../artist/setYoutubeArtist";
import {setYoutubeVideoDetails} from "../artist/setYoutubeVideoDetails";

function fetchArtist(artistName, trackName) {
    let url = "";
    if (artistName !== undefined) {
        url = "http://localhost:5000/youtube/track/" + artistName + " " + trackName;
    } else {
        url = "http://localhost:5000/youtube/" + trackName;
    }

    return fetch(url)
        .then(response => {
            return response.json()
        })
        .catch(error => {
            throw error;
        });
}

export function getYoutubeAlbum(artistName, trackName) {
    return dispatch => {
        return fetchArtist(artistName, trackName)
            .then(data => {
                dispatch(setYoutubeArtist(data));
                dispatch(setYoutubeVideoDetails(data));
            })
            .catch(error => {
                throw error;
            })
    }
}