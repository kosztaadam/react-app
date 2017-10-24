import {SET_SPOTIFY_TRACK} from '../consts';

export function setSpotifyTrack(spotifyDetails) {
    var data = JSON.parse(spotifyDetails);
    return {
        type: SET_SPOTIFY_TRACK,
        trackID: data.trackID
    }
}