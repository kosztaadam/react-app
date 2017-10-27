import {connect} from 'react-redux'
import {getArtist} from '../../actions/artist/getArtist'
import TrackDetails from '../../components/track/TrackDetails';

const mapStateToProps = (state, ownProps) => {
    return {
        trackDetails: state.trackDetails,
        loading: state.loading.loading,
        spotifytrackDetails: state.spotifyArtistDetails.artistDetails,
        youtubeVideoDetails: state.youtubeVideoDetails.ytVideoDetails
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getArtist: (newartist) => {
            dispatch(getArtist(newartist));
        }
    }
};

const TrackDetailsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(TrackDetails);

export default TrackDetailsContainer