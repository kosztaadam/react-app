import {setYoutubeArtist} from "../artist/setYoutubeArtist";
import {setYoutubeVideoDetails} from "../artist/setYoutubeVideoDetails";

function fetchTag(tagName) {
    const url = "http://localhost:5000/youtube/tag/" + tagName;

    return fetch(url)
        .then(response => {
            return response.json()
        })
        .catch(error => {
            throw error;
        });
}

export function getYoutubeTag(tagName) {
    return dispatch => {
        return fetchTag(tagName)
            .then(data => {
                dispatch(setYoutubeArtist(data));
                dispatch(setYoutubeVideoDetails(data))
            })
            .catch(error => {
                throw error;
            })
    }
}