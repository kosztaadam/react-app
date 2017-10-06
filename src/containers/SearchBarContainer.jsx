import {connect} from 'react-redux'
import {setArtist} from '../actions/setArtist'
import SearchBar from '../components/SearchBar';

const mapStateToProps = (state, ownProps) => {
    return {
        artist: state.artist
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        setArtist: (newartist) => {
            dispatch(setArtist(newartist));
        }
    }
};

const SearchBarContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchBar);

export default SearchBarContainer