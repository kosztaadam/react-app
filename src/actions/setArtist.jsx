import {SET_ARTIST} from './consts';

export function setArtist(artistName) {
    return {
        type: SET_ARTIST,
        artistName: artistName
    }
}