import {SET_SPOTIFY_ALBUM} from '../consts';

export function setSpotifyAlbum(spotifyDetails) {
    var data = JSON.parse(spotifyDetails);
    console.log(data.albumID);
    return {
        type: SET_SPOTIFY_ALBUM,
        albumID: data.albumID
    }
}