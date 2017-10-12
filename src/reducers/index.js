import {combineReducers} from 'redux'
import {
    SET_ARTIST,
    SET_ARTIST_DETAILS,
    LOADING_ARTIST,
    LOADING_ARTIST_FINISHED,
    SET_SPOTIFY_ARTIST
} from '../actions/consts';

/*function getArtist(artist) {
 $.ajax({
 url: 'http://localhost:5000/json/artist/' + artist,
 beforeSend: function () {
 $(".artistdetails").hide();
 $(".spinner").fadeIn();
 }
 })
 .done(function (res) {
 let parsedRes = JSON.parse(res);
 let similarArtist = JSON.parse(parsedRes.similarArtistsList);
 let artist = parsedRes.artist;
 let topAlbum = parsedRes.artistTopAlbum;
 //this.setState({artist, topAlbum, entries: similarArtist.nodes});
 return ({
 'artist': artist,
 'topAlbum': topAlbum,
 'entries': similarArtist.nodes
 });
 }.bind(this))
 .fail(function (e) {
 console.log("getArtist ajax error");
 console.log(e);
 });
 }*/

const initialState = [];

function loadingReducer(state = initialState, action) {
    switch (action.type) {
        case LOADING_ARTIST: {
            console.log("recude loaading " + action.loading);
            const newState = Object.assign([], state);
            newState.loading = action.loading;
            return newState;
        }
        case LOADING_ARTIST_FINISHED: {
            console.log("recude finished " + action.loading);
            const newState = Object.assign([], state);
            newState.loading = action.loading;
            return newState;
        }
        default:
            return state;
    }
}

function artistNameReducer(state = initialState, action) {
    switch (action.type) {
        case SET_ARTIST: {
            console.log("setArtist");
            const newState = Object.assign([], state);
            newState.push(action.artistName);
            return newState;
        }
        default:
            return state;
    }
}

function spotifyTrackIDReducer(state = initialState, action) {
    switch (action.type) {
        case SET_SPOTIFY_ARTIST: {
            console.log("spotifyArtistIDReducer");
            console.log(action.trackID);
            const newState = Object.assign([], state);
            newState.push(action.trackID);
            return newState;
        }
        default:
            return state;
    }
}

function artistReducer(state = initialState, action) {
    switch (action.type) {
        case SET_ARTIST_DETAILS: {
            const newState = Object.assign([], state);
            newState.push({
                'artistName': action.artistName,
                'topAlbum': action.topAlbum,
                'similarArtist': action.similarArtist
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

const artistApp = combineReducers({
    artistName: artistNameReducer,
    artistDetails: artistReducer,
    spotifyTrackID: spotifyTrackIDReducer,
    loading: loadingReducer
});

export default artistApp