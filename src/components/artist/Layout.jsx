import React from 'react';
import Footer from '../Footer';
import NavContainer from "../../containers/artist/NavContainer"
import ArtistDetailsContainer from "../../containers/artist/ArtistDetailsContainer";
import ArtistGraphContainer from "../../containers/artist/ArtistGraphContainer";
import SpotifyPlayerContainer from "../../containers/artist/SpotifyPlayerContainer";
import YouTubePlayerContainer from "../../containers/artist/YouTubePlayerContainer";
import LoadingContainer from "../../containers/artist/LoadingContainer";

class Layout extends React.Component {

    render() {

        return (
            <div className="row">
                <div className="col-lg-3 col-md-12">
                    <NavContainer artistName={this.props.artistName}/>
                </div>
                <div className="col-lg-9 col-md-12 mt-2 right_container">
                    <ArtistDetailsContainer artistDetails={this.props.artistDetails}
                                            spotifyArtistDetails={this.props.spotifyArtistDetails}/>
                    <ArtistGraphContainer artistDetails={this.props.artistDetails}/>
                    <div className="row">
                        <SpotifyPlayerContainer spotifyTrackID={this.props.spotifyTrackID}/>
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

export default Layout;