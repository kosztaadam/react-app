import {combineReducers} from 'redux'
import {
    SET_ARTIST,
    SET_ARTIST_DETAILS,
    LOADING_ARTIST,
    LOADING_ARTIST_FINISHED,
    SET_SPOTIFY_TRACK,
    SET_SPOTIFY_ARTIST_DETAILS,
    SET_YOUTUBE_ARTIST,
    SET_ALBUM,
    SET_ALBUM_DETAILS, SET_SPOTIFY_ALBUM_DETAILS, SET_SPOTIFY_ALBUM, SET_YOUTUBE_VIDEO_DETAILS, SET_TRACK_DETAILS,
    SET_TRACK, SET_TAG, SET_TAG_DETAILS, SET_SPOTIFY_TAG_DETAILS
} from '../actions/consts';

const initialState = [];
const loadingInitialState = ['Success'];

function loadingReducer(state = loadingInitialState, action) {
    switch (action.type) {
        case LOADING_ARTIST: {
            //console.log("recude loaading " + action.loading);
            const newState = Object.assign([], state);
            newState[0] = action.loading;
            return newState;
        }
        case LOADING_ARTIST_FINISHED: {
            // console.log("recude finished " + action.loading);
            const newState = Object.assign([], state);
            newState[0] = action.loading;
            return newState;
        }
        default:
            return state;
    }
}

function artistNameReducer(state = initialState, action) {
    switch (action.type) {
        case SET_ARTIST: {
            // console.log("setArtist");
            const newState = Object.assign([], state);
            newState.indexOf(action.artistName) === -1 ? newState.push(action.artistName) : console.log("This item already exists");
            //newState.push(action.artistName);
            return newState;
        }
        default:
            return state;
    }
}

function albumNameReducer(state = initialState, action) {
    switch (action.type) {
        case SET_ALBUM: {
            const newState = Object.assign([], state);
            //newState.indexOf(action.albumName) === -1 ? newState.push(action.albumName) : console.log("This item already exists");
            newState.push({
                'artistName': action.artistName,
                'albumName': action.albumName
            });
            return newState;
        }
        default:
            return state;
    }
}

function tagNameReducer(state = initialState, action) {
    switch (action.type) {
        case SET_TAG: {
            const newState = Object.assign([], state);
            //newState.indexOf(action.albumName) === -1 ? newState.push(action.albumName) : console.log("This item already exists");
            newState.push({
                'tagName': action.tagName
            });
            return newState;
        }
        default:
            return state;
    }
}

function spotifyReducer(state = initialState, action) {
    switch (action.type) {
        case SET_SPOTIFY_TRACK: {
            //console.log("spotifyArtistIDReducer");
            // console.log(action.trackID);
            const newState = Object.assign([], state);
            //newState.indexOf(action.trackID) === -1 ? newState.push(action.trackID) : console.log("This item already exists");
            newState.push(action.trackID);
            return newState;
        }
        case SET_SPOTIFY_ARTIST_DETAILS: {
            //  console.log("spotifyyyy");
            //console.log(action.spotifyArtistDetails);
            //console.log("spotifyArtistIDReducer");
            // console.log(action.trackID);
            const newState = Object.assign([], state);
            //newState.indexOf(action.trackID) === -1 ? newState.push(action.trackID) : console.log("This item already exists");
            newState.artistDetails = action.spotifyArtistDetails;
            return newState;
        }
        default:
            return state;
    }
}

function spotifyAlbumReducer(state = initialState, action) {
    switch (action.type) {
        case SET_SPOTIFY_ALBUM: {
            //console.log("spotifyArtistIDReducer");
            // console.log(action.trackID);
            const newState = Object.assign([], state);
            //newState.indexOf(action.trackID) === -1 ? newState.push(action.trackID) : console.log("This item already exists");
            newState.push({
                'id': action.albumID,
                'playlist': action.playlist
            });
            return newState;
        }
        case SET_SPOTIFY_ALBUM_DETAILS: {
            //  console.log("spotifyyyy");
            //console.log(action.spotifyArtistDetails);
            //console.log("spotifyArtistIDReducer");
            // console.log(action.trackID);
            const newState = Object.assign([], state);
            //newState.indexOf(action.trackID) === -1 ? newState.push(action.trackID) : console.log("This item already exists");
            newState.albumDetails = action.spotifyAlbumDetails;
            return newState;
        }
        default:
            return state;
    }
}

function youtubeReducer(state = initialState, action) {
    switch (action.type) {
        case SET_YOUTUBE_ARTIST: {
            //console.log("spotifyArtistIDReducer");
            // console.log(action.trackID);
            const newState = Object.assign([], state);
            //newState.indexOf(action.trackID) === -1 ? newState.push(action.trackID) : console.log("This item already exists");
            newState.push(action.trackID);
            return newState;
        }
        case SET_YOUTUBE_VIDEO_DETAILS: {
            //console.log("spotifyArtistIDReducer");
            // console.log(action.trackID);
            const newState = Object.assign([], state);
            //newState.indexOf(action.trackID) === -1 ? newState.push(action.trackID) : console.log("This item already exists");
            newState.ytVideoDetails = action.youtubeVideoDetails;
            return newState;
        }
        default:
            return state;
    }
}

function artistReducer(state = initialState, action) {
    switch (action.type) {
        case SET_ARTIST_DETAILS: {
            //alert(action.artistTags);
            const newState = Object.assign([], state);
            newState.push({
                'artistName': action.artistName,
                'topAlbum': action.topAlbum,
                'similarArtist': action.similarArtist,
                'artistImage': action.artistImage,
                'artistListeners': action.artistListeners,
                'artistPlayCount': action.artistPlayCount,
                'artistTags': action.artistTags,
                'deep': action.deep,
                'limit': action.limit,
                'wiki': action.wiki
            });
            return newState;
        }
        default:
            return state;
    }

    /*if (action.type === SET_ARTIST) {
     //Object.assign([],state);
     //var stateCopy = JSON.parse(JSON.stringify(state));
     //stateCopy.push({id: Math.random(), label: action.text});
     //return stateCopy;

     const newState = Object.assign([], state);
     const indexOfCatToDelete = state.findIndex(cat => {
     return cat.id == action.cat.id
     });
     newState.splice(indexOfCatToDelete, 1);
     newState.empty();
     let artistDetail = getArtist();
     newState.push(action.artist);

     return newState;
     }
     return state;*/
}

function albumReducer(state = initialState, action) {
    switch (action.type) {
        case SET_ALBUM_DETAILS: {
            //alert(action.artistTags);
            const newState = Object.assign([], state);
            newState.push({
                'artistName': action.artistName,
                'albumName': action.albumName,
                'albumImage': action.albumImage,
                'albumListeners': action.albumListeners,
                'albumPlayCount': action.albumPlayCount,
                'albumTracks': action.albumTracks,
                'albumTags': action.albumTags,
                'wiki': action.wiki
            });
            return newState;
        }
        default:
            return state;
    }
}


function trackReducer(state = initialState, action) {
    switch (action.type) {
        case SET_TRACK_DETAILS: {
            //alert(action.artistTags);
            const newState = Object.assign([], state);
            newState.push({
                'artistName': action.artistName,
                'trackName': action.trackName,
                'albumName': action.albumName,
                'albumImage': action.albumImage,
                'trackPlayCount': action.playCount,
                'trackListeners': action.listeners,
                'wiki': action.wiki,
                'trackTags': action.trackTags,
                'similarTrack': action.similarTrack,
                'deep': action.deep,
                'limit': action.limit,
                'duration': action.duration
            });
            return newState;
        }
        default:
            return state;
    }
}

function trackNameReducer(state = initialState, action) {
    switch (action.type) {
        case SET_TRACK: {
            const newState = Object.assign([], state);
            //newState.indexOf(action.albumName) === -1 ? newState.push(action.albumName) : console.log("This item already exists");
            newState.push({
                'artistName': action.artistName,
                'trackName': action.trackName
            });
            return newState;
        }
        default:
            return state;
    }
}

function tagReducer(state = initialState, action) {
    switch (action.type) {
        case SET_TAG_DETAILS: {
            //alert(action.artistTags);
            const newState = Object.assign([], state);
            newState.push({
                'tagName': action.tagName,
                'similarTag': action.similarTag,
                'total': action.total,
                'reach': action.reach,
                'deep': action.deep,
                'limit': action.limit,
                'wiki': action.wiki,
                'topTagTracks' : action.topTagTracks
            });
            return newState;
        }
        default:
            return state;
    }
}

function spotifyTagReducer(state = initialState, action) {
    switch (action.type) {
        case SET_SPOTIFY_TAG_DETAILS: {
            //console.log("spotifyArtistIDReducer");
            // console.log(action.trackID);
            const newState = Object.assign([], state);
            //newState.indexOf(action.trackID) === -1 ? newState.push(action.trackID) : console.log("This item already exists");
            newState.push({
                'topGenreTracks': action.topGenreTracks
            });
            return newState;
        }
        default:
            return state;
    }
}


const artistApp = combineReducers({
    artistName: artistNameReducer,
    artistDetails: artistReducer,
    spotifyArtistDetails: spotifyReducer,
    spotifyTrackID: spotifyReducer,
    youtubeTrackID: youtubeReducer,
    youtubeVideoDetails: youtubeReducer,

    albumName: albumNameReducer,
    albumDetails: albumReducer,
    spotifyAlbumDetails: spotifyAlbumReducer,
    spotifyAlbumID: spotifyAlbumReducer,

    trackName: trackNameReducer,
    trackDetails: trackReducer,

    tagDetails: tagReducer,
    tagName: tagNameReducer,
    spotifyTagDetails: spotifyTagReducer,

    loading: loadingReducer
});

export default artistApp