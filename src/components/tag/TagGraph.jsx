import React from "react";
import $ from 'jquery';

class TagGraph extends React.Component {

    render() {
        //console.log("graph bejott");

        let similarTag;
        const tagDetails = this.props.tagDetails;
        if (tagDetails.length > 0) {
            const lastArtistItem = tagDetails.length - 1;
            similarTag = tagDetails[lastArtistItem].similarTag;
            similarTag = JSON.stringify(similarTag);

            if (tagDetails[lastArtistItem].limit > 4 || tagDetails[lastArtistItem].deep > 4) {
                $('.graph').css({'height': '1000px'});
            }
            else if (tagDetails[lastArtistItem].limit > 3 || tagDetails[lastArtistItem].deep > 3) {
                $('.graph').css({'height': '800px'});
            } else {
                $('.graph').css({'height': '400px'});
            }

            let embedCode = '<script type="text/javascript">renderGraph(' + similarTag + ', false, false, false, true); </script>';
            $('.graph').fadeIn();
            $('.graph').empty();
            $('.graph').append(embedCode);
            //window.renderGraphFromReact(similarArtist);
            //renderGraph(similarArtist, false, false);
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

export default TagGraph