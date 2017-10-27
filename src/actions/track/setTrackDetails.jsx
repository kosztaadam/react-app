import {SET_TRACK_DETAILS} from '../consts';

export function setTrackDetails(data) {
    let track = JSON.parse(data);
    console.log(track);
    return {
        type: SET_TRACK_DETAILS,
        artistName: track.artist,
        trackName: track.track,
        albumName: track.album,
        similarTrack: track.similarTrack,
        albumImage: track.image,
        playCount: track.playcount,
        duration: track.duration,
        listeners: track.listeners,
        wiki: track.wiki,
        trackTags: track.tags,
        limit: track.limit,
        deep: track.deep
    }
}