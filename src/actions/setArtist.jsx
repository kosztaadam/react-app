import {SET_ARTIST} from './consts';

export function getArtist(artistName) {
    const url = "http://localhost:5000/json/artist/" + artistName;

    return fetch(url)
        .then(response => {
            return response.json()
        })
        .catch(error => {
            throw error;
        });
}

export function getArtistSuccess(data) {
    var artistDetails = JSON.parse(data);
    console.log(artistDetails.artist);
    return {
        type: SET_ARTIST,
        artist: artistDetails.artist
    }
}


export function loadingData() {
    console.log("loading...");
    return {
        type: "LOADING"
    }
}

export function loadingDataSuccess() {
    console.log("loading finished");
    return {
        type: "LOADING_FINISHED"
    }
}


export function setArtist(artistName) {
    return dispatch => {
        dispatch(loadingData());
        return getArtist(artistName)
            .then(data => {
                dispatch(loadingDataSuccess());
                dispatch(getArtistSuccess(data))
            })
            .catch(error => {
                throw error;
            })
    }
    //dispatch(setLoadingBookState()); // Show a loading spinner
    /*fetch(url)
     .then(response => console.log(response.json())
     .then(json => dispatch(getArtist(json))))*/
    /*console.log("asd");
     console.log(response);
     //dispatch(doneFetchingBook()); // Hide loading spinner
     if (response.status === 200) {
     console.log(response.json);
     //dispatch(setArtist(response.json)); // Use a normal function to set the received state
     } else {
     //dispatch(someError)
     }
     })*/
}