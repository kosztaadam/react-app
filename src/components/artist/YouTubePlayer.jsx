import React from "react";


class YoutTubePlayer extends React.Component {

    iframe() {
        let youtubeID = "";
        //console.log("yt iframe");
        let itemNumber = this.props.youtubeTrackID.length;

        console.log(itemNumber);
        if (itemNumber > 0) {
            youtubeID = this.props.youtubeTrackID[itemNumber - 1];
        }

        if (youtubeID === "") {
            return {
                __html: ""
            }
        } else {
            return {
                __html: '<iframe width="90%" height="460" src="https://www.youtube.com/embed/' + youtubeID + '"></iframe>'
            }
        }
    }

    render() {
        return (
            <div className="col-lg-7 col-md-12 text-center">
                <div dangerouslySetInnerHTML={ this.iframe() }/>
            </div>
        )
    }
}

export default YoutTubePlayer