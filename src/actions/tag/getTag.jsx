import {loadingData, loadingDataSuccess} from "../loading"
import {setTag} from "./setTag";
import {getYoutubeTag} from "./getYoutubeTag";
import {getSpotifyTag} from "./getSpotifyTag";
import {setTagDetails} from "./setTagDetails";

function fetchTag(tagName, similarTagNumber, depthNumber) {
    const url = "http://localhost:3000/lastfm/tag/" + tagName + "/" + similarTagNumber + "/" + depthNumber;
    console.log(url);

    return fetch(url)
        .then(response => {
            return response.json()
        })
        .catch(error => {
            throw error;
        });
}

export function getTag(tagName, similarTagNumber, depthNumber) {
    return dispatch => {
        dispatch(loadingData());
        dispatch(setTag(tagName));
        dispatch(getSpotifyTag(tagName));
        dispatch(getYoutubeTag(tagName));
        return fetchTag(tagName, similarTagNumber, depthNumber)
            .then(data => {
                dispatch(loadingDataSuccess());
                dispatch(setTagDetails(data))
            })
            .catch(error => {
                throw error;
            })
    }
}