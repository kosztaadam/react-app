import React from "react";

class SearchBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            track: '',
            artist: '',
            similar: 3,
            depth: 3
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSimilarSelectChange = this.handleSimilarSelectChange.bind(this);
        this.handleDepthSelectChange = this.handleDepthSelectChange.bind(this);

        this.artistHandleChange = this.artistHandleChange.bind(this);
        this.trackHandleChange = this.trackHandleChange.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        const {getTrack} = this.props;
        e.preventDefault();
        getTrack(this.state.artist, this.state.track, this.state.similar, this.state.depth);
    }

    handleChange(event) {
        this.setState({track: event.target.value});
    }

    handleSimilarSelectChange(event) {
        this.setState({similar: event.target.value});
    }

    handleDepthSelectChange(event) {
        this.setState({depth: event.target.value});
    }

    artistHandleChange(event) {
        this.setState({artist: event.target.value});
    }

    trackHandleChange(event) {
        this.setState({track: event.target.value});
    }

    render() {

        return (
            <form className="form-inline mt-2 mb-4 searchform" onSubmit={this.handleSubmit}>
                <input className="form-control mb-2" type="text" id="searchInput" placeholder="Előadő"
                       aria-label="Előadő"
                       value={this.state.artist}
                       onChange={this.artistHandleChange}/>
                <input className="form-control" type="text" id="albumInput" placeholder="Szám"
                       aria-label="Szám"
                       value={this.state.track}
                       onChange={this.trackHandleChange} required/>
                <button type="submit" className="submit">
                    <span className="search_icon"/>
                </button>
                <button type="submit" className="submit_2">
                    <span className="search_icon"/>
                </button>

                <hr className="line"/>

                <ul className="navbar-nav mr-auto mt-4 search_options">
                    <li className="title">Keresés beállítások</li>
                    <li className="form-group">
                        <label htmlFor="artist_number">Hasonló előadók száma</label>
                        <p className="small red warning">Figyelem! Magas érték választása növelheti az
                            oldalbetöltés
                            idejét!</p>
                        <select className="form-control artist_select" id="artist_number" value={this.state.similar}
                                onChange={this.handleSimilarSelectChange}>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </li>
                    <li className="form-group">
                        <label htmlFor="artist_depth">Keresési mélység</label>
                        <p className="small red warning">Figyelem! Magas érték választása növelheti az
                            oldalbetöltés
                            idejét!</p>
                        <select className="form-control artist_select" id="artist_depth" value={this.state.depth}
                                onChange={this.handleDepthSelectChange}>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </li>

                    <button type="submit" className="btn btn-submit mt-3">Keresés</button>

                </ul>
            </form>
        );
    }
}

export default SearchBar