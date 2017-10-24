import React from "react";
//import $ from 'jquery';

class albumDetails extends React.Component {

    htmlText(wiki) {
        return {
            __html: wiki
        }
    }

    render() {
        const {getAlbum, albumDetails} = this.props;
        let {spotifyAlbumDetails} = this.props;

        //Spotify details
        //console.log(spotifyAlbumDetails);

        let popularity, followers, releaseDate = "";
        let genres = [];
        let popularityClass = "c100 dark green small";

        if (spotifyAlbumDetails !== undefined) {
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

        //Last.fm details
        let artistName, albumName, albumImage, albumListeners, albumPlayCount, wiki = "";
        let albumTracks = [];
        let albumTags = [];

        if (albumDetails.length > 0) {
            const lastArtistItem = albumDetails.length - 1;
            artistName = albumDetails[lastArtistItem].artistName;
            albumName = albumDetails[lastArtistItem].albumName;
            albumTracks = JSON.parse(albumDetails[lastArtistItem].albumTracks);
            albumTags = JSON.parse(albumDetails[lastArtistItem].albumTags);
            albumImage = albumDetails[lastArtistItem].albumImage;
            albumListeners = albumDetails[lastArtistItem].albumListeners;
            albumPlayCount = albumDetails[lastArtistItem].albumPlayCount;
            wiki = albumDetails[lastArtistItem].wiki;
        }

        console.log("frissul a details");

        return (
            <div className="row">
                <div className="col-8">
                    <h2 className="mb-3">Album adatok</h2>
                    <h3>{artistName} - {albumName}</h3>
                </div>
                <div className="col-4 popularity">
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

                <div className="col-4">
                    <img src={albumImage} alt={albumName} width="100%"/>
                </div>
                <div className="artistDetails col-8">
                    <ul>
                        <div className="clearfix"/>
                        <li>Hallgatók száma: {albumListeners}</li>
                        <li>Lejátszások száma: {albumPlayCount}</li>
                        <li>Kiadás dátuma: {releaseDate}</li>
                        <li>Számok:
                            <ul>
                                {
                                    albumTracks.map(function (item) {
                                        let i = Math.floor((Math.random() * 4) + 1);
                                        var minutes = Math.floor(item.duration / 60);
                                        var seconds = item.duration - minutes * 60;

                                        return <li className={"list-item color-" + i} key={item.name}
                                                   onClick={e => getAlbum(item.name)}>{item.name} - {minutes}:{seconds}</li>
                                    })
                                }
                            </ul>
                        </li>
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