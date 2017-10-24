import {SET_ALBUM_DETAILS} from '../consts';

export function setAlbumDetails(data) {
    let album = JSON.parse(data);
    console.log(album.wiki);
    return {
        type: SET_ALBUM_DETAILS,
        artistName: album.artist,
        albumName: album.album,
        albumImage: album.albumImage,
        albumListeners: album.albumListeners,
        albumPlayCount: album.albumPlayCount,
        albumTracks: album.albumTracks,
        albumTags: album.albumTags,
        wiki: album.wiki
    }
}