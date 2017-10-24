import {SET_ALBUM} from '../consts';

export function setAlbum(artistName, albumName) {
    return {
        type: SET_ALBUM,
        artistName: artistName,
        albumName: albumName
    }
}