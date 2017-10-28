import {SET_TAG_DETAILS} from '../consts';

export function setTagDetails(data) {
    let artist = JSON.parse(data);
    console.log(artist);
    return {
        type: SET_TAG_DETAILS,
        tagName: artist.tag,
        similarTag: artist.similarTagsList,
        total: artist.total,
        reach: artist.reach,
        limit: artist.limit,
        deep: artist.deep,
        wiki: artist.wiki,
        topTagTracks: artist.topTagTracks
    }
}