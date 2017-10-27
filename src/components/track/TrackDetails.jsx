import React from "react";
import $ from 'jquery';

class TrackDetails extends React.Component {

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
            return {
                __html: wiki
            }
        }
    }

    render() {
        const {getArtist, trackDetails, spotifytrackDetails, youtubeVideoDetails} = this.props;

        //Spotify details

        console.log(spotifytrackDetails);

        let popularity = "";
        let popularityClass = "c100 dark green small";

        if (spotifytrackDetails !== undefined) {
            //popularity
            popularity = spotifytrackDetails.popularity;
            popularityClass += " p" + spotifytrackDetails.popularity;
        }


        //Last.fm details
        let artistName, trackName, albumName, albumImage, trackListener, trackPlayCount, wiki, minutes,
            seconds = "";
        let similarTrack = [];
        let trackTags = [];

        if (trackDetails.length > 0) {
            let lastTrackItem = trackDetails.length - 1;
            artistName = trackDetails[lastTrackItem].artistName;
            trackName = trackDetails[lastTrackItem].trackName;
            albumName = trackDetails[lastTrackItem].albumName;
            similarTrack = JSON.parse(trackDetails[lastTrackItem].similarTrack).nodes;
            trackTags = JSON.parse(trackDetails[lastTrackItem].trackTags);
            albumImage = trackDetails[lastTrackItem].albumImage;
            trackListener = this.numberWithCommas(trackDetails[lastTrackItem].trackListeners);
            trackPlayCount = this.numberWithCommas(trackDetails[lastTrackItem].trackPlayCount);
            wiki = trackDetails[lastTrackItem].wiki;
            seconds = Math.floor(trackDetails[lastTrackItem].duration / 1000);
            minutes = Math.floor(seconds / 60);
            seconds = seconds - (minutes * 60);
        }

        //Youtube details
        let ytViewCount, likeCount, dislikeCount = "";
        let ytArtistTags = [];

        if (youtubeVideoDetails !== undefined) {
            ytViewCount = this.numberWithCommas(youtubeVideoDetails.statistics.viewCount);
            likeCount = this.numberWithCommas(youtubeVideoDetails.statistics.likeCount);
            dislikeCount = this.numberWithCommas(youtubeVideoDetails.statistics.dislikeCount);
            ytArtistTags = youtubeVideoDetails.tags;
            ytArtistTags = ytArtistTags.slice(0, 10);
        }

        console.log("frissul a details");

        return (
            <div className="row">
                <div className="col-md-8 col-sm-12">
                    <h2 className="mb-3">Szám adatok</h2>
                    <h3>{artistName} - {trackName}</h3>
                </div>
                <div className="col-md-4 col-sm-12 popularity">
                    <p className="popularity_text mr-3">Népszerűség: </p>
                    <div className={popularityClass}>
                        <span>{popularity}</span>
                        <div className="slice">
                            <div className="bar"/>
                            <div className="fill"/>
                        </div>
                    </div>
                </div>

                <div className="col-12 firstHide">
                    <hr className="line"/>
                </div>

                <div className="col-md-4 col-sm-12">
                    <div className="row">
                        <div className="col-12">
                            <img src={albumImage} alt={trackName} width="100%"/>
                        </div>
                        <div className="col-12 mt-2">
                            <span dangerouslySetInnerHTML={ this.htmlText(wiki) }/>
                        </div>
                    </div>
                </div>
                <div className="artistDetails col-md-8 col-sm-12 firstHide">
                    <ul>
                        <div className="clearfix"/>
                        <li>Album: {albumName}</li>
                        <li>Hossz: {minutes}:{seconds}</li>
                        <li>Hallgatók száma: {trackListener}</li>
                        <li>Lejátszások száma: {trackPlayCount}</li>
                        <li>Youtube videó megtekintések száma: {ytViewCount}</li>
                        <li>Youtube videó like/dislike: {likeCount}/{dislikeCount}</li>
                        <li>Hasonló számok:
                            <ul className="similar_artist">
                                {
                                    similarTrack.map(function (item) {
                                        if (item.group !== 1) {
                                            return;
                                        }
                                        return <li key={item.id} onClick={e => getArtist(item.id)}>{item.artist} {" "}
                                            - {item.id}</li>
                                    })
                                }
                            </ul>
                        </li>
                        <li>Last.fm címkék:
                            <ul className="tags">
                                {
                                    trackTags.map(function (item) {
                                        let i = Math.floor((Math.random() * 4) + 1);
                                        return <li className={"list-item color-" + i} key={item.name}
                                                   onClick={e => getArtist(item.name)}>{item.name}</li>
                                    })
                                }
                                <li>
                                    <div className="clearfix"/>
                                </li>
                            </ul>
                        </li>
                        <li>Youtube címkék:
                            <ul className="tags">
                                {
                                    ytArtistTags.map(function (item) {
                                        let i = Math.floor((Math.random() * 4) + 1);
                                        return <li className={"list-item color-" + i} key={item}
                                                   onClick={e => getArtist(item)}>{item}</li>
                                    })
                                }
                                <li>
                                    <div className="clearfix"/>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default TrackDetails;