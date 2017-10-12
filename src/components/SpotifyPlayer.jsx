import React from "react";
import $ from 'jquery';

class SpotifyPlayer extends React.Component {

    /* constructor(props) {
     super(props);
     // Set the videoList to empty array
     this.state = {
     iframe: ""
     };
     }

     componentDidMount() {
     $.get('/spotify', function (res) {
     console.log(res);
     //var parsedRes = JSON.parse(res);
     //var url = "https://embed.spotify.com/?uri=spotify:album:";
     this.setState({iframe: res});
     }.bind(this)
     )
     }*/

    iframe() {
        let trackID = "";
        console.log("iframe");
        let itemNumber = this.props.spotifyTrackID.length;

        console.log(itemNumber);
        if (itemNumber > 0) {
            trackID = this.props.spotifyTrackID[itemNumber - 1];
        }

        console.log(trackID);

        return {
            __html: '<iframe src="https://open.spotify.com/embed?uri=spotify:track:' + trackID + '" width="300" height="100" frameborder="0" allowtransparency="true"></iframe>'
        }
    }

    render() {
        return (
            <div>
                <div dangerouslySetInnerHTML={ this.iframe() }/>
            </div>
        )
    }
}

export default SpotifyPlayer