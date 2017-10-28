import {connect} from 'react-redux'
import {getTag} from '../../actions/tag/getTag'
import TrackDetails from '../../components/tag/TagDetails';
const mapStateToProps = (state, ownProps) => {
    return {
        tagDetails: state.tagDetails,
        loading: state.loading.loading,
        spotifyTagDetails: state.spotifyTagDetails,
        youtubeVideoDetails: state.youtubeVideoDetails.ytVideoDetails
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getTag: (tag) => {
            dispatch(getTag(tag));
        },
        getTagTrack: (artist, track) => {
            window.location.href = "/szamok?artist=" + artist + "&track=" + track;
        }
    }
};

const TagDetailsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(TrackDetails);

export default TagDetailsContainer