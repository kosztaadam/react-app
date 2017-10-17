import {connect} from 'react-redux'
import {getArtist} from '../actions/getArtist'
import ArtistDetails from '../components/ArtistDetails';

const mapStateToProps = (state, ownProps) => {
    return {
        artistDetails: state.artistDetails,
        loading: state.loading.loading,
        spotifyArtistDetails: state.spotifyArtistDetails.artistDetails
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getArtist: (newartist) => {
            dispatch(getArtist(newartist));
        }
    }
};

const ArtistDetailsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ArtistDetails);

export default ArtistDetailsContainer