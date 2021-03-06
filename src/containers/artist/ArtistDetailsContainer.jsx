import {connect} from 'react-redux'
import {getArtist} from '../../actions/artist/getArtist'
import ArtistDetails from '../../components/artist/ArtistDetails';

const mapStateToProps = (state, ownProps) => {
    return {
        artistDetails: state.artistDetails,
        loading: state.loading,
        spotifyArtistDetails: state.spotifyArtistDetails.artistDetails,
        youtubeVideoDetails: state.youtubeVideoDetails.ytVideoDetails
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getArtist: (newartist) => {
            dispatch(getArtist(newartist));
        },
        getTag: (tag) => {
            window.location.href = "/cimkek?tag=" + tag;
        },
        getAlbum: (artist, album) => {
            window.location.href = "/albumok?artist=" + artist + "&album=" + album;
        }
    }
};

const ArtistDetailsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ArtistDetails);

export default ArtistDetailsContainer