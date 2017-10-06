import {loadingData, loadingDataSuccess} from "./loading";
import {setArtist} from "./setArtist";
import {setArtistDetails} from "./setArtistDetails";

function fetchArtist(artistName) {
    const url = "http://localhost:5000/json/artist/" + artistName;

    return fetch(url)
        .then(response => {
            return response.json()
        })
        .catch(error => {
            throw error;
        });
}

export function getArtist(artistName) {
    return dispatch => {
        dispatch(loadingData());
        dispatch(setArtist());
        return fetchArtist(artistName)
            .then(data => {
                dispatch(loadingDataSuccess());
                dispatch(setArtistDetails(data))
            })
            .catch(error => {
                throw error;
            })
    }
}