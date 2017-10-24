import {connect} from 'react-redux'
import {getArtist} from '../../actions/artist/getArtist'
import Loading from '../../components/Loading';

const mapStateToProps = (state, ownProps) => {
    return {
        loading: state.loading
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getArtist: (newartist) => {
            dispatch(getArtist(newartist));
        }
    }
};

const LoadingContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Loading);

export default LoadingContainer