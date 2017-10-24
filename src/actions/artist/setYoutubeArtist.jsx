import {SET_YOUTUBE_ARTIST} from '../consts';

export function setYoutubeArtist(trackID) {
    console.log(trackID);
    return {
        type: SET_YOUTUBE_ARTIST,
        trackID: trackID
    }
}