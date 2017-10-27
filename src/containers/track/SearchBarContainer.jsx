import {connect} from 'react-redux'
import {getTrack} from '../../actions/track/getTrack'
import SearchBar from '../../components/track/SearchBar'

const mapStateToProps = (state, ownProps) => {
    return {
        artistName: state.artistName
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getTrack: (artist, track, similar, depth) => {
            dispatch(getTrack(artist, track, similar, depth));
        }
    }
};

const SearchBarContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchBar);

export default SearchBarContainer