import {connect} from 'react-redux'
import {getArtist} from '../../actions/artist/getArtist'
import TrackGraph from '../../components/track/TrackGraph';

const mapStateToProps = (state, ownProps) => {
    return {
        trackDetails: state.trackDetails,
        loading: state.loading.loading
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getArtist: (newartist) => {
            dispatch(getArtist(newartist));
        }
    }
};

const TrackGraphContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(TrackGraph);

export default TrackGraphContainer