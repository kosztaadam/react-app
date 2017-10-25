import {SET_YOUTUBE_VIDEO_DETAILS} from '../consts';

export function setYoutubeVideoDetails(result) {
    let data = JSON.parse(result);
    return {
        type: SET_YOUTUBE_VIDEO_DETAILS,
        youtubeVideoDetails: data
    }
}