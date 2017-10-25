import {loadingData, loadingDataSuccess} from "../loading"

function fetchTrack(artistName, trackName, similarTrackNumber, depthNumber) {
    const url = "http://localhost:5000/json/track/" + artistName + "/" + similarTrackNumber + "/" + depthNumber;

    let url = "";
    if (artistName === "") {
        url = "http://localhost:5000/json/track/" + trackName + "/" + similarTrackNumber + "/" + depthNumber;
    }
    else {
        url = "http://localhost:5000/json/track/" + artistName + "/" + trackName + "/" + similarTrackNumber + "/" + depthNumber;
    }

    return fetch(url)
        .then(response => {
            return response.json()
        })
        .catch(error => {
            throw error;
        });
}

export function getArtist(artistName, trackName, similarTrackNumber, depthNumber) {
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