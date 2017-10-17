import {SET_SPOTIFY_ARTIST_DETAILS} from './consts';

export function setSpotifyArtistDetails(spotifyDetails) {
    var data = JSON.parse(spotifyDetails);
    return {
        type: SET_SPOTIFY_ARTIST_DETAILS,
        spotifyArtistDetails: data.details
    }
}