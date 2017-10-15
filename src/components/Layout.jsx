import React from 'react';
import {Nav, Footer} from '/';
import ArtistDetailsContainer from "../containers/ArtistDetailsContainer";
import ArtistGraphContainer from "../containers/ArtistGraphContainer";
import SpotifyPlayerContainer from "../containers/SpotifyPlayerContainer";
import YouTubePlayerContainer from "../containers/YouTubePlayerContainer";

class Layout extends React.Component {

    render() {

        return (
            <div className="row">
                <div className="col-lg-3 col-md-12">
                    <Nav artistName={this.props.artistName}/>
                </div>
                <div className="col-9 mt-2">
                    <ArtistDetailsContainer artistDetails={this.props.artistDetails} loading={this.props.loading}/>
                    <ArtistGraphContainer artistDetails={this.props.artistDetails} loading={this.props.loading}/>
                    <div className="row">
                        <SpotifyPlayerContainer spotifyTrackID={this.props.spotifyTrackID}/>
                        <YouTubePlayerContainer youtubeTrackID={this.props.youtubeTrackID}/>
                    </div>
                </div>
                <div className="col-12 mt-5">
                    <Footer />
                </div>
            </div>
        );
    }
}

export default Layout;