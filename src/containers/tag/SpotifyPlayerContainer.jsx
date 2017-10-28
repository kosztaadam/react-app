import {connect} from 'react-redux'
import SpotifyPlayer from '../../components/tag/SpotifyPlayer'
import {getTag} from '../../actions/tag/getTag'

const mapStateToProps = (state, ownProps) => {
    return {
        spotifyTagDetails: state.spotifyTagDetails
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getTag: (newtag) => {
            dispatch(getTag(newtag));
        }
    }
};

const SpotifyPlayerContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(SpotifyPlayer);

export default SpotifyPlayerContainer