import {combineReducers} from 'redux'
import {SET_ARTIST, SET_ARTIST_DETAILS, LOADING_ARTIST, LOADING_ARTIST_FINISHED} from '../actions/consts';

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

function artist(state = initialState , action) {
    switch(action.type) {
        case SET_ARTIST: {
            const newState = Object.assign([], state);
            newState.push({
                'artistName' : action.artistName
            });
            return newState;
        }
        case SET_ARTIST_DETAILS: {
            const newState = Object.assign([], state);
            newState.push({
                'artistName' : action.artistName,
                'topAlbum' : action.topAlbum,
                'similarArtist' : JSON.parse(action.similarArtist)
            });
            return newState;
        }
        case LOADING_ARTIST: {
            return action.loading;
        }
        case LOADING_ARTIST_FINISHED: {
            return action.loading;
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
    artist: artist
});

export default artistApp