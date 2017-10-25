import {setYoutubeArtist} from "./setYoutubeArtist";
import {setYoutubeVideoDetails} from "./setYoutubeVideoDetails";

function fetchArtist(artistName) {
    const url = "http://localhost:5000/youtube/" + artistName;

    return fetch(url)
        .then(response => {
            return response.json()
        })
        .catch(error => {
            throw error;
        });
}

export function getYoutubeArtist(artistName) {
    return dispatch => {
        return fetchArtist(artistName)
            .then(data => {
                dispatch(setYoutubeArtist(data));
                dispatch(setYoutubeVideoDetails(data))
            })
            .catch(error => {
                throw error;
            })
    }
}