import {connect} from 'react-redux'
import {getArtist} from '../../actions/artist/getArtist'
import ArtistGraph from '../../components/artist/ArtistGraph';

const mapStateToProps = (state, ownProps) => {
    return {
        artistDetails: state.artistDetails,
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

const ArtistGraphContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ArtistGraph);

export default ArtistGraphContainer