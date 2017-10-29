import {loadingData, loadingDataSuccess} from "../loading"
import {setTrack} from "./setTrack";
import {getSpotifyTrack} from "./getSpotifyTrack";
import {getYoutubeTrack} from "./getYoutubeTrack";
import {setTrackDetails} from "./setTrackDetails";


function fetchTrack(artistName, trackName, similarTrackNumber, depthNumber) {
    //const url = "http://localhost:5000/json/track/" + artistName + "/" + similarTrackNumber + "/" + depthNumber;

    let url = "";
    if (artistName === "") {
        url = "http://localhost:5000/json/track/" + trackName + "/" + similarTrackNumber + "/" + depthNumber;
    }
    else {
        url = "http://localhost:5000/json/track/" + artistName + "/" + trackName + "/" + similarTrackNumber + "/" + depthNumber;
    }

    console.log(url);

    return fetch(url)
        .then(response => {
            return response.json()
        })
        .catch(error => {
            throw error;
        });
}

export function getTrack(artistName, trackName, similarTrackNumber, depthNumber) {
    return dispatch => {
        dispatch(loadingData());
        dispatch(setTrack(artistName, trackName));
        dispatch(getSpotifyTrack(artistName, trackName));
        dispatch(getYoutubeTrack(artistName, trackName));
        return fetchTrack(artistName, trackName, similarTrackNumber, depthNumber)
            .then(data => {
                dispatch(loadingDataSuccess());
                dispatch(setTrackDetails(data))
            })
            .catch(error => {
                throw error;
            })
    }
}