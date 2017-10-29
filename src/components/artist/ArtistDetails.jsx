import React from "react";
import $ from 'jquery';

class ArtistDetails extends React.Component {

    shouldComponentUpdate(nextProps) {
        if ($(".firstHide").is(":hidden")) {
            $(".firstHide").show();
        }
        return true;

       /* let loading = nextProps.loading[0];
        console.log(loading);

        if (loading === 'Loading') {
            return false;
        }
        else {
            return true;
        }*/

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

    ytTags(ytArtistTags, getTag) {
        if (ytArtistTags == "") {
            return;
        }

        return (
            <li>Youtube címkék:
                <ul className="tags">
                    {
                        ytArtistTags.map(function (item) {
                            let i = Math.floor((Math.random() * 4) + 1);
                            return <li className={"list-item color-" + i} key={item}
                                       onClick={e => getTag(item)}>{item}</li>
                        })
                    }
                    <li>
                        <div className="clearfix"/>
                    </li>
                </ul>
            </li>
        )
    }

    spotifyTags(genres, getTag) {
        if (genres == "") {
            return;
        }

        return (
            <li>Spotify címkék:
                <ul className="tags">
                    {
                        genres.map(function (item) {
                            let i = Math.floor((Math.random() * 4) + 1);
                            return <li className={"list-item color-" + i} key={item}
                                       onClick={e => getTag(item)}>{item}</li>
                        })
                    }
                    <li>
                        <div className="clearfix"/>
                    </li>
                </ul>
            </li>
        )
    }

    render() {
        const {getArtist, getAlbum, getTag, artistDetails, spotifyArtistDetails, youtubeVideoDetails} = this.props;

        //Spotify details

        let popularity, followers = "";
        let genres = [];
        let popularityClass = "c100 dark green small";

        if (spotifyArtistDetails !== undefined) {
            //popularity
            popularity = spotifyArtistDetails.popularity;
            popularityClass += " p" + spotifyArtistDetails.popularity;

            //followers
            followers = this.numberWithCommas(spotifyArtistDetails.followers.total);

            //genres
            genres = spotifyArtistDetails.genres;

        }


        //Last.fm details
        let artistName, topAlbum, artistImage, artistListeners, artistPlayCount, wiki = "";
        let similarArtist = [];
        let artistTags = [];

        if (artistDetails.length > 0) {
            let lastArtistItem = artistDetails.length - 1;
            artistName = artistDetails[lastArtistItem].artistName;
            topAlbum = artistDetails[lastArtistItem].topAlbum;
            similarArtist = JSON.parse(artistDetails[lastArtistItem].similarArtist).nodes;
            artistTags = JSON.parse(artistDetails[lastArtistItem].artistTags);
            artistImage = artistDetails[lastArtistItem].artistImage;
            artistListeners = this.numberWithCommas(artistDetails[lastArtistItem].artistListeners);
            artistPlayCount = this.numberWithCommas(artistDetails[lastArtistItem].artistPlayCount);
            wiki = artistDetails[lastArtistItem].wiki;
        }

        //Youtube details
        let ytViewCount, likeCount, dislikeCount = "";
        let ytArtistTags = [];

        if (youtubeVideoDetails !== undefined) {
            ytViewCount = this.numberWithCommas(youtubeVideoDetails.statistics.viewCount);
            likeCount = this.numberWithCommas(youtubeVideoDetails.statistics.likeCount);
            dislikeCount = this.numberWithCommas(youtubeVideoDetails.statistics.dislikeCount);
            if (youtubeVideoDetails.tags !== undefined) {
                ytArtistTags = youtubeVideoDetails.tags;
                ytArtistTags = ytArtistTags.slice(0, 10);
            }
        }

        console.log("frissul a details");

        return (
            <div className="row">
                <div className="col-md-8 col-sm-12">
                    <h2 className="mb-3">Előadó adatok</h2>
                    <h3>{artistName}</h3>
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
                            <img src={artistImage} alt={artistName} width="100%"/>
                        </div>
                        <div className="col-12 mt-2">
                            <span dangerouslySetInnerHTML={ this.htmlText(wiki) }/>
                        </div>
                    </div>
                </div>
                <div className="artistDetails col-md-8 col-sm-12 firstHide">
                    <ul>
                        <div className="clearfix"/>
                        <li onClick={e => getAlbum(artistName, topAlbum)}>Legismertebb album: {topAlbum}</li>
                        <li>Hallgatók száma: {artistListeners}</li>
                        <li>Lejátszások száma: {artistPlayCount}</li>
                        <li>Spotify követők száma: {followers}</li>
                        <li>Youtube videó megtekintések száma: {ytViewCount}</li>
                        <li>Youtube videó like/dislike: {likeCount}/{dislikeCount}</li>
                        <li>Hasonló előadók:
                            <ul className="similar_artist">
                                {
                                    similarArtist.map(function (item) {
                                        if (item.group !== 1) {
                                            return;
                                        }
                                        return <li key={item.id} onClick={e => getArtist(item.id)}>{item.id}</li>
                                    })
                                }
                            </ul>
                        </li>
                        <li>Last.fm címkék:
                            <ul className="tags">
                                {
                                    artistTags.map(function (item) {
                                        let i = Math.floor((Math.random() * 4) + 1);
                                        return <li className={"list-item color-" + i} key={item.name}
                                                   onClick={e => getTag(item.name)}>{item.name}</li>
                                    })
                                }
                                <li>
                                    <div className="clearfix"/>
                                </li>
                            </ul>
                        </li>
                        {this.spotifyTags(genres, getTag)}
                        {this.ytTags(ytArtistTags, getTag)}
                    </ul>
                </div>
            </div>
        )
    }
}

export default ArtistDetails;


/*constructor(props) {
 super(props);
 // Set the videoList to empty array
 this.state = {
 artist: "",
 topAlbum: "",
 entries: []
 };
 }

 componentDidMount() {
 this.getArtist('The Killers');
 }

 shouldComponentUpdate(artist) {
 this.setState(artist);
 $(".artistdetails").fadeIn();
 $(".spinner").hide();
 return true;
 }

 getArtist(artist) {
 $.ajax({
 url: 'http://localhost:5000/json/artist/' + artist,
 beforeSend: function () {
 $(".artistdetails").hide();
 $(".spinner").fadeIn();
 }
 })
 .done(function (res) {
 let parsedRes = JSON.parse(res);
 let similarArtist = JSON.parse(parsedRes.similarArtistsList);
 let artist = parsedRes.artist;
 let topAlbum = parsedRes.artistTopAlbum;
 this.setState({artist, topAlbum, entries: similarArtist.nodes});
 }.bind(this))
 .fail(function (e) {
 console.log("getArtist ajax error");
 console.log(e);
 });
 }*/