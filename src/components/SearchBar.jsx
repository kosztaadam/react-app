import React from "react";

/*class SearchBar extends React.Component {

 /*constructor(props) {
 super(props);
 // Set the videoList to empty array
 this.state = {
 artist: ""
 };
 }

 handleSubmit(event) {
 //TODO: call other component
 this.props.getArtist("Queen");
 }

 handleChange(event) {
 this.setState({artist: event.target.value});
 console.log(event.target.value);
 }

 render() {
 return (
 <div>
 <form onSubmit={() => this.handleSubmit()}>
 <input type="text" value={this.state.artist} onChange={() => this.handleChange()}/>
 </form>
 </div>
 )
 }
 }*/

class SearchBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        const {setArtist} = this.props;
        e.preventDefault();
        setArtist(this.state.value);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    render() {
        const {artist} = this.props;
        const actualArtist = artist[artist.length - 1];

        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input className="form-control" type="text" value={this.state.value} onChange={this.handleChange}/>
                </form>
                <p>{actualArtist}</p>
            </div>
        );
    }
}

export default SearchBar