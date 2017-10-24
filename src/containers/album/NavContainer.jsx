import {connect} from 'react-redux'
import {getAlbum} from '../../actions/album/getAlbum'
import Nav from '../../components/album/Nav'

const mapStateToProps = (state, ownProps) => {
    return {
        albumName: state.albumName
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getAlbum: (artist, album) => {
            dispatch(getAlbum(artist, album));
        }
    }
};

const NavContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Nav);

export default NavContainer