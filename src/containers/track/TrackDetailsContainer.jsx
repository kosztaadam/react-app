import {connect} from 'react-redux'
import {getTrack} from '../../actions/track/getTrack'
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
        getTrack: (artist, track) => {
            dispatch(getTrack(artist, track));
        },
        getTag: (tag) => {
            window.location.href = "/cimkek?tag=" + tag;
        },
        getAlbum: (artist, album) => {
            window.location.href = "/albumok?artist=" + artist + "&album=" + album;
        },
    }
};

const TrackDetailsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(TrackDetails);

export default TrackDetailsContainer