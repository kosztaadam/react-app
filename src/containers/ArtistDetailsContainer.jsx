import {connect} from 'react-redux'
import {setArtist} from '../actions/setArtist'
import ArtistDetails from '../components/ArtistDetails';

const mapStateToProps = (state, ownProps) => {
    return {
        artist: state.artist
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        setArtist: (newartist) => {
            dispatch(setArtist(newartist));
        }
    }
};

const ArtistDetailsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ArtistDetails);

export default ArtistDetailsContainer