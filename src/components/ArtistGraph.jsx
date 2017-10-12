import React from "react";
import $ from 'jquery';

class ArtistGraph extends React.Component {

    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    shouldComponentUpdate() {
        if (this.props.loading || this.props.loading === undefined) {
            return false;
        }

        return true;
    }

    handleSubmit(e) {
        const {getArtist} = this.props;
        e.preventDefault();
        console.log(this.state.value);
        // getArtist(this.state.value);
    }

    onTextInputChange(event) {
        console.log("handlechange");
        console.log(event.target.value);
        //this.setState({value: event.target.value});

        let newText = event.target.value;
        return this.setState({value: newText});
    }

    componentWillMount() {
        // Code to get your data into variable 'defaultTextValue'
        console.log("mount");
        this.setState({textInputValue: 'default'});
    }

    render() {
        console.log("graph bejott");

        let similarArtist;
        const artistDetails = this.props.artistDetails;
        if (artistDetails.length > 0) {
            const lastArtistItem = artistDetails.length - 1;
            similarArtist = artistDetails[lastArtistItem].similarArtist;
            similarArtist = JSON.stringify(similarArtist);

            let embedCode = '<script type="text/javascript">renderGraph(' + similarArtist + ', false, false); </script>';
            $('#graph').empty();
            $('#graph').append(embedCode);
            //window.renderGraphFromReact(similarArtist);
            //renderGraph(similarArtist, false, false);
        }

        return (
            <div>
                <svg id="graph" width="500" height="500"/>
                <input id="graphSearch" className="form-control" type="text" value={this.state.value}
                       onChange={this.onTextInputChange}/>
            </div>
        )
    }
}

export default ArtistGraph