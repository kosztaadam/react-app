import React from 'react';
import Footer from '../Footer';
import NavContainer from "../../containers/tag/NavContainer"
import TagDetailsContainer from "../../containers/tag/TagDetailsContainer";
import TagGraphContainer from "../../containers/tag/TagGraphContainer";
import SpotifyPlayerContainer from "../../containers/tag/SpotifyPlayerContainer";
import YouTubePlayerContainer from "../../containers/artist/YouTubePlayerContainer";
import LoadingContainer from "../../containers/artist/LoadingContainer";

class Layout extends React.Component {

    render() {

        return (
            <div className="row">
                <div className="col-lg-3 col-md-12">
                    <NavContainer tagName={this.props.tagName}/>
                </div>
                <div className="col-lg-9 col-md-12 mt-2 right_container">
                    <TagDetailsContainer tagDetails={this.props.tagDetails}
                                         spotifyTagDetails={this.props.spotifyTagDetails}/>
                    <TagGraphContainer tagDetails={this.props.tagDetails}/>
                    <div className="row">
                        <SpotifyPlayerContainer spotifyTagDetails={this.props.spotifyTagDetails}/>
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