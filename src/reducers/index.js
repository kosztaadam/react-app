import {combineReducers} from 'redux'
import {SET_ARTIST, REMOVE_ARTIST, GET_ARTIST_DETAILS} from '../actions/consts';

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
            //newState.delete();
            //let artistDetail = getArtist();
            newState.push(action.artist);
            //console.log("reducer");
            //console.log(newState);
            return newState;
        }
        case GET_ARTIST_DETAILS: {
            const newState = Object.assign([], state);
            newState.push(action.data);
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
    artist: artist
});

export default artistApp