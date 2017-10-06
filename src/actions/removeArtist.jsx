import {REMOVE_ARTIST} from './consts';

export function removeArtist(artist) {
    return {
        type: REMOVE_ARTIST,
        text: artist
    }
}