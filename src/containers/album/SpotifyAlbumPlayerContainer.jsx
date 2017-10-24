import {connect} from 'react-redux'
import SpotifyAlbumPlayer from '../../components/album/SpotifyAlbumPlayer'
import {getArtist} from '../../actions/artist/getArtist'

const mapStateToProps = (state, ownProps) => {
    return {
        spotifyAlbumID: state.spotifyAlbumID
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getArtist: (newartist) => {
            dispatch(getArtist(newartist));
        }
    }
};

const SpotifyAlbumPlayerContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(SpotifyAlbumPlayer);

export default SpotifyAlbumPlayerContainer