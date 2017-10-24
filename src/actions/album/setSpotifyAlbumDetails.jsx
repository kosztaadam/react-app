import {SET_SPOTIFY_ALBUM_DETAILS} from '../consts';

export function setSpotifyAlbumDetails(spotifyDetails) {
    var data = JSON.parse(spotifyDetails);
    //console.log(data.details);

    if(data.details === "") {
        alert("ez");
        data.details = undefined;
    }

    alert(data.details);

    return {
        type: SET_SPOTIFY_ALBUM_DETAILS,
        spotifyAlbumDetails: data.details
    }
}