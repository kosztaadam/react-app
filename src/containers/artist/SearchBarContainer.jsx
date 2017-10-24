import {connect} from 'react-redux'
import {getArtist} from '../../actions/artist/getArtist'
import SearchBar from '../../components/artist/SearchBar'

const mapStateToProps = (state, ownProps) => {
    return {
        artistName: state.artistName
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getArtist: (newartist, similar, depth) => {
            dispatch(getArtist(newartist, similar, depth));
        }
    }
};

const SearchBarContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchBar);

export default SearchBarContainer