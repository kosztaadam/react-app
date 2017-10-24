import {loadingData, loadingDataSuccess} from "../loading"
import {setArtist} from "./setArtist"
import {setArtistDetails} from "./setArtistDetails"
import {getSpotifyArtist} from "./getSpotifyArtist"
import {getYoutubeArtist} from "./getYoutubeArtist"

function fetchArtist(artistName, similarArtistNumber, depthNumber) {
    const url = "http://localhost:5000/json/artist/" + artistName + "/" + similarArtistNumber + "/" + depthNumber;
    console.log(url);

    return fetch(url)
        .then(response => {
            return response.json()
        })
        .catch(error => {
            throw error;
        });
}

export function getArtist(artistName, similarArtistNumber, depthNumber) {
    return dispatch => {
        dispatch(loadingData());
        dispatch(setArtist(artistName));
        dispatch(getSpotifyArtist(artistName));
        dispatch(getYoutubeArtist(artistName));
        return fetchArtist(artistName, similarArtistNumber, depthNumber)
            .then(data => {
                dispatch(loadingDataSuccess());
                dispatch(setArtistDetails(data))
            })
            .catch(error => {
                throw error;
            })
    }
}