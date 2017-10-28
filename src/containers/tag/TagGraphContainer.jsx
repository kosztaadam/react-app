import {connect} from 'react-redux'
import {getTag} from '../../actions/tag/getTag'
import TagGraph from '../../components/tag/TagGraph';

const mapStateToProps = (state, ownProps) => {
    return {
        tagDetails: state.tagDetails,
        loading: state.loading.loading
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getTag: (newartist) => {
            dispatch(getTag(newartist));
        }
    }
};

const TagGraphContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(TagGraph);

export default TagGraphContainer