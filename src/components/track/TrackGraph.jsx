import React from "react";
import $ from 'jquery';

class TrackGraph extends React.Component {

    render() {
        //console.log("graph bejott");

        let similarTrack;
        const trackDetails = this.props.trackDetails;
        if (trackDetails.length > 0) {
            const lastArtistItem = trackDetails.length - 1;
            similarTrack = trackDetails[lastArtistItem].similarTrack;
            console.log(similarTrack);
            if (similarTrack !== undefined) {
                similarTrack = JSON.stringify(similarTrack);

                if (trackDetails[lastArtistItem].limit > 4 || trackDetails[lastArtistItem].deep > 4) {
                    $('.graph').css({'height': '1000px'});
                }
                else if (trackDetails[lastArtistItem].limit > 3 || trackDetails[lastArtistItem].deep > 3) {
                    $('.graph').css({'height': '800px'});
                } else {
                    $('.graph').css({'height': '400px'});
                }

                let embedCode = '<script type="text/javascript">renderGraph(' + similarTrack + ', false, false, true); </script>';
                $('.graph').fadeIn();
                $('.graph').empty();
                $('.graph').append(embedCode);
                //window.renderGraphFromReact(similarTrack);
                //renderGraph(similarTrack, false, false);
            }
        }

        return (
            <div className="row">
                <div className="col-12 graph">
                </div>
                <div className="col-12">
                    <hr className="line"/>
                </div>

                {/*<input id="graphSearch" className="form-control" type="text" value={this.state.value}
                 onChange={this.onTextInputChange}/>*/}
            </div>
        )
    }
}

export default TrackGraph