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
        },
        getTag: (tag) => {
            window.location.href = "/cimkek?tag=" + tag;
        },
        getTrack: (artist, track) => {
            window.location.href = "/szamok?artist=" + artist + "&track=" + track;
        }
    }
};

const ArtistDetailsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ArtistDetails);

export default ArtistDetailsContainer