import {SET_TRACK} from '../consts';

export function setTrack(artistName, trackName) {
    return {
        type: SET_TRACK,
        artistName: artistName,
        trackName: trackName
    }
}