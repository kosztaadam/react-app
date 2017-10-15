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
        const {getArtist, artistDetails} = this.props;

        let artistName, topAlbum = "";
        let similarArtist = [];

        if (artistDetails.length > 0) {
            const lastArtistItem = artistDetails.length - 1;
            artistName = artistDetails[lastArtistItem].artistName;
            topAlbum = artistDetails[lastArtistItem].topAlbum;
            similarArtist = JSON.parse(artistDetails[lastArtistItem].similarArtist).nodes;
        }

        console.log("frissul");

        return (
            <div className="row">
                <div className="col-12">
                    <h2>Előadó adatok</h2>
                    <h3>{artistName}</h3>
                </div>

                <div className="col-12">
                    <   hr className="line"/>
                </div>

                <div className="artistDetails col-12">
                    <ul>
                        <li>Legismertebb album: {topAlbum}</li>
                        <li>Hasonló előadók:
                            <ul>{
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