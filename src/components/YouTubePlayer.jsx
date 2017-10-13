import React from "react";


class YoutTubePlayer extends React.Component {

    iframe() {
        let youtubeID = "";
        console.log("yt iframe");
        let itemNumber = this.props.youtubeTrackID.length;

        console.log(itemNumber);
        if (itemNumber > 0) {
            youtubeID = this.props.youtubeTrackID[itemNumber - 1];
        }

        console.log(youtubeID);

        return {
            __html: '<iframe width="420" height="315" src="https://www.youtube.com/embed/' + youtubeID + '"></iframe>'
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

export default YoutTubePlayer