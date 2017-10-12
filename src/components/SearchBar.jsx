import React from "react";

class SearchBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        const {getArtist} = this.props;
        e.preventDefault();
        getArtist(this.state.value);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    render() {
        let artistName = "";
        console.log(this.props.artistName);
        if(this.props.artistName.length > 0) {
            artistName = this.props.artistName;
        }
        //const actualArtist = this.props.artist[this.props.artist.length - 1];

        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input id="search" className="form-control" type="text" value={this.state.value} onChange={this.handleChange}/>
                </form>
                <p>Legutóbbi keresések: {artistName} </p>

            </div>
        );
    }
}

export default SearchBar