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
        /*        const {getArtist} = this.props;

        let artistName = "";
        let listItems = "";
        //console.log(this.props.artistName);
        if (this.props.artistName.length > 0) {
            artistName = this.props.artistName;
            listItems = artistName.map((item) =>
                <li key={item} onClick={e => getArtist(item)}>{item}</li>
            );
        }*/

        return (
            <form className="form-inline mt-2 mb-4 searchform" onSubmit={this.handleSubmit}>
                <input className="form-control" type="text" id="searchInput" placeholder="Keresés..." aria-label="Keresés"
                       value={this.state.value}
                       onChange={this.handleChange}/>
                <button type="submit" className="submit">
                    <span className="search_icon"/>
                </button>
            </form>
        );
    }
}

export default SearchBar