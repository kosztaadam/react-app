import React from 'react';
import {Nav, Footer, SearchBar} from '/';
import SearchBarContainer from "../containers/SearchBarContainer"
import ArtistDetailsContainer from "../containers/ArtistDetailsContainer";
import ArtistGraph from "../containers/ArtistGraph";

class Layout extends React.Component {

    render() {
        return (
            <div>
                <Nav/>
                <SearchBarContainer artist={this.props.artist} />
                <ArtistDetailsContainer artist={this.props.artist}/>
                <Footer />
            </div>
        );
    }
}

export default Layout;