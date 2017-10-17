import React from "react";
//import $ from 'jquery';

class ArtistDetails extends React.Component {

    shouldComponentUpdate() {
        console.log("shouldComponentupdate " + this.props.loading);

        if (this.props.loading || this.props.loading === undefined) {
            return false;
        }
        return true;
    }

    render() {
        const {getArtist, artistDetails, spotifyArtistDetails} = this.props;

        let popularity = 0;
        let popularityClass = "c100 dark green small";
        if (spotifyArtistDetails !== undefined) {
            popularity = spotifyArtistDetails.popularity;
            popularityClass += " p" + spotifyArtistDetails.popularity;
        }

        let artistName, topAlbum, artistImage = "";
        let similarArtist = [];

        if (artistDetails.length > 0) {
            const lastArtistItem = artistDetails.length - 1;
            artistName = artistDetails[lastArtistItem].artistName;
            topAlbum = artistDetails[lastArtistItem].topAlbum;
            similarArtist = JSON.parse(artistDetails[lastArtistItem].similarArtist).nodes;
            artistImage = artistDetails[lastArtistItem].artistImage;
        }

        console.log("frissul");
        console.log(spotifyArtistDetails);
        console.log(popularityClass);

        return (
            <div className="row">
                <div className="col-8">
                    <h2 className="mb-3">Előadó adatok</h2>
                    <h3>{artistName}</h3>
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
                    <img src={artistImage} alt={artistName} width="100%"/>
                </div>
                <div className="artistDetails col-8">
                    <ul>
                        <li>Címkék:
                            <ul className="tags">
                                <li className="list-item">Rock</li>
                                <li className="list-item">Pop</li>
                                <li className="list-item">Muzsika</li>
                            </ul>
                        </li>
                        <div className="clearfix"></div>
                        <li>Legismertebb album: {topAlbum}</li>
                        <li>Hasonló előadók:
                            <ul className="similar_artist">{
                                similarArtist.map(function (item) {
                                    if (item.group !== 1) {
                                        return;
                                    }
                                    return <li key={item.id} onClick={e => getArtist(item.id)}>{item.id}</li>
                                })}
                            </ul>
                        </li>
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