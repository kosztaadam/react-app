import React from "react";
import $ from 'jquery';

class SpotifyAlbumPlayer extends React.Component {

    iframe() {
        let albumID = "";
        let itemNumber = this.props.spotifyAlbumID.length;

        if (itemNumber > 0) {
            albumID = this.props.spotifyAlbumID[itemNumber - 1];
        }

        console.log("-------------++++++++++++++++");
        console.log(albumID);

        let insertCode = "";

        if (albumID === "")
            return {__html: ''};
        else {
            insertCode = '<div class="col-12 mb-2 spotify-item">' +
                '<iframe src="https://open.spotify.com/embed?uri=spotify:album:' + albumID + '" width="90%" height="460" frameborder="0" allowtransparency="true"></iframe>' +
                '</div>'
        }

        //insertCode = insertCode.replace(',', '');
        //console.log(insertCode);

        return {
            __html: insertCode
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

export default SpotifyAlbumPlayer