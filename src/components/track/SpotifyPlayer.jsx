import React from "react";
import $ from 'jquery';

class SpotifyPlayer extends React.Component {

    iframe() {
        let trackID = "";
        console.log("iframe");
        let itemNumber = this.props.spotifyTrackID.length;

        console.log(itemNumber);
        if (itemNumber > 0) {
            trackID = this.props.spotifyTrackID[itemNumber - 1];
        }

        console.log(trackID);
        let insertCode = "";

        let limit = 5;

        if (trackID === "")
            return {__html: ''};
        else {
            return (
                {
                    __html: '<div class="col-12 mb-2 spotify-item">' +
                    '<iframe src="https://open.spotify.com/embed?uri=spotify:track:' + trackID + '" width="90%" height="80" frameborder="0" allowtransparency="true"></iframe>' +
                    '</div>'
                })
        }
    }

    render() {
        return (
            <div className="col-lg-5 col-md-12 text-center">
                <div dangerouslySetInnerHTML={ this.iframe() }/>
            </div>
        )
    }
}

export default SpotifyPlayer