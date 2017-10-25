import {SET_YOUTUBE_ARTIST} from '../consts';

export function setYoutubeArtist(result) {
    let data = JSON.parse(result);
    return {
        type: SET_YOUTUBE_ARTIST,
        trackID: data.trackid
    }
}