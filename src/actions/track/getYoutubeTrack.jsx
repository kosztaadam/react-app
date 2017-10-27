import {setYoutubeArtist} from "../artist/setYoutubeArtist";
import {setYoutubeVideoDetails} from "../artist/setYoutubeVideoDetails";

function fetchTrack(artistName, trackName) {
    let url = "";
    if (artistName !== "") {
        url = "http://localhost:5000/youtube/track/" + artistName + "/" + trackName;
    } else {
        url = "http://localhost:5000/youtube/track/" + trackName;
    }

    return fetch(url)
        .then(response => {
            return response.json()
        })
        .catch(error => {
            throw error;
        });
}

export function getYoutubeTrack(artistName, trackName) {
    return dispatch => {
        return fetchTrack(artistName, trackName)
            .then(data => {
                dispatch(setYoutubeArtist(data));
                dispatch(setYoutubeVideoDetails(data));
            })
            .catch(error => {
                throw error;
            })
    }
}