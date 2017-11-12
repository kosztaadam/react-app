import React from 'react';
import SearchBarContainer from "../../containers/artist/SearchBarContainer";

class Nav extends React.Component {

    getParameterByName(name, url) {
        if (!url) url = window.location.href;
        name = name.replace(/[\[\]]/g, "\\$&");
        var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, " "));
    }

    componentDidMount() {
        let artist = this.getParameterByName('artist');
        let similar = this.getParameterByName('similar');
        let deep = this.getParameterByName('deep');
        if (artist !== null && similar !== null && deep !== null) {
            this.props.getArtist(artist, similar, deep);
        } else if (artist !== null) {
            this.props.getArtist(artist, 3, 2);
        }
    }

    render() {
        const {getArtist} = this.props;

        let artistName = "";
        let listItems = "";
        if (this.props.artistName.length > 0) {
            artistName = this.props.artistName;
            listItems = artistName.map((item) =>
                <li className="searchedArtist" key={item} onClick={e => getArtist(item)}>{item}</li>
            );
        }

        return (
            <div className="left_sidebar">
                <nav>
                    <button className="navbar_toggler" type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent" aria-expanded="false">
                        <span className="navbar-toggler-icon navbar_icon"/>
                    </button>

                    <a className="navbar-brand" href="/"><i className="fa fa-music" aria-hidden="true"/>
                        <span className="title">Zenei adatbázis</span>
                    </a>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">

                        <SearchBarContainer artistName={this.props.artistName}/>

                        <ul className="navbar-nav menu mr-auto">
                            <li className="title">Keresési témák</li>
                            <li className="nav-item active">
                                <a className="nav-link" href="/eloadok">Előadók</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/albumok">Albumok</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/szamok">Számok</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/cimkek">Címkék</a>
                            </li>
                        </ul>

                        <hr className="line"/>

                        <ul className="navbar-nav mr-auto">
                            <li className="title">Gráf beállítások</li>
                            <li className="form-group">
                                <label htmlFor="fisheye">Halszem effekt</label>
                                <input type="checkbox" id="fisheye" data-toggle="toggle" data-on="Bekapcsolva"
                                       data-off="Kikapcsolva" data-onstyle="success" data-offstyle="off"/>
                            </li>
                            <li className="form-group">
                                <label htmlFor="highlight">Pontok kiemelése</label>
                                <input type="checkbox" id="highlight" data-toggle="toggle" data-on="Bekapcsolva"
                                       data-off="Kikapcsolva" data-onstyle="success" data-offstyle="off"/>
                            </li>
                        </ul>

                        <hr className="line"/>

                        <ul className="navbar-nav mr-auto">
                            <li className="title">Előző keresések</li>
                            {listItems}
                        </ul>

                    </div>
                </nav>
            </div>
        )
    }

}

export default Nav