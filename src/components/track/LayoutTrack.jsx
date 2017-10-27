import React from 'react';
import Footer from '../Footer';
import NavContainer from "../../containers/track/NavContainer"
import TrackDetailsContainer from "../../containers/track/TrackDetailsContainer";
import TrackGraphContainer from "../../containers/track/TrackGraphContainer";
import SpotifyPlayerContainer from "../../containers/track/SpotifyPlayerContainer";
import YouTubePlayerContainer from "../../containers/artist/YouTubePlayerContainer";
import LoadingContainer from "../../containers/artist/LoadingContainer";

class LayoutTrack extends React.Component {

    render() {

        return (
            <div className="row">
                <div className="col-lg-3 col-md-12">
                    <NavContainer artistName={this.props.artistName}/>
                </div>
                <div className="col-lg-9 col-md-12 mt-2 right_container">
                    <TrackDetailsContainer trackDetails={this.props.trackDetails}
                                           spotifytrackDetails={this.props.spotifytrackDetails}
                                           youtubeVideoDetails={this.props.youtubeVideoDetails}/>
                    <TrackGraphContainer trackDetails={this.props.trackDetails}/>
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

export default LayoutTrack;