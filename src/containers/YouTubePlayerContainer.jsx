import {connect} from 'react-redux'
import YouTubePlayer from '../components/YouTubePlayer'
import {getArtist} from '../actions/getArtist'

const mapStateToProps = (state, ownProps) => {
    return {
        youtubeTrackID: state.youtubeTrackID
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getArtist: (newartist) => {
            dispatch(getArtist(newartist));
        }
    }
};

const YouTubePlayerContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(YouTubePlayer);

export default YouTubePlayerContainer