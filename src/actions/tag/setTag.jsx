import {SET_TAG} from '../consts';

export function setTag(tagName) {
    return {
        type: SET_TAG,
        tagName: tagName
    }
}