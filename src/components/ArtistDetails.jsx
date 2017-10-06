import React from "react";
//import $ from 'jquery';

class ArtistDetails extends React.Component {

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

    render() {
        let artistName, topAlbum = "";
        let similarArtist = [];
        if (this.props.artist.length > 0) {
            artistName = this.props.artist[this.props.artist.length - 1].artistName;
        }
        if(this.props.artist.loading === false) {
            topAlbum = this.props.artist[this.props.artist.length - 1].topAlbum;
            similarArtist = this.props.artist[this.props.artist.length - 1].similarArtist.nodes;
        }
        const {getArtist} = this.props;
        console.log("frissul");
        console.log(this.props.loading);
        return (
            <div className="artistdetails m-3">
                Előadó: {artistName} <br />
                Legismertebb album: {topAlbum} <br />
                Hasonló előadók:
                <ul>{
                    similarArtist.map(function (item) {
                        if(item.group !== 1) {
                            return;
                        }
                        return <li key={item.id} onClick={e => getArtist(item.id)}>{item.id}</li>
                    })}
                </ul>
            </div>
        )
    }
}

export default ArtistDetails;