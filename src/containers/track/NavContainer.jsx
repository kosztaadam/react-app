import {connect} from 'react-redux'
import {getTrack} from '../../actions/track/getTrack'
import Nav from '../../components/track/Nav'

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

const NavContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Nav);

export default NavContainer