import {SET_SPOTIFY_TAG_DETAILS} from '../consts';

export function setSpotifyTagDetails(spotifyDetails) {
    var data = JSON.parse(spotifyDetails);
    console.log(data);
    return {
        type: SET_SPOTIFY_TAG_DETAILS,
        topGenreTracks: data.topGenreTracks
    }
}