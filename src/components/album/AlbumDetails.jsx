import React from "react";
import $ from 'jquery';

class albumDetails extends React.Component {

    shouldComponentUpdate() {
        if ($(".firstHide").is(":hidden")) {
            $(".firstHide").show();
        }
        return true;
    }

    spotifyTags(genres) {

        const {getAlbum} = this.props;

        if (genres.length > 0) {
            return (
                <li>Spotify címkék:
                    <ul className="tags">
                        {
                            genres.map(function (item) {
                                let i = Math.floor((Math.random() * 4) + 1);
                                return <li className={"list-item color-" + i} key={item}
                                           onClick={e => getAlbum(item)}>{item}</li>
                            })
                        }
                        <li>
                            <div className="clearfix"/>
                        </li>
                    </ul>
                </li>
            )
        } else {
            return;
        }
    }

    componentDidMount() {
        $(".firstHide").hide();
    }

    htmlText(wiki) {
        if (wiki === undefined) {
            return {
                __html: "Nem található leírás."
            }
        } else {
            return {
                __html: wiki
            }
        }
    }

    numberWithCommas(x) {
        var parts = x.toString().split(".");
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ");
        return parts.join(".");
    }

    render() {
        const {getAlbum, albumDetails} = this.props;
        let {spotifyAlbumDetails, youtubeVideoDetails} = this.props;

        //Spotify details
        //console.log(spotifyAlbumDetails);

        let popularity, releaseDate = "";
        let genres = [];
        let popularityClass = "c100 dark green small";

        if (spotifyAlbumDetails !== undefined) {
            try {
                spotifyAlbumDetails = JSON.parse(spotifyAlbumDetails);
                //popularity
                popularity = spotifyAlbumDetails.popularity;
                popularityClass += " p" + spotifyAlbumDetails.popularity;

                //followers
                // followers = spotifyAlbumDetails.followers.total;

                //genres
                genres = spotifyAlbumDetails.genres;
                console.log(genres);

                releaseDate = spotifyAlbumDetails.release_date;
            }
            catch (e) {
                //console.log(e);
                popularity = "-";
                releaseDate = "Ismeretlen";
            }
        }

        //Last.fm details
        let artistName, albumName, albumImage, albumListeners, albumPlayCount, wiki = "";
        let albumTracks = [];
        let albumTags = [];

        if (albumDetails.length > 0) {
            const lastAlbumItem = albumDetails.length - 1;
            artistName = albumDetails[lastAlbumItem].artistName;
            albumName = albumDetails[lastAlbumItem].albumName;
            albumTracks = JSON.parse(albumDetails[lastAlbumItem].albumTracks);
            albumTags = JSON.parse(albumDetails[lastAlbumItem].albumTags);
            albumImage = albumDetails[lastAlbumItem].albumImage;
            albumListeners = this.numberWithCommas(albumDetails[lastAlbumItem].albumListeners);
            albumPlayCount = this.numberWithCommas(albumDetails[lastAlbumItem].albumPlayCount);
            wiki = albumDetails[lastAlbumItem].wiki;
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
                    <h2 className="mb-3">Album adatok</h2>
                    <h3 className="firstHide">{artistName} - {albumName}</h3>
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

                <div className="col-12">
                    <hr className="line"/>
                </div>

                <div className="col-md-4 col-sm-12">
                    <img src={albumImage} alt={albumName} width="100%"/>
                </div>
                <div className="artistDetails col-md-8 col-sm-12 mt-sm-3 firstHide">
                    <ul>
                        <div className="clearfix"/>
                        <li>Hallgatók száma: {albumListeners}</li>
                        <li>Lejátszások száma: {albumPlayCount}</li>
                        <li>Kiadás dátuma: {releaseDate}</li>
                        <li>Youtube videó megtekintések száma: {ytViewCount}</li>
                        <li>Youtube videó like/dislike: {likeCount}/{dislikeCount}</li>
                        <li>Számok:
                            <ul>
                                {
                                    albumTracks.map(function (item) {
                                        let i = Math.floor((Math.random() * 4) + 1);
                                        var minutes = Math.floor(item.duration / 60);
                                        var seconds = item.duration - minutes * 60;

                                        return <li className={"list-item color-" + i} key={item.name}
                                                   onClick={e => getAlbum(item.name)}>{item.name} {" "}
                                            - {minutes}:{seconds}</li>
                                    })
                                }
                            </ul>
                        </li>
                        {this.spotifyTags(genres)}
                        <li>Last.fm címkék:
                            <ul className="tags">
                                {
                                    albumTags.map(function (item) {
                                        let i = Math.floor((Math.random() * 4) + 1);
                                        return <li className={"list-item color-" + i} key={item.name}
                                                   onClick={e => getAlbum(item.name)}>{item.name}</li>
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
                                                   onClick={e => getAlbum(item)}>{item}</li>
                                    })
                                }
                                <li>
                                    <div className="clearfix"/>
                                </li>
                            </ul>
                        </li>
                        <li>Leírás: <span dangerouslySetInnerHTML={ this.htmlText(wiki) }/></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default albumDetails;


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
 $(".albumDetails").fadeIn();
 $(".spinner").hide();
 return true;
 }

 getArtist(artist) {
 $.ajax({
 url: 'http://localhost:5000/json/artist/' + artist,
 beforeSend: function () {
 $(".albumDetails").hide();
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