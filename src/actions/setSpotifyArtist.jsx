import {SET_SPOTIFY_ARTIST} from './consts';

export function setSpotifyArtist(trackID) {
    return {
        type: SET_SPOTIFY_ARTIST,
        trackID: trackID
    }
}