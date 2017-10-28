import React from "react";
import $ from 'jquery';

class SpotifyPlayer extends React.Component {

    iframe() {
        let trackID = "";

        let itemNumber = this.props.spotifyTagDetails.length;

        console.log(itemNumber);
        if (itemNumber > 0) {
            trackID = this.props.spotifyTagDetails[itemNumber - 1].topGenreTracks;
        }

        console.log(trackID);
        let insertCode = "";

        let limit = 5;

        if (trackID === "")
            return {__html: ''};
        else {
            let i = 0;
            trackID.map(function (item) {
                if (i < limit) {
                    i++;
                    insertCode += '<div class="col-12 mb-2 spotify-item">' +
                        '<iframe src="https://open.spotify.com/embed?uri=spotify:track:' + item.trackID + '" width="90%" height="80" frameborder="0" allowtransparency="true"></iframe>' +
                        '</div>'
                }
                else
                    return;
            });

            //insertCode = insertCode.replace(',', '');
            //console.log(insertCode);

            return {
                __html: insertCode
            }
        }
    }

    render() {
        return (
            <div className="col-lg-5 col-md-12 text-center">
                <div dangerouslySetInnerHTML = { this.iframe() }/>
            </div>
        )
    }
}

export default SpotifyPlayer