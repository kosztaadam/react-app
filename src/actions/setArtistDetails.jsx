import {SET_ARTIST_DETAILS} from './consts';

export function setArtistDetails(data) {
    let artist = JSON.parse(data);
    console.log(artist);
    return {
        type: SET_ARTIST_DETAILS,
        artistName: artist.artist,
        topAlbum: artist.artistTopAlbum,
        similarArtist: artist.similarArtistsList
    }
}