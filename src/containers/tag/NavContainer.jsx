import {connect} from 'react-redux'
import {getTag} from '../../actions/tag/getTag'
import Nav from '../../components/tag/Nav'

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

const NavContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Nav);

export default NavContainer