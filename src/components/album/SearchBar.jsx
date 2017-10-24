import React from "react";

class SearchBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            artist: '',
            album: ''
        };

        this.artistHandleChange = this.artistHandleChange.bind(this);
        this.albumHandleChange = this.albumHandleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        const {getAlbum} = this.props;
        e.preventDefault();
        getAlbum(this.state.artist, this.state.album);
    }

    artistHandleChange(event) {
        this.setState({artist: event.target.value});
    }

    albumHandleChange(event) {
        this.setState({album: event.target.value});
    }

    render() {
        return (
            <form className="form-inline mt-2 mb-4 searchform" onSubmit={this.handleSubmit}>
                <input className="form-control mb-2" type="text" id="searchInput" placeholder="Előadő"
                       aria-label="Előadő"
                       value={this.state.artist}
                       onChange={this.artistHandleChange}/>
                <input className="form-control" type="text" id="albumInput" placeholder="Album"
                       aria-label="Album"
                       value={this.state.album}
                       onChange={this.albumHandleChange} required/>
                <button type="submit" className="submit">
                    <span className="search_icon"/>
                </button>
                <button type="submit" className="submit_2">
                    <span className="search_icon"/>
                </button>
            </form>
        );
    }
}

export default SearchBar