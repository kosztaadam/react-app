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
        getTag: (tag) => {
            dispatch(getTag(tag));
        }
    }
};

const NavContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Nav);

export default NavContainer