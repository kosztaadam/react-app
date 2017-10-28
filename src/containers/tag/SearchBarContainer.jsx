import {connect} from 'react-redux'
import {getTag} from '../../actions/tag/getTag'
import SearchBar from '../../components/tag/SearchBar'

const mapStateToProps = (state, ownProps) => {
    return {
        tagName: state.tagName
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getTag: (tag, similar, depth) => {
            dispatch(getTag(tag, similar, depth));
        }
    }
};

const SearchBarContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchBar);

export default SearchBarContainer