import {connect} from 'react-redux'
import {getArtist} from '../actions/getArtist'
import SearchBar from '../components/SearchBar';

const mapStateToProps = (state, ownProps) => {
    return {
        artist: state.artist
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getArtist: (newartist) => {
            dispatch(getArtist(newartist));
        }
    }
};

const SearchBarContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchBar);

export default SearchBarContainer