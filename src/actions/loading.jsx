import {LOADING_ARTIST, LOADING_ARTIST_FINISHED} from "./consts";

export function loadingData() {
    console.log(LOADING_ARTIST);
    return {
        type: LOADING_ARTIST,
        loading: 'loading'
    }
}

export function loadingDataSuccess() {
    console.log(LOADING_ARTIST_FINISHED);
    return {
        type: LOADING_ARTIST_FINISHED,
        loading: 'success'
    }
}