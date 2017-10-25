import {connect} from 'react-redux'
import {getAlbum} from '../../actions/album/getAlbum'
import ArtistDetails from '../../components/album/AlbumDetails';

const mapStateToProps = (state, ownProps) => {
    return {
        albumDetails: state.albumDetails,
        //loading: state.loading.loading,
        spotifyAlbumDetails: state.spotifyAlbumDetails.albumDetails,
        youtubeVideoDetails: state.youtubeVideoDetails.ytVideoDetails
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getAlbum: (artist, album) => {
            dispatch(getAlbum(artist, album));
        }
    }
};

const ArtistDetailsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ArtistDetails);

export default ArtistDetailsContainer