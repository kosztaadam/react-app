import React from "react";
import $ from 'jquery';

class tagDetails extends React.Component {

    shouldComponentUpdate() {
        if ($(".firstHide").is(":hidden")) {
            $(".firstHide").show();
        }
        return true;
    }

    componentDidMount() {
        $(".firstHide").hide();
    }

    numberWithCommas(x) {
        var parts = x.toString().split(".");
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ");
        return parts.join(".");
    }

    htmlText(wiki) {
        if (wiki === undefined) {
            return {
                __html: ""
            }
        } else {
            wiki = wiki.replace("\\", "");
            return {
                __html: wiki
            }
        }
    }

    render() {
        const {getTagTrack, getTag, tagDetails, spotifyTagDetails, youtubeVideoDetails} = this.props;

        //Spotify details
        let itemNumber = this.props.spotifyTagDetails.length;
        let spotifyTracks = [];

        if (itemNumber > 0) {
            spotifyTracks = this.props.spotifyTagDetails[itemNumber - 1].topGenreTracks;
        }

        //Last.fm details
        let tagName, reach, total, wiki = "";
        let similarTag = [];
        let topTagTracks = [];

        if (tagDetails.length > 0) {
            let lastArtistItem = tagDetails.length - 1;
            tagName = tagDetails[lastArtistItem].tagName;
            similarTag = JSON.parse(tagDetails[lastArtistItem].similarTag).nodes;
            topTagTracks = JSON.parse(tagDetails[lastArtistItem].topTagTracks);
            reach = this.numberWithCommas(tagDetails[lastArtistItem].reach);
            total = this.numberWithCommas(tagDetails[lastArtistItem].total);
            wiki = tagDetails[lastArtistItem].wiki;
        }

        return (
            <div className="row">
                <div className="col-md-8 col-sm-12">
                    <h2 className="mb-3">Címke adatok</h2>
                    <h3>{tagName}</h3>
                </div>
                <div className="col-md-4 col-sm-12 popularity">
                </div>

                <div className="col-12 firstHide">
                    <hr className="line"/>
                </div>


                <div className="tagDetails col-md-12 firstHide">
                    <ul>
                        <div className="clearfix"/>
                        <li>Hallgatók száma: {reach}</li>
                        <li>Lejátszások száma: {total}</li>
                        <li>Legismertebb előadók és számaik
                            <div className="row">
                                <div className="col-md-6">
                                    Last.fm:
                                    <ul className="similar_artist">
                                        {
                                            topTagTracks.map(function (item) {
                                                return <li key={item.artist}
                                                           onClick={e => getTagTrack(item.artist, item.track)}>{item.artist} {" - "} {item.track}</li>
                                            })
                                        }
                                    </ul>
                                </div>
                                <div className="col-md-6 col-sm-12">
                                    Spotify:
                                    <ul className="similar_artist">
                                        {
                                            spotifyTracks.map(function (item) {
                                                return <li key={item.artist}
                                                           onClick={e => getTagTrack(item.artist, item.track)}>{item.artist} {" - "} {item.track}</li>
                                            })
                                        }
                                    </ul>
                                </div>
                            </div>
                        </li>
                        <li>Hasonló címkék:
                            <ul className="similar_artist">
                                {
                                    similarTag.map(function (item) {
                                        if (item.group !== 1) {
                                            return;
                                        }
                                        return <li key={item.id} onClick={e => getTag(item.id)}>{item.id}</li>
                                    })
                                }
                            </ul>
                        </li>
                        <li>Leírás: <span dangerouslySetInnerHTML={ this.htmlText(wiki) }/></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default tagDetails;
