import React from 'react';
import SearchBarContainer from "../containers/SearchBarContainer";

class Nav extends React.Component {

    render() {
        return (
            <div className="left_sidebar">
                <nav>
                    <button className="navbar_toggler" type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent" aria-expanded="false">
                        <span className="navbar-toggler-icon navbar_icon"/>
                    </button>

                    <a className="navbar-brand" href="#"><i className="fa fa-music" aria-hidden="true"/>
                        <span className="title">Zenei adatbázis</span>
                    </a>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">

                        <SearchBarContainer artistName={this.props.artistName}/>

                        <ul className="navbar-nav mr-auto">
                            <li className="title">Keresési témák</li>
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Előadók</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Albumok</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Számok</a>
                            </li>
                        </ul>

                        <hr className="line"/>

                        <ul className="navbar-nav mr-auto">
                            <li className="title">Keresés beállítások</li>
                            <li className="form-group">
                                <label htmlFor="artist_number">Hasonló előadók száma</label>
                                <p className="small red warning">Figyelem! Magas érték választása növelheti az
                                    oldalbetöltés
                                    idejét!</p>
                                <select className="form-control artist_select" id="artist_number">
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
                                <select className="form-control artist_select" id="artist_depth">
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </select>
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

                    </div>
                </nav>
            </div>
        )
    }

}

export default Nav