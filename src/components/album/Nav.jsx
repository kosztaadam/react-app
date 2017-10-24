import React from 'react';
import SearchBarContainer from "../../containers/album/SearchBarContainer";

class Nav extends React.Component {

    render() {
        const {getAlbum} = this.props;

        let albumName = "";
        let listItems = "";
        if (this.props.albumName.length > 0) {
            //const lastArtistItem = this.props.albumName.length - 1;
            albumName = this.props.albumName;
            //console.log(albumName);
            listItems = albumName.map((item) =>
                <li className="searchedArtist" key={item.albumName} onClick={e => getAlbum(item.albumName)}>{item.albumName}</li>
            );
        }

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

                        <hr className="line"/>

                        <ul className="navbar-nav mr-auto">
                            <li className="title">Keresési témák</li>
                            <li className="nav-item">
                                <a className="nav-link" href="/eloadok">Előadók</a>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link" href="/albumok">Albumok</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Számok</a>
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