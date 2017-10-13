import React from 'react';
import {Nav, Footer, SearchBar} from '/';
import SearchBarContainer from "../containers/SearchBarContainer"
import ArtistDetailsContainer from "../containers/ArtistDetailsContainer";
import ArtistGraphContainer from "../containers/ArtistGraphContainer";
import SpotifyPlayerContainer from "../containers/SpotifyPlayerContainer";
import YouTubePlayerContainer from "../containers/YouTubePlayerContainer";

class Layout extends React.Component {

    render() {

        return (
            <div>
                <Nav/>
                <SearchBarContainer artistName={this.props.artistName}/>
                <ArtistDetailsContainer artistDetails={this.props.artistDetails} loading={this.props.loading}/>
                <ArtistGraphContainer artistDetails={this.props.artistDetails} loading={this.props.loading}/>
                <SpotifyPlayerContainer spotifyTrackID={this.props.spotifyTrackID}/>
                <YouTubePlayerContainer youtubeTrackID={this.props.youtubeTrackID}/>
                <Footer />
            </div>
        );
    }
}

export default Layout;