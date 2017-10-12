import {connect} from 'react-redux'
import SpotifyPlayer from '../components/SpotifyPlayer'
import {getArtist} from '../actions/getArtist'

const mapStateToProps = (state, ownProps) => {
    return {
        spotifyTrackID: state.spotifyTrackID
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getArtist: (newartist) => {
            dispatch(getArtist(newartist));
        }
    }
};

const SpotifyPlayerContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(SpotifyPlayer);

export default SpotifyPlayerContainer