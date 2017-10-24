import {connect} from 'react-redux'
import {getArtist} from '../../actions/artist/getArtist'
import Nav from '../../components/artist/Nav'

const mapStateToProps = (state, ownProps) => {
    return {
        artistName: state.artistName
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getArtist: (newartist) => {
            dispatch(getArtist(newartist));
        }
    }
};

const NavContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Nav);

export default NavContainer