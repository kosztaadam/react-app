import {connect} from 'react-redux'
import {getAlbum} from '../../actions/album/getAlbum'
import SearchBar from '../../components/album/SearchBar'

const mapStateToProps = (state, ownProps) => {
    return {
        artistName: state.artistName
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getAlbum: (artist, album) => {
            dispatch(getAlbum(artist, album));
        }
    }
};

const SearchBarContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchBar);

export default SearchBarContainer