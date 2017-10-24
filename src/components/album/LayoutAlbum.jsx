import React from 'react';
import NavContainer from "../../containers/album/NavContainer"
import Footer from "../Footer";
import AlbumDetailsContainer from "../../containers/album/AlbumDetailsContainer";
import SpotifyAlbumPlayerContainer from "../../containers/album/SpotifyAlbumPlayerContainer";
import YouTubePlayerContainer from "../../containers/artist/YouTubePlayerContainer";
import LoadingContainer from "../../containers/artist/LoadingContainer";

class LayoutAlbum extends React.Component {

    render() {

        return (
            <div className="row">
                <div className="col-lg-3 col-md-12">
                    <NavContainer albumName={this.props.albumName}/>
                </div>
                <div className="col-lg-9 col-md-12 mt-2 right_container">
                    <AlbumDetailsContainer artistDetails={this.props.albumDetails}
                                           spotifyAlbumDetails={this.props.spotifyAlbumDetails}/>
                    <div className="row">
                        <SpotifyAlbumPlayerContainer spotifyAlbumID={this.props.spotifyAlbumID}/>
                        <YouTubePlayerContainer youtubeTrackID={this.props.youtubeTrackID}/>
                    </div>
                </div>
                <div className="col-lg-9 col-md-12 mt-2 loading">
                    <LoadingContainer loading={this.props.loading}/>
                </div>
                <div className="col-12 mt-5">
                    <Footer />
                </div>
            </div>
        );
    }
}

export default LayoutAlbum;